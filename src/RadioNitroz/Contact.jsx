import React from 'react'
import { motion } from 'framer-motion'
import { MdEmail} from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
    <h1 className='text-black p-5 font-serif animate-pulse bg-slate-800'>Contact US</h1>
    
    <div className='text-black grid sm:grid-cols-2 sm:place-items-center gap-[4vh] py-[5vh] px-[3vw] bg-slate-800 '>
      <div className='bg-slate-800 vmd:hidden sm:block'>
        <img src='/assets/contactAnimN.jpg' alt='hell' className='2xl:w-[30vw] 2xl:h-[30vh] lg:w-[25vw] lg:h-[25vh] sm:w-[23vw] sm:h-[23vh] rounded-ee-[60%] '/>
      </div>

      <div className='flex gap-5 flex-col'>

      <h3 className='font-bold sm:flex flex-col gap-4'>
      <motion.p whileInView={{opacity:1 ,translateX:"20px"}} transition={{duration:2}}><MdEmail className='text-red-500 vmd:text-[36px] sm:text-[40px] lg:text-[60px] hover:translate-y-3 transition-all '/></motion.p>
      <motion.p whileInView={{opacity:1 ,}} transition={{duration:0.5}}  className='lg:text-[32px] text-opacity:0 sm:text-[25px] vmd:text-[20px] text-white'>radionitroz.nitdgp@gmail.com</motion.p>
      </h3>

    <br/>

      <div className='flex flex-row items-center sm:justify-around vmd:justify-center vmd:gap-4'>
        <Link to={"https://www.instagram.com/accounts/login/?next=%2Fradionitroz.nitdgp%2F&source=omni_redirect"}>
        <BsInstagram className='text-blue-500 hover:text-pink-500 hover:skew-x-6 hover:scale-105 hover:skew-y-6 transition-all vmd:text-[40px] sm:text-[50px]'/>
        </Link>
        <Link to={"https://www.linkedin.com/company/radio-nitroz-nitdgp/"}>
        <FaLinkedin className='text-blue-500  hover:text-slate-300 hover:skew-x-6 hover:scale-105 hover:skew-y-6 transition-all vmd:text-[40px] sm:text-[50px]'/>
        </Link>
        <Link to={"https://www.facebook.com/radionitroz.nitdgp"}>
        <FaFacebook className='text-blue-500 hover:text-slate-300 hover:skew-x-6 hover:scale-105 hover:skew-y-6 transition-all vmd:text-[40px] sm:text-[50px]'/>
        </Link>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <p className='text-center text-white mt-[5%] vmd:text-[20px]'>Visit Our Website</p>
        <Link to={"https://radionitroz.in/"} className='text-center no-underline text-yellow-300 hover:text-blue-500 focus:text-red-500 border-b-2 border-yellow-500 border-dotted'>RadioNitroz.com</Link>
      </div>
      
      </div>
    </div>
    </>
  )
}

export default Contact