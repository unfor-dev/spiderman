import { useLoader } from '@react-three/fiber'
import { EffectComposer, Bloom, LUT } from '@react-three/postprocessing'
import { LUTCubeLoader } from 'postprocessing'

export function Effects() {
  const texture = useLoader(LUTCubeLoader, '/F-6800-STD.cube')
  return (
    (
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={10} intensity={0.1} />
        <LUT lut={texture} />
      </EffectComposer>
    )
  )
}
export default Effects