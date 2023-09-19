import React from 'react'

import {Html, useProgress} from "@react-three/drei";

const CanvasLoader = () => {

  const {progress} = useProgress()

  return (
    <Html className="canvas-loader">
      <p style={{color:"f1f1f1",marginTop:40,fontWeight:800}}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader