import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom";

import {navLinks} from "../constants/index.js";
import {styles} from "../styles.js"
import {logo,menu,close} from "../assets"

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)

  return (
      <nav className={`${styles.paddingX} w-full flex fixed top-0 z-20 items-center bg-primary`}>
          <div className="flex items-center justify-between flex-1 w-full max-w-7xl mx-auto">
              <Link
                  className="flex items-center gap-2"
                  to="/" onClick={()=>{
                  setActive('')
                  window.moveTo(0,0)
              }}>
                  <img className="object-contain w-9 h-9 mx-2" src={logo} alt="logo"/>

                  <p className="font-medium text-white text-[18px] cursor-pointer flex">Gibran
                      <span className="sm:block hidden">&nbsp; | Software Engineer</span>
                  </p>
              </Link>

              <ul className="sm:flex hidden list-none gap-10 flex-row">
                  {
                      navLinks.map(({id,title})=>{
                          return <li
                              key={id}
                              className={`${active === title?"text-white":"text-secondary"} hover:text-white font-medium text-[18px] cursor-pointer`}
                          ><a href={`#${title}`} onClick={()=>setActive(title)}>{title}</a></li>
                      })
                  }
              </ul>

              <div className="flex flex-1 justify-end items-center sm:hidden">
                  <img src={!toggle?menu:close} alt="" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={()=> setToggle(!toggle)}/>
                  <div className={`${toggle?'flex':'hidden'} black-gradient rounded-xl absolute right-0 top-20 my-2 mx-4 p-6 z-10 min-w-[140px]`}>
                      <ul className="flex flex-col gap-4 justify-end items-start list-none">
                          {navLinks.map(({id,title}) => {
                              return <li key={id}
                                         className={`${active === title?"text-white":"text-secondary"} text-[16px] cursor-pointer hover:text-white font-medium font-poppins`}
                              >
                                  <a href={`#${title}`} onClick={()=>{setActive(title);setToggle(!toggle)}}>{title}</a>
                              </li>
                          })}
                      </ul>
                  </div>

              </div>


          </div>
      </nav>
  )
}

export default Navbar