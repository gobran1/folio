import {motion} from "framer-motion";

import {styles} from "../styles.js";
import {staggerContainer} from "../utils/motion.js";

const SectionWrapper = (Component,sectionId) =>
    function HOC(){
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once:true,amount:0.25}}
            className={`${styles.padding} max-w-screen-2xl mx-auto relative z-0`}
        >
            <span className="" id={sectionId}> &nbsp; </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper