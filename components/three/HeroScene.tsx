'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial, Float, Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function FloatingOrb({ position, color, scale }: { position: [number, number, number]; color: string; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.1}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

function IcosahedronMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0, -1]}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#06b6d4"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

function TorusKnotMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
  });

  return (
    <Float speed={1.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[-2.8, -1, -0.5]}>
        <torusKnotGeometry args={[0.7, 0.22, 100, 16]} />
        <meshStandardMaterial
          color="#a78bfa"
          transparent
          opacity={0.6}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#06b6d4" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

function MouseResponsiveGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += (mouse.x * 0.3 - groupRef.current.rotation.y) * 0.05;
    groupRef.current.rotation.x += (-mouse.y * 0.2 - groupRef.current.rotation.x) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <FloatingOrb position={[0, 0, 0]} color="#06b6d4" scale={1.4} />
      <FloatingOrb position={[-3, 1.5, -2]} color="#a78bfa" scale={0.6} />
      <FloatingOrb position={[3, -1, -1]} color="#10b981" scale={0.45} />
      <IcosahedronMesh />
      <TorusKnotMesh />
      <Particles />
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#a78bfa" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />
      <MouseResponsiveGroup />
    </Canvas>
  );
}
