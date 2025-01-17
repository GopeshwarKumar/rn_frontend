import React from 'react'
import { motion } from 'framer-motion'
import { BiMobile } from 'react-icons/bi'
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

      <motion.h3 whileInView={{opacity:1}} transition={{duration:2}} className='font-bold opacity-0 sm:flex flex-col gap-4'>
      <p><BiMobile className='text-blue-600 vmd:text-[36px] sm:text-[40px] lg:text-[60px] hover:rotate-6 transition-all'/></p>
      <p className='lg:text-[32px] sm:text-[25px] vmd:text-[20px] text-black'>+91 900000000</p>
      </motion.h3>

      <motion.h3 whileInView={{opacity:1}} transition={{duration:2}} className='font-bold opacity-0 sm:flex flex-col gap-4'>
      <p><MdEmail className='text-red-500 vmd:text-[36px] sm:text-[40px] lg:text-[60px] hover:translate-y-3 transition-all '/></p>
      <p className='lg:text-[32px] sm:text-[25px] vmd:text-[20px] text-black'>abcd@gmail.com</p>
      </motion.h3>

    <br/>

      <div className='flex flex-row items-center justify-around '>
        <Link to={"https://www.instagram.com/accounts/login/?next=%2Fradionitroz.nitdgp%2F&source=omni_redirect"}>
        <BsInstagram className='text-pink-500 hover:text-slate-300 hover:skew-x-6 hover:scale-105 hover:skew-y-6 transition-all vmd:text-[40px] sm:text-[50px]'/>
        </Link>
        <Link to={"https://www.linkedin.com/company/radio-nitroz-nitdgp/"}>
        <FaLinkedin className='text-blue-500  hover:text-slate-300 hover:skew-x-6 hover:scale-105 hover:skew-y-6 transition-all vmd:text-[40px] sm:text-[50px]'/>
        </Link>
        <Link>
        <FaFacebook className='text-blue-500 hover:text-slate-300 hover:skew-x-6 hover:scale-105 hover:skew-y-6 transition-all vmd:text-[40px] sm:text-[50px]'/>
        </Link>
      </div>
      
      </div>
    </div>
    </>
  )
}

export default Contact