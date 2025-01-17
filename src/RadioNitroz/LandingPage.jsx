// src/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Shery from 'sheryjs';


const LandingPage = () => {
  Shery.makeMagnet(".link1");
  Shery.makeMagnet(".link2");
  Shery.makeMagnet(".link3");
  // Shery.mouseFollower(".link4");

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const gotoaboutsection = () => {
    window.scrollTo({
      top: 970, // Change this value to your desired position
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  };
  const gotocontactsection = () => {
    window.scrollTo({
      top: 3000, // Change this value to your desired position
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  };
  const gotoregistersection = () => {
    window.scrollTo({
      top: 1640, // Change this value to your desired position
      behavior: 'smooth' // Optional: adds smooth scrolling
    });
  };
  
  return (
    <>
 
    <nav className="flex justify-between items-center bg-slate-800 p-4  shadow-2xl hover:shadow-rose-600 duration-200">

    {/* Logo */}
    <div className="flex items-center rounded-full shadow-2xl hover:shadow-rose-600 duration-200">
        <img src="/assets/RnbgImage.jpg" alt="Logo" className="rnlogonavbar sm:h-[60px] vmd:h-[40px] sm:w-[70px] vmd:w-[40px] rounded-full  hover:skew-x-2 hover:skew-y-2 transition-all " />
        {/* <h1 className='text-pink-600 font-extrabold text-4xl'>R<sup className='font-bold'>N</sup></h1> */}
      </div>


      {/* Links */}
      <div className="hidden md:flex space-x-4 md:space-x-6 shadow-2xl hover:shadow-rose-600 duration-200">
        <motion.p onClick={gotoregistersection} animate={{scale:1.1, opacity:1}} transition={{duration:2,delay:1}}><Link  className="link1 no-underline text-white hover:text-blue-500 scale-50">Register</Link></motion.p>

       <motion.p animate={{scale:1.1, opacity:1}} transition={{duration:2,delay:1}}>
        <Link  onClick={gotoaboutsection} className="link3 no-underline text-white hover:text-blue-500 scale-50">About</Link>
        </motion.p>    
          
      <motion.p animate={{scale:1.1}} transition={{duration:2,delay:1}}><Link onClick={gotocontactsection} className="link4 no-underline text-white hover:text-blue-500 scale-50">Contact</Link></motion.p>
      </div>

      {/* Mobile Menu Button */}
      <motion.div className="md:hidden shadow-2xl hover:shadow-rose-600 duration-200">
        <button onClick={toggleMenu} className="text-white hover:text-blue-500">
          {isOpen ? '✖' : '☰'}
        </button>
      </motion.div>

      {/* Mobile Links */}
      {/* {isOpen && (
        <div className="absolute z-40 top-20 right-0 bg-white shadow-md w-screen h-1/2 md:hidden transition-all">
          
        </div>
      )} */}



    </nav>

    {isOpen && 
    <div className="mobilenav flex z-40 relative flex-col items-center justify-center space-y-4 lg:text-[20px] p-10 bg-slate-700">
    <Link  className="font-bold font-serif no-underline text-white hover:text-yellow-400">Home</Link>
    <Link onClick={gotoaboutsection} className="font-bold font-serif no-underline text-white hover:text-yellow-400 ">About</Link>
    <Link onClick={gotocontactsection} className="font-bold font-serif no-underline text-white hover:text-yellow-400">Contact</Link>
  </div>}
    

    <div style={{backgroundImage:'url("/assets/RnbgImage.jpg")' }}
      className="landingRadioBg relative flex items-center justify-center h-screen bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col items-center gap-[10vh] z-10 text-center text-white">
        <div className='sm:leading-[60px] vmd:leading-[20px]'>
        <h1 className=" sm:text-[80px] mb:text-[50px] vmd:text-[40px] cursor-pointer font-bold mb-4">Radio Nitroz</h1>
        <p className="text-lg md:text-xl vmd:text-[13px] hover:shadow-rose-600 cursor-pointer shadow-2xl mb-8 font-bold">Audition for 2025 - Register Here!</p>
        </div>
        <Link onClick={gotoregistersection} className=" px-2 py-2 no-underline bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-2xl hover:shadow-rose-600 duration-200"
        >
          Register Now
        </Link>
      </div>
    </div>
    
      
    </>
  );
};

export default LandingPage;
