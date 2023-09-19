import React, {useEffect, useState} from 'react'

import {motion} from "framer-motion";
import {ComputersCanvas}from "./canvas"
import {styles} from "../styles.js";

const Hero = () => {

  return (
    <div className="relative h-screen w-full mx-auto">
      <div className={`${styles.paddingX} flex flex-row absolute top-[70px] inset-0 max-w-7xl items-start mx-auto gap-5`}>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 m-0 bg-[#915eff] rounded-full"/>
          <div className="w-1 h- sm:h-96 h-40  violet-gradient rounded-lg"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi I`m <span className={`text-[#915eff]`}>Gibran</span></h1>
          <p className={`${styles.heroSubText}`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deleniti earum expedita ut velit. Assumenda laboriosam nihil nisi qui recusandae sequi sint sit tenetur. Accusantium cum harum perferendis quia velit.
          </p>
        </div>

      </div>

      <ComputersCanvas/>

      <div className="absolute bottom-3 w-full flex justify-center items-center">
          <a href="#About">
            <div className="w-[30px] h-[58px] rounded-3xl border-secondary border-4 flex justify-center items-start">
                <motion.div
                    animate={{y:[0,25,0]}}
                    transition={{
                        duration:1.5,
                        repeat:Infinity,
                        repeatType:"loop"
                    }}
                    className="h-[10px] w-[10px] rounded-full bg-secondary my-2"
                />
            </div>
          </a>
      </div>

    </div>
  )
}

export default Hero