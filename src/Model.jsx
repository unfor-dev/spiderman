import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/spider.glb')
  return (
    <group {...props} dispose={null}>
      <group name="root_71" scale={0.01}>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials['Body.001']}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials['Head.001']}
          skeleton={nodes.Object_8.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/spider.glb')
