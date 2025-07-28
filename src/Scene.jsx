import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import { Billboard, Capsule, Environment, Float, Lightformer, MeshTransmissionMaterial, Text, Grid } from '@react-three/drei'
import Model from './Model'
import Particles from './Particles'
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Vignette, Glitch } from '@react-three/postprocessing'
import CameraRig from './CameraRig'
import CameraAnimation from './CameraAnimation'
import Effects from './Effects'
import { CircleGeometry } from 'three'

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 4] }} gl={{ antialias: false, alpha: false }} dpr={1}>
      <color args={['black']} attach="background" />
      <Suspense fallback={null}>
        <CameraRig>

          <Model scale={2.6} position={[0, -3.2, 2]} rotation={[-0.2, 0.7, 0]} />

          <Lightformer form="circle" intensity={30} position={[15, 8, -30]} scale={3} />

          <Environment environmentIntensity={2}>
            <Lightformer form="rect" intensity={10} position={[1, 5, -4]} scale={5} />
            <Lightformer form="rect" intensity={4} position={[1, -5, 4]} scale={5} />
          </Environment>
          <Particles particlesCount={100} />
          <Float>
            <mesh scale={4} position={[0.7, 0.4, -1]} rotation={[-0.3, 0, Math.PI / 2.5]}>
            <ringGeometry args={[-1.6, 0.1, 1.1, 2]} />
            <meshStandardMaterial color="white" roughness={1} intensity={1.1} />
          </mesh>
          </Float>

        </CameraRig>
        <Effects />

        <CameraAnimation />
      </Suspense>
    </Canvas>
  )
}

export default Scene
