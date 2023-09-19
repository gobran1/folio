import React from 'react'

import {useEffect,useState,Suspense} from "react";

import {Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../CanvasLoader.jsx";

const Computers = ({isMobile}) => {
  const computers = useGLTF("folio/desktop_pc/scene.gltf")
    return (
      <mesh>
        <hemisphereLight
            intensity={4}
            groundColor="black"
            position={[2,-8,-1.5]}
        />
        <pointLight position={[13,-1,7]}  intensity={100}/>
        <spotLight position={[-20,50,10]} penumbra={1} intensity={7000} angle={1} castShadow shadow-mapSize={1024}/>
        <primitive object={computers.scene} scale={isMobile?1.1:1.3} position={[3,-4,-1.5]} rotation={[0.01,-0.2, -0.1]}/>
      </mesh>
    )
}

const ComputersCanvas = ()=>{
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width:600px)")

        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChanging = (event) => {
            setIsMobile(event.matches)
        }

        mediaQuery.addEventListener("change",handleMediaQueryChanging)


        return () => {
            mediaQuery.removeEventListener("change",handleMediaQueryChanging)
        }

    }, []);



    return (
      <Canvas
          frameloop="demand"
          shadows
          camera={{position:[10,10,2],fov:75}}
          gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={ <CanvasLoader />}>
          <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile}/>
        </Suspense>

        <Preload all/>

      </Canvas>
  )

}

export default ComputersCanvas