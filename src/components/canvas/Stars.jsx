import {Suspense, useRef} from "react";
import {useFrame,Canvas} from "@react-three/fiber";
import {PointMaterial, Points, Preload} from "@react-three/drei"
import * as random from "maath/random/dist/maath-random.esm.js"

const Stars = (props)=>{

  const sphere = random.inSphere(new Float32Array(5000),{radius:1.2})
  const ref = useRef();

  useFrame(function (state, delta){

    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;

  })

  return (
    <group
        rotation={[0,0,Math.PI / 4]}
    >
      <Points
          positions={sphere}
          stride={3}
          frustumCulled
          ref={ref}
          {...props}
      >
        <PointMaterial
            trasparent
            color="#f2872c8"
            size={0.002}
            sizeAttenuation={true}
            depthWrite={true}

        />
      </Points>
    </group>
  );
}

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas
          camera={{position:[0,0,1]}}
          gl={{preserveDrawingBuffer:true}}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  )
}

export default StarsCanvas