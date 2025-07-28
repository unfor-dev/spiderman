import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import * as THREE from 'three'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

const cameraTarget = new THREE.Vector3(0, -0.5, 0)

export default function CameraAnimation() {
  const camera = useThree((state) => state.camera)
  const tl = gsap.timeline()

  useFrame(() => {
    camera.lookAt(cameraTarget)
  })

  useGSAP(() => {
    tl.from(cameraTarget, {
      x: 0,
      y: 4,
      z: 3,
      ease: "power1.inOut",
      duration: 3.5,
    })
    // 🔹 First scroll section - camera and target move
    tl.fromTo(
      camera.position,
      { x: 0, y: 1, z: 4 },
      {
        x: 2.56,
        y: -1.01,
        z: 2,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      }
    )

    tl.fromTo(
      cameraTarget,
      { x: 0, y: -0.5, z: 0 },
      {
        x: -4,
        y: 0,
        z: 0,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      },
      '<'
    )

    // 🔹 Fade out first section content
    tl.to(
      '.section-1',
      {
        opacity: 0,
        scrollTrigger: {
          trigger: '.section-2',
          start: 'top bottom',
          end: 'top 30%',
          scrub: 0.5,
        },
      },
      '<'
    )

    // 🔹 Second scroll section - camera and target move again
    tl.fromTo(
      camera.position,
      { x: 2.56, y: -1.01, z: 2 },
      {
        x: 0,
        y: -1.01,
        z: 5,
        ease: 'power2.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.section-3',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      }
    )

    tl.fromTo(
      cameraTarget,
      { x: -4, y: 0, z: 0 },
      {
        x: 4,
        y: 0,
        z: 0,
        ease: 'power2.inOut',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.section-3',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 0.5,
        },
      }
    )
  }, [])

  return null
}
