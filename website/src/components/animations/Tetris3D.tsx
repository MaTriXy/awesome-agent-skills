"use client";

import { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Play } from "lucide-react";
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

function getRandomPiece() {
  const name = PIECE_NAMES[Math.floor(Math.random() * PIECE_NAMES.length)];
  return {
    shape: TETROMINOES[name].shape,
    color: TETROMINOES[name].color,
    x: Math.floor(COLS / 2) - Math.floor(TETROMINOES[name].shape[0].length / 2),
    y: 0
  };
}

// --- R3F GEOMETRY COMPONENT ---
function GameBoard({ board, 
  currentPiece, 
  score 
}: { 
  board: (string | null)[][]; 
  currentPiece: any; 
  score: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Center the board conceptually
  const offsetX = -COLS / 2 + 0.5;
  const offsetY = ROWS / 2 - 0.5;

  const geometries = useMemo(() => new THREE.BoxGeometry(0.95, 0.95, 0.95), []);
  const materials = useMemo(() => {
    const mats: Record<string, THREE.MeshStandardMaterial> = {};
    Object.values(TETROMINOES).forEach(t => {
      mats[t.color] = new THREE.MeshStandardMaterial({ 
        color: t.color, 
        metalness: 0.2, 
        roughness: 0.1,
        emissive: t.color,
        emissiveIntensity: 0.2
      });
    });
    // Add default ghostly grid material
    mats["ghost"] = new THREE.MeshStandardMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.05,
      metalness: 0.5
    });
    return mats;
  }, []);

  return (
    <group ref={groupRef} position={[0, -1, 0]} rotation={[0.1, -0.2, 0]}>
      {/* Background Frame Matrix to show empty spots */}
      {Array.from({ length: ROWS }).map((_, y) => 
        Array.from({ length: COLS }).map((_, x) => (
          <mesh 
            key={`grid-${x}-${y}`} 
            position={[x + offsetX, -y + offsetY, -0.5]} 
            geometry={geometries} 
            material={materials["ghost"]} 
          />
        ))
      )}

       {/* Landed Board */}
       {board.map((row, y) =>
        row.map((cellShapeColor, x) => {
          if (!cellShapeColor) return null;
          return (
            <mesh 
              key={`${x}-${y}`} 
              position={[x + offsetX, -y + offsetY, 0]} 
              geometry={geometries} 
              material={materials[cellShapeColor]} 
            />
          );
        })
      )}

      {/* Current Active Piece */}
      {currentPiece && currentPiece.shape.map((row: number[], py: number) =>
        row.map((val: number, px: number) => {
          if (val === 0) return null;
          return (
            <mesh 
              key={`active-${px}-${py}`} 
              position={[currentPiece.x + px + offsetX, -(currentPiece.y + py) + offsetY, 0]} 
              geometry={geometries} 
              material={materials[currentPiece.color]} 
            />
          );
        })
      )}
    </group>
  );
}

export default function Tetris3D() {
  const [board, setBoard] = useState<(string | null)[][]>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<any>(null);
  const [playing, setPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  // Focus trap ref
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

  const clearLines = useCallback((oldBoard: (string|null)[][]) => {
    const newBoard = oldBoard.filter(row => row.some(cell => cell === null));
    const linesCleared = ROWS - newBoard.length;
    if (linesCleared > 0) {
      setScore(s => s + [0, 100, 300, 500, 800][linesCleared]);
      const emptyLines = Array.from({ length: linesCleared }, () => Array(COLS).fill(null));
      return [...emptyLines, ...newBoard];
    }
    return oldBoard;
  }, []);

  const dropPiece = useCallback(() => {
    setCurrentPiece((prev: any) => {
      if (!prev) return null;
      if (!checkCollision(prev.shape, prev.x, prev.y + 1, board)) {
        return { ...prev, y: prev.y + 1 };
      } else {
        // Freeze piece
        const newBoard = [...board];
        prev.shape.forEach((row: number[], py: number) => {
          row.forEach((val: number, px: number) => {
            if (val !== 0) {
              if (prev.y + py >= 0 && prev.y + py < ROWS) {
                newBoard[prev.y + py][prev.x + px] = prev.color;
              }
            }
          });
        });
        const clearedBoard = clearLines(newBoard);
        setBoard(clearedBoard);
        
        const nextPiece = getRandomPiece();
        if (checkCollision(nextPiece.shape, nextPiece.x, nextPiece.y, clearedBoard)) {
          setGameOver(true);
          setPlaying(false);
          return null;
        }
        return nextPiece;
      }
    });
  }, [board, checkCollision, clearLines]);

  // Main Loop
  useEffect(() => {
    if (!playing || gameOver) return;
    const interval = setInterval(dropPiece, 600);
    return () => clearInterval(interval);
  }, [playing, gameOver, dropPiece]);

  // Key controls
  useEffect(() => {
    if (!playing) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault(); // prevent scroll
      setCurrentPiece((prev: any) => {
        if (!prev) return null;

        if (e.key === "ArrowLeft") {
          if (!checkCollision(prev.shape, prev.x - 1, prev.y, board)) return { ...prev, x: prev.x - 1 };
        } else if (e.key === "ArrowRight") {
          if (!checkCollision(prev.shape, prev.x + 1, prev.y, board)) return { ...prev, x: prev.x + 1 };
        } else if (e.key === "ArrowDown") {
          if (!checkCollision(prev.shape, prev.x, prev.y + 1, board)) return { ...prev, y: prev.y + 1 };
        } else if (e.key === "ArrowUp") {
          // Rotate
          const rotated = prev.shape[0].map((val: number, index: number) => prev.shape.map((row: number[]) => row[index]).reverse());
          if (!checkCollision(rotated, prev.x, prev.y, board)) return { ...prev, shape: rotated };
        }
        return prev;
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (container) container.removeEventListener('keydown', handleKeyDown);
    };
  }, [playing, board, checkCollision]);

  const startGame = () => {
    setBoard(createEmptyBoard());
    setScore(0);
    setGameOver(false);
    setCurrentPiece(getRandomPiece());
    setPlaying(true);
    containerRef.current?.focus();
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] xl:aspect-square max-h-[500px] bg-neutral-950 rounded-3xl border-4 border-neutral-800 shadow-2xl overflow-hidden shadow-purple-500/10 outline-none flex flex-col" tabIndex={0} ref={containerRef}>
      
      {/* Mock Terminal UI Navbar */}
      <div className="h-8 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 justify-between select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="text-[10px] font-mono text-neutral-500">agent-skills-simulator.exe</div>
        <div className="text-xs font-mono font-bold text-neutral-400">SCORE: {score}</div>
      </div>

      <div className="flex-1 relative cursor-pointer" onClick={() => !playing && startGame()}>
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <GameBoard board={board} currentPiece={currentPiece} score={score} />
        </Canvas>

        {!playing && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center pointer-events-none">
             <div className="bg-white dark:bg-neutral-900 px-6 py-4 rounded-2xl shadow-xl flex flex-col items-center border border-neutral-200 dark:border-neutral-800">
               {gameOver ? (
                  <>
                    <div className="text-xl font-black text-rose-500 mb-2">GAME OVER</div>
                    <div className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 mb-4">FINAL SCORE: {score}</div>
                  </>
               ) : (
                 <div className="w-12 h-12 bg-indigo-500 text-white rounded-full flex items-center justify-center mb-4">
                    <Play className="w-6 h-6 ml-1" />
                 </div>
               )}
               <button className="px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-sm font-bold shadow-sm pointer-events-auto hover:scale-105 transition-transform" onClick={startGame}>
                 {gameOver ? 'PLAY AGAIN' : 'TAP TO PLAY'}
               </button>
               <div className="mt-3 text-[10px] text-neutral-500 font-mono">Use Arrow Keys to move/rotate</div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
}
