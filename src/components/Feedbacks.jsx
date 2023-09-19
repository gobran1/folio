import React from 'react'

import {motion} from "framer-motion";
import {styles} from "../styles.js"
import {testimonials} from "../constants/index.js";
import {textVariant,fadeIn} from "../utils/motion.js";
import sectionWrapper from "../hoc/SectionWrapper.jsx";

const TestimonialCard = ({index, testimonial, name, designation, company, image})=>
   (
        <motion.div className="rounded-3xl p-10 sm:w-[320px] w-full bg-black-200 flex flex-col" variants={fadeIn("","spring",0.5 * index,1)}>
          <div className="text-[48px] text-white font-black mb-5">"</div>

          <p className="mt-6 text-white text-[18px] tracking-wider">{testimonial}</p>

          <div className="flex-grow"></div>

            <div className="flex justify-between items-center flex-wrap gap-1 mt-6">
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-medium text-[16px]"><span className="blue-text-gradient ">@ </span>{name}</p>
                <p className="text-[12px]">{designation} of {company}</p>
              </div>
              <div>
                <img src={image} alt={name} className="object-cover rounded-full h-[60px] w-[60px]"/>
              </div>
            </div>

        </motion.div>
  );


const Feedbacks = () => {
  return (
    <>
      <div className={`mt-12 bg-black-100 rounded-[20px] pb-20`}>
        <motion.div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`} variants={textVariant()}>
          <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
          <h3 className={styles.sectionHeadText}>Testimonials.</h3>
        </motion.div>
        <div className="flex flex-wrap -mt-20 p-4 gap-10">
          {
            testimonials.map((testimonial,index)=><TestimonialCard key={`testimonial-${index}`} index={index} {...testimonial}/>)
          }
        </div>
      </div>
    </>
  )
}

export default sectionWrapper(Feedbacks,"")