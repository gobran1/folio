import React from 'react'

import {SectionWrapper} from "../hoc"
import {BallCanvas} from "../components/canvas"
import {technologies} from "../constants/index.js";


const Tech = () => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-8">
        {
          technologies.map((technology,index) => {
            return(
              <div className="h-36 w-36"  key={`tech-ball-${index}`}>
                <BallCanvas icon={technology.icon}/>
              </div>
            )
          })
        }
    </div>
  )
}

export default SectionWrapper(Tech,"tech")