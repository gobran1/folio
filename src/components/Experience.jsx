import React from 'react'

import {SectionWrapper} from "../hoc"
import {experiences} from "../constants/index.js";
import {textVariant,fadeIn} from "../utils/motion.js"
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
const ExperienceCard = ({experience})=>(
    <>

        <VerticalTimelineElement
            contentStyle={{backgroundColor:"#1d1836",color:"white"}}
            contentArrowStyle={{ borderRight: '7px solid #232631' }}
            date={experience.date}
            iconStyle={{backgroundColor:experience.iconBg}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img src={experience.icon} alt={experience.company_name}  className="object-contain hight-[60%] width-[60%]"/>
                </div>
            }
        >
            <h3 className="text-white text-[26px] font-bold">{experience.title}</h3>
            <p className="text-secondary font-semibold">{experience.company_name}</p>
            <ul className="mt-12 list-disc space-y-2 ml-10 mb-8 text-white">
                {experience.points.map((point,index)=> {
                     return (
                        <li key={`experience-point-${index}`} className="pl-1 text-white text-[16px]">
                            {point}
                        </li>
                     )}
                )}

            </ul>
        </VerticalTimelineElement>

    </>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
        <p className={styles.sectionHeadText}>Work Experience</p>
      </motion.div>
        <div className="mt-20 flex flex-col">
            <VerticalTimeline animate={true}  layout="1-column-left" lineColor="white">
                {experiences.map((experience,index)=> <ExperienceCard key={index}  experience={experience}/>)}
            </VerticalTimeline>
        </div>
    </>
  )
}

export default SectionWrapper(Experience,"Work")