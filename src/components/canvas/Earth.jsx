import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import {CanvasLoader} from "../../components"
import canvasLoader from "../CanvasLoader.jsx";

const Earth = () => {
  const earth = useGLTF("planet/scene.gltf")
  return (
    <mesh>
      <primitive
          object={earth.scene}
      />
    </mesh>
  )
}

const EarthCanvas = ()=>{
  return (
      <Canvas
          frameloop="always"
          shadows
          gl={{preserveDrawingBuffer:true}}
          camera={{
            fov:45,
            position:[0,0,3],
            near:1,
            far:5000
          }}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
              autoRotate
              autoRotateSpeed={5}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableZoom={false}
          />
          <Earth/>
        </Suspense>
        <Preload all />
      </Canvas>
  );
}

export default EarthCanvas