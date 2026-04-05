"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Github } from "../Icons";
import Link from "next/link";
import * as THREE from "three";

// Custom type augmentation since maath is causing issues
function generateSpherePositions(count: number, radius: number): Float32Array {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    const sinPhi = Math.sin(phi);
    
    positions[i * 3] = r * sinPhi * Math.cos(theta);
    positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function Starfield(props: any) {
  const ref = useRef<THREE.Points>(null);
  
  // Custom random generation instead of maath/random to avoid type issues
  const sphere = useMemo(() => generateSpherePositions(3000, 1.5), []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#888"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20">
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Starfield />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 w-full"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-black/50 backdrop-blur-md mb-8 shadow-sm">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest uppercase text-zinc-600 dark:text-zinc-400">Agentic Standards 2026</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 glow-text">
          awesome-<br className="md:hidden"/>agent-skills
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          A curated ecosystem of structured skills, toolsets, and workflows enabling AI agents to interact with the real world securely and deterministically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#directory"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-bold hover:scale-105 transition-all w-full sm:w-auto shadow-2xl shadow-black/20 dark:shadow-white/20"
          >
            Explore Directory <ArrowRight className="w-5 h-5" />
          </Link>
          <a
            href="https://github.com/heilcheng/awesome-agent-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-panel font-bold hover:bg-zinc-100 dark:hover:bg-white/10 transition-all w-full sm:w-auto"
          >
            <Github className="w-5 h-5" /> View on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
