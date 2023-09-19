import {useState,useRef} from "react";
import email from "@emailjs/browser"
import {motion} from "framer-motion";
import {EarthCanvas} from "./canvas"
import {slideIn} from "../utils/motion.js";
import {styles} from "../styles.js";
import sectionWrapper from "../hoc/SectionWrapper.jsx";
const Contact = () => {
  const formRef = useRef();

  const [contact, setContact] = useState({
    name:"",
    email:"",
    message:""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const {name,value} = e.target

    setContact({...contact,[name]:value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)

    email.send("service_hvb5ncl","template_agckywo",{
      to_name: "jubran fahd",
      from_name: contact.name,
      message: contact.message,
      from_email: contact.email
    },"IJykhbCRLPOpFVNtg")
        .then(()=>{
          setLoading(false)
          setContact({
            name:"",
            email:"",
            message:""
          })
          alert("success")
        })
        .catch((error)=>{
          setLoading(false)
          console.log(error)
          alert("failed")
        })

  }


  return (
    <>
      <div className="flex xl:flex-row flex-col-reverse gap-10 mt-12 overflow-hidden">
          <motion.div
              variants={slideIn("left","tween",0.2,1)}
              className={`${styles.padding} bg-black-100 p-8 rounded-2xl flex-[0.75]`}
          >

            <p className={styles.sectionSubText}>GET IN TOUCH</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>


            <form ref={formRef} action="" className="mt-12 flex flex-col gap-8">

              <label className="flex flex-col" htmlFor="">
                <p className="font-medium text-white text-[16px] mb-4">Your Name</p>
                <input
                    type="text"
                    name="name"
                    value={contact.name}
                    placeholder="What's your name?"
                    className="bg-tertiary py-4 px-8 rounded-lg outline-none border-none placeholder:text-secondary font-medium text-white text-[14px] "
                    onChange={handleChange}
                />
              </label>

              <label className="flex flex-col" htmlFor="">
                <p className="font-medium text-white text-[16px] mb-4">Your Email</p>
                <input
                    type="email"
                    name="email"
                    value={contact.email}
                    placeholder="What's your email?"
                    className="bg-tertiary py-4 px-8 rounded-lg outline-none border-none placeholder:text-secondary text-white font-medium text-[14px] "
                    onChange={handleChange}
                />
              </label>

              <label className="flex flex-col" htmlFor="">
                <p className="font-medium text-white text-[16px] mb-4">Your Message</p>
                <textarea
                    rows="5"
                    name="message"
                    value={contact.message}
                    placeholder="What do you want to say?"
                    className="bg-tertiary py-4 px-8 rounded-lg outline-none border-none placeholder:text-secondary text-white font-medium text-[14px] "
                    onChange={handleChange}
                />
              </label>

              <button
                  className="ml-auto mt-8 outline-none w-fit font-bold px-8 py-4 rounded-lg text-[16px] text-white bg-tertiary shadow-md shadow-primary border-none" type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
              >
                {loading?"Sending...":"Send"}
              </button>

            </form>

          </motion.div>

        <motion.div
            className="xl:flex-1 flex  justify-center items-center xl:h-[500px] h-[350px]"
            variants={slideIn("right","tween",0.2,1)}>
          <EarthCanvas/>
        </motion.div>
      </div>
    </>
  )
}

export default sectionWrapper(Contact,"Contact")