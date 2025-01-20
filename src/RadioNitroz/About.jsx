import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
    <div className='w-screen mt-[7%] bg-slate-500 h-[2px]'></div>
    <div className=''>
      <h1 className='px-[3vw] text-black font-serif p-3 animate-pulse'>About Us</h1>
      <motion.p whileInView={{opacity:1}} transition={{duration:2}} className='text-black md:px-[15vw] py-[4vh] vmd:px-[5vw] lg:text-[20px] sm:text-[17px] mb:text-[15px] vmd:text-[12px] opacity-0 '>
      It is with immense pleasure and an enthusiastic heart that we, the creative team behind <mark className='font-bold bg-white'>Radio</mark> <mark className='bg-white font-bold font-serif'>NITroz</mark>, welcome you to the world of amusement and entertainment. At NIT Durgapur, we believe that college life is meant to be relished, and Radio NITroz is on a mission to add that extra flavour to your already colorful journey. Our intention to provide you with entertainment started way back in <mark className='bg-white font-bold'>2006</mark>, which led us to start the club, and since then Radio NITroz has come a long way since after we moved to Youtube community with exciting Podcasts, <mark className='bg-white font-bold'>‘Success Story’</mark> and <mark className='bg-white font-bold'>‘Freshers’ Introduction Video’</mark>, most exciting event <mark className='bg-white font-bold'>Talent X</mark> and also our <mark className='bg-white font-bold'>'Glam It Up'</mark>. And how can we forget <mark className='bg-white font-bold'>‘Khol-E-Dil’</mark> where your confession isn't left unconfessed anymore! We also cherish our cultural heritage and organize events such as ‘Matki Fod’ on the auspicious occasion of Janmashtami and <mark className='bg-white font-bold'>‘Limelight’</mark> an online event on Diwali to celebrate, where every smile of yours is shared with our ever-growing family. <mark className='bg-white font-bold'>Recstacy</mark> (now Nityamini)- the Cultural Fest of NIT Durgapur, where we host a myriad of exciting events like Dare You, Pull N Move and <mark className='bg-white font-bold'>Paper Dance</mark>!

      </motion.p>
      <div className='w-screen h-[2px]  bg-slate-600 animate-pulse'></div>
    </div>
    </>
  )
}

export default About