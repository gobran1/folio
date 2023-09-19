import React from 'react'

import  {Tilt} from 'react-tilt'
import {services} from "../constants/index.js";
import {motion} from "framer-motion";
import {styles} from "../styles.js";
import {textVariant,fadeIn} from "../utils/motion.js";
import {SectionWrapper} from "../hoc";

const ServiceCard = ({index,icon,title})=>{
  return (
    <>
      <Tilt options={{max: 45,scale:1,speed:450}}>
        <motion.div variants={fadeIn("right","",0.5 * index,0.75)} className="green-pink-gradient w-[200px] p-[1px] rounded-[20px]">
          <div  className="min-h-[250px] bg-tertiary flex flex-col justify-evenly items-center rounded-[20px]">
            <img className="object-contain w-16 h-16" src={icon} alt={title}/>
            <p className="text-white text-[20px]  text-center">{title}</p>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("","",0.1,1)} className="text-secondary mt-4 text-[17px] leading-[30px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet asperiores consectetur dolores eligendi perferendis quas repellendus tempora. Illo ullam unde ut veritatis! Animi aspernatur at beatae debitis dicta, doloremque dolorum ex fuga hic ipsam iste laboriosam magnam mollitia nam nemo non numquam, quasi quibusdam recusandae repellat vel vitae voluptate? Accusamus aliquid blanditiis commodi, consectetur delectus dignissimos doloribus dolorum eaque esse fugiat ipsam laboriosam laudantium libero magnam magni minus mollitia nam necessitatibus odit omnis porro quae quisquam quo recusandae rem repellendus sed tenetur vel velit veniam. Adipisci aspernatur beatae, impedit, laboriosam molestiae nisi odio omnis porro qui similique ut voluptate.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-16">
        {
          services.map((service,index)=>{
            return <ServiceCard key={service.title} index={index} {...service}/>
          })
        }
      </div>

    </>
  )
}

export default SectionWrapper(About,"About")