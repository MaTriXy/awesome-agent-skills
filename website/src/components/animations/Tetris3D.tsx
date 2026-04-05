"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Play, RotateCw, ArrowLeft, ArrowRight, ArrowDown, Shield, SkipForward } from "lucide-react";
import * as THREE from "three";

// --- TETRIS LOGIC ---
const ROWS = 20;
const COLS = 10;

const TETROMINOES = {
  I: { shape: [[1, 1, 1, 1]], color: "#0ea5e9" }, // cyan
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: "#3b82f6" }, // blue
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: "#f97316" }, // orange
  O: { shape: [[1, 1], [1, 1]], color: "#eab308" }, // yellow
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: "#22c55e" }, // green
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: "#a855f7" }, // purple
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: "#ef4444" }, // red
};

type PieceName = keyof typeof TETROMINOES;
const PIECE_NAMES = Object.keys(TETROMINOES) as PieceName[];

const createEmptyBoard = () => Array.from({ length: ROWS }, () => Array(COLS).fill(null));

function getRandomPiece(): any {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  return {
    name,
    shape: TETROMINOES[name].shape,
    color: TETROMINOES[name].color,
    x: Math.floor(COLS / 2) - Math.floor(TETROMINOES[name].shape[0].length / 2),
    y: 0
  };
}

// --- R3F GEOMETRY COMPONENT ---
function GameBoard({ board, currentPiece }: { board: (string | null)[][]; currentPiece: any }) {
  const offsetX = -COLS / 2 + 0.5;
  const offsetY = ROWS / 2 - 0.5;

  const geometries = useMemo(() => new THREE.BoxGeometry(0.95, 0.95, 0.95), []);
  const materials = useMemo(() => {
    const mats: Record<string, THREE.MeshStandardMaterial> = {};
    Object.values(TETROMINOES).forEach(t => {
      mats[t.color] = new THREE.MeshStandardMaterial({ 
        color: t.color, 
        metalness: 0.3, 
        roughness: 0.2,
        emissive: t.color,
        emissiveIntensity: 0.15
      });
    });
    mats["ghost"] = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.03,
      metalness: 0.5
    });
    return mats;
  }, []);

  return (
    <group position={[0, -1, 0]} rotation={[0.1, -0.2, 0]}>
      {/* Background Grid */}
      {Array.from({ length: ROWS }).map((_, y) => 
        Array.from({ length: COLS }).map((_, x) => (
          <mesh key={`grid-${x}-${y}`} position={[x + offsetX, -y + offsetY, -0.5]} geometry={geometries} material={materials["ghost"]} />
        ))
      )}

      {/* Landed Board */}
      {board.map((row, y) => row.map((color, x) => color && <mesh key={`${x}-${y}`} position={[x + offsetX, -y + offsetY, 0]} geometry={geometries} material={materials[color]} />))}

      {/* Current Piece */}
      {currentPiece && currentPiece.shape.map((row: number[], py: number) =>
        row.map((val: number, px: number) => val !== 0 && (
          <mesh key={`active-${px}-${py}`} position={[currentPiece.x + px + offsetX, -(currentPiece.y + py) + offsetY, 0]} geometry={geometries} material={materials[currentPiece.color]} />
        ))
      )}
    </group>
  );
}

export default function Tetris3D() {
  const [board, setBoard] = useState<(string | null)[][]>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<any>(null);
  const [nextPiece, setNextPiece] = useState<any>(null);
  const [heldPiece, setHeldPiece] = useState<any>(null);
  const [canHold, setCanHold] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const checkCollision = useCallback((shape: number[][], x: number, y: number, stateBoard: (string|null)[][]) => {
    for (let r = 0; r < shape.length; r++) {
      for (let c = 0; c < shape[r].length; c++) {
        if (shape[r][c] !== 0) {
          const newY = y + r;
          const newX = x + c;
          if (newX < 0 || newX >= COLS || newY >= ROWS) return true;
          if (newY >= 0 && stateBoard[newY][newX] !== null) return true;
        }
      }
    }
    return false;
  }, []);

  const moveLeft = useCallback(() => {
    setCurrentPiece((p: any) => p && !checkCollision(p.shape, p.x - 1, p.y, board) ? { ...p, x: p.x - 1 } : p);
  }, [board, checkCollision]);

  const moveRight = useCallback(() => {
    setCurrentPiece((p: any) => p && !checkCollision(p.shape, p.x + 1, p.y, board) ? { ...p, x: p.x + 1 } : p);
  }, [board, checkCollision]);

  const moveDown = useCallback(() => {
    setCurrentPiece((p: any) => p && !checkCollision(p.shape, p.x, p.y + 1, board) ? { ...p, y: p.y + 1 } : p);
  }, [board, checkCollision]);

  const rotate = useCallback(() => {
    setCurrentPiece((p: any) => {
      if (!p) return p;
      const rotated = p.shape[0].map((_: any, i: number) => p.shape.map((row: any) => row[i]).reverse());
      return !checkCollision(rotated, p.x, p.y, board) ? { ...p, shape: rotated } : p;
    });
  }, [board, checkCollision]);

  const hold = useCallback(() => {
    if (!canHold || !playing) return;
    setCurrentPiece((prev: any) => {
      let next;
      if (!heldPiece) {
        next = nextPiece;
        setNextPiece(getRandomPiece());
        setHeldPiece(prev);
      } else {
        next = heldPiece;
        setHeldPiece(prev);
      }
      setCanHold(false);
      return { ...next, x: Math.floor(COLS / 2) - Math.floor(next.shape[0].length / 2), y: 0 };
    });
  }, [canHold, heldPiece, nextPiece, playing]);

  const dropPiece = useCallback(() => {
    setCurrentPiece((prev: any) => {
      if (!prev) return null;
      if (!checkCollision(prev.shape, prev.x, prev.y + 1, board)) {
        return { ...prev, y: prev.y + 1 };
      } else {
        const newBoard = [...board];
        prev.shape.forEach((row: number[], py: number) => {
          row.forEach((val: number, px: number) => {
            if (val !== 0 && prev.y + py >= 0 && prev.y + py < ROWS) newBoard[prev.y + py][prev.x + px] = prev.color;
          });
        });
        const clearedBoard = newBoard.filter(row => row.some(cell => cell === null));
        const lines = ROWS - clearedBoard.length;
        if (lines > 0) setScore(s => s + [0, 100, 300, 500, 800][lines]);
        const finalBoard = [...Array.from({ length: lines }, () => Array(COLS).fill(null)), ...clearedBoard];
        setBoard(finalBoard);
        setCanHold(true);
        const next = nextPiece;
        setNextPiece(getRandomPiece());
        if (checkCollision(next.shape, next.x, next.y, finalBoard)) {
          setGameOver(true);
          setPlaying(false);
          return null;
        }
        return next;
      }
    });
  }, [board, checkCollision, nextPiece]);

  useEffect(() => {
    if (!playing || gameOver) return;
    const interval = setInterval(dropPiece, 600 - Math.min(score / 10, 400));
    return () => clearInterval(interval);
  }, [playing, gameOver, dropPiece, score]);

  useEffect(() => {
    if (!playing) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (key === "arrowleft" || key === "a") moveLeft();
      else if (key === "arrowright" || key === "d") moveRight();
      else if (key === "arrowdown" || key === "s") moveDown();
      else if (key === "arrowup" || key === "w") rotate();
      else if (key === "c" || key === " ") hold();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playing, moveLeft, moveRight, moveDown, rotate, hold]);

  const startGame = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setGameOver(false);
    setHeldPiece(null);
    setCanHold(true);
    const initial = getRandomPiece();
    setCurrentPiece(initial);
    setNextPiece(getRandomPiece());
    setPlaying(true);
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] xl:aspect-square max-h-[600px] bg-neutral-800 rounded-3xl border-4 border-neutral-700 shadow-2xl overflow-hidden flex flex-col focus:outline-none" tabIndex={0} ref={containerRef}>
      
      {/* Header */}
      <div className="h-10 bg-neutral-900 border-b border-neutral-700 flex items-center px-4 justify-between">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase">Agent Simulator v2.0</div>
        <div className="text-xs font-mono font-bold text-blue-400">SCORE: {score}</div>
      </div>

      <div className="flex-1 relative flex">
        {/* Left Side: Stats/Hold */}
        <div className="hidden sm:flex w-24 border-r border-neutral-700/50 flex-col p-3 space-y-6">
          <div className="space-y-2">
            <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-tighter">Hold</div>
            <div className="h-16 bg-neutral-900/50 rounded-lg border border-neutral-700/30 flex items-center justify-center">
              {heldPiece && <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: heldPiece.color }} />}
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-[9px] font-bold text-neutral-500 uppercase tracking-tighter">Next</div>
            <div className="h-16 bg-neutral-900/50 rounded-lg border border-neutral-700/30 flex items-center justify-center">
              {nextPiece && <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: nextPiece.color }} />}
            </div>
          </div>
        </div>

        {/* Game Canvas Overlay Area */}
        <div className="flex-1 relative">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
            <ambientLight intensity={0.6} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <GameBoard board={board} currentPiece={currentPiece} />
          </Canvas>

          {/* Touch/Mouse Overlay Controls */}
          <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2 px-4 pointer-events-none opacity-40 hover:opacity-100 transition-opacity">
            <button onPointerDown={(e) => { e.stopPropagation(); moveLeft(); }} className="p-3 bg-neutral-900/80 text-white rounded-xl pointer-events-auto active:scale-90 transition-transform border border-neutral-700"><ArrowLeft size={18}/></button>
            <button onPointerDown={(e) => { e.stopPropagation(); rotate(); }} className="p-3 bg-neutral-900/80 text-white rounded-xl pointer-events-auto active:scale-90 transition-transform border border-neutral-700"><RotateCw size={18}/></button>
            <button onPointerDown={(e) => { e.stopPropagation(); moveRight(); }} className="p-3 bg-neutral-900/80 text-white rounded-xl pointer-events-auto active:scale-90 transition-transform border border-neutral-700"><ArrowRight size={18}/></button>
            <button onPointerDown={(e) => { e.stopPropagation(); hold(); }} className="p-3 bg-neutral-900/80 text-white rounded-xl pointer-events-auto active:scale-90 transition-transform border border-neutral-700"><Shield size={18}/></button>
            <button onPointerDown={(e) => { e.stopPropagation(); moveDown(); }} className="p-3 bg-neutral-900/80 text-white rounded-xl pointer-events-auto active:scale-90 transition-transform border border-neutral-700"><ArrowDown size={18}/></button>
          </div>

          {!playing && (
            <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-md flex flex-col items-center justify-center px-6 text-center">
                {gameOver ? (
                  <div className="mb-6 space-y-1">
                    <div className="text-3xl font-black text-white italic tracking-tighter">GAME OVER</div>
                    <div className="text-blue-400 font-mono text-sm">CRITICAL FAILURE DETECTED</div>
                  </div>
                ) : (
                  <div className="mb-8 space-y-2">
                    <h3 className="text-2xl font-black text-white tracking-widest uppercase">Agent Core</h3>
                    <p className="text-neutral-400 text-xs font-medium">Standardize instructions. Run perfectly.</p>
                  </div>
                )}
                <button 
                  onClick={startGame}
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 rounded-full font-black text-sm hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  <Play size={18} fill="currentColor"/> {gameOver ? "REBOOT SYSTEM" : "INITIALIZE SKILL"}
                </button>
                <div className="mt-8 grid grid-cols-2 gap-4 text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                  <div>Move: WASD</div>
                  <div>Hold: Shift/C</div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
