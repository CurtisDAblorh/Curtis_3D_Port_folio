import { Suspense, useEffect, useState } from 'react';
import {Canvas} from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


type ComputersProps = {
  isMobile: boolean;
};

const Computers = ({isMobile}: ComputersProps) => {

  const computer = useGLTF('./desktop_pc/WeDevMe.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.55}/>
      <pointLight intensity={1}/>
      <spotLight 
      position={[-20,50,-13]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive
      object={computer.scene}
      scale={isMobile? 2.5: 3.3}
      position={isMobile? [-0,-4.25,0]:[-0,-5.25,-1.5]}

      rotation={[0.0, -1, 0.0]}
      />
    </mesh>
  )
}
const ComputersCanvas = ()=> {
  const [isMobile, setIsMobile]=useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia(
 '(max-width : 500px)');

  setIsMobile(mediaQuery.matches);

const handleMediaQueryChange = (event: MediaQueryListEvent) => {
  setIsMobile(event.matches);
}

mediaQuery.addEventListener('change',
 handleMediaQueryChange);

 return ()=> {
  mediaQuery.removeEventListener('change',
  handleMediaQueryChange);
 }}
 , [])



return (
<Canvas
className="cursor-col-resize"
  shadows
  camera={{position: [20, 3, 5], fov: 25}}
  gl={{preserveDrawingBuffer: true}}
>

<Suspense fallback= {<CanvasLoader/>}>
<OrbitControls 
   autoRotate
   autoRotateSpeed={0.3}
enableZoom={false}
 maxPolarAngle={Math.PI /4.5}
  minPolarAngle={Math.PI / 4.5}

  />
<Computers  isMobile={isMobile} />
</Suspense>
<Preload all/>
</Canvas>


)
}
export default ComputersCanvas;
