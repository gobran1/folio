import React from 'react'
import {Tilt} from "react-tilt"
import {motion} from "framer-motion";
import {git, github} from "../assets"
import {textVariant,fadeIn} from "../utils/motion.js";
import {styles} from "../styles.js";
import {SectionWrapper} from "../hoc"
import {projects} from "../constants/index.js";

const ProjectCard = ({index,name,description,tags,image,source_code_link}) => {
  return (
      <motion.div className="w-full sm:w-[340px]" variants={fadeIn("up","spring",index * 0.5,1)}>
        <Tilt
          options={{
            max:45,
            speed:450,
            scale:1
          }}
          className="bg-tertiary p-5 rounded-2xl"
        >
          <div className="w-full relative h-[230px]">
            <img src={image} alt={name} className="w-full h-full object-contain rounded-2xl"/>
            <div className="absolute flex justify-end m-3 inset-0">
              <div
                  className="flex justify-center items-center cursor-pointer black-gradient rounded-full h-16 w-16"
                  onClick={()=>window.open(source_code_link,"_blink")}
              >
                <img src={github} alt="github" className="object-contain h-1/2 w-1/2"/>
              </div>
            </div>
          </div>

          <div className="mt-4">
              <h2 className="text-[26px] font-bold">{name}</h2>
              <p className="text-secondary text-[16px] leading-[25px] mt-2">{description}</p>
              <div className="flex flex-wrap gap-3 text-[14px] mt-3">
                  {
                      tags.map((tag,index)=>(
                           <span key={`project-tag-${index}`} className={tag.color}>
                              #{tag.name}
                          </span>
                      ))
                  }
              </div>
          </div>
        </Tilt>
      </motion.div>
  );
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
            variants={fadeIn("","",0.1,1)}
            className="text-secondary text-[17px] leading-[30px] max-w-7xl mt-3"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus error expedita hic natus nesciunt quas quibusdam reiciendis repudiandae suscipit voluptates. Aliquam, aut beatae deserunt doloremque et eveniet expedita facilis magnam magni molestiae molestias nemo nisi obcaecati pariatur placeat praesentium quae, quia quos saepe tempora tempore totam veritatis vitae voluptate, voluptatum?
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index)=>{
          return <ProjectCard index={index} key={`project-${index}`} {...project}/>
        })}
      </div>

    </>
  )
}

export default SectionWrapper(Works,"")