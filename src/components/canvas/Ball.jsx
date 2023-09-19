import React from 'react'
import {Suspense} from "react";

import {Canvas} from "@react-three/fiber";
import {OrbitControls,Preload,Decal,Float,useTexture } from "@react-three/drei";

import CanvasLoader from "../CanvasLoader.jsx";
import {texture} from "three/nodes";

const Ball = ({imageUrl}) => {

    const [decal] = useTexture([imageUrl])

    return (
      <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
          <ambientLight intensity={0.25}/>
          <directionalLight position={[0, 0, 0.05]}/>
          <mesh castShadow recieveShadow scale={2.75}>
              <icosahedronGeometry args={[1,1]}/>
              <meshStandardMaterial
                  color="#fff8eb"
                  polygonOffset
                  polygonOffsetFactor={-5}
              />
              <Decal
                  flatShading
                  position={[0,0,1]}
                  rotation={[2 * Math.PI,0,6.25]}
                  map={decal}
              />
          </mesh>
      </Float>
  )
}

const BallCanvas = ({icon})=>{
  return (
      <Canvas
        frameloop="always"
        gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
          <Ball imageUrl={icon}/>
        </Suspense>

        <Preload all/>
      </Canvas>
  );
}

export default BallCanvas