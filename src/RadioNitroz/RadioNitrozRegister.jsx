import React, { useState } from 'react'
// import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function RadioNitrozRegister() {
  
  const [first, setfirst] = useState();
  const [middle, setmiddle] = useState();
  const [last, setlast] = useState();
  const [Department, setDepartment] = useState();
  // const [red, setred] = useState();
  const [roll, setroll] = useState();
  const [year, setyear] = useState();
  const [mobile, setmobile] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const [clubpre, setclubpre] = useState();
  const [webdev, setwebdev] = useState();
  const [RateCreativity, setRateCreativity] = useState();
  const [RateManagement, setRateManagement] = useState();
  const [RateHardworking, setRateHardworking] = useState();
  const [Ratesense, setRatesense] = useState();
  const [formerror, setformerror] = useState();


  const [regborder, setregborder] = useState('yellow-300');
  const [rollborder, setrrollborder] = useState('yellow-300');
  const [yearborder, setyearborder] = useState('yellow-300');
  const [mobborder, setmobborder] = useState('yellow-300')


  const handleinput4=(e)=>{
    const  reg=e.target.value;
    if ((reg.length)< 8){
      setregborder('red-500');
    }
    else{
      setregborder('yellow-300');
    }
    setDepartment(reg)
  }
  const handleinput5=(e)=>{
    const  rollno=e.target.value;
    setroll(rollno);
    if ((rollno.length)< 8 || (rollno.length)> 8){
      setrrollborder('red-500');
    }
    else{
      setrrollborder('yellow-300');
    }
  }
  const handleinput6=(e)=>{
    const  yearstudy=e.target.value;
    setyear(yearstudy);
    if ((yearstudy.length)<4 | (yearstudy.length)>4){
      setyearborder('red-500');
    }
    else{
        setyearborder('yellow-300');
    }
  }
  const handleinput7=(e)=>{
    const  mob=e.target.value
    setmobile(mob);
    if ((mob.length)< 10 || (mob.length)> 10){
      setmobborder('red-500');
    }
    else{
      setmobborder('yellow-300');
    }
  }

  const getfulldata=async (e)=>{
    e.preventDefault();
    // const notify = () => toast("Wow so easy!")
    
      axios.post("https://rn-backend-8wgt.onrender.com/formdata",{first,middle,last,Department,roll,year,mobile,email,message,clubpre,webdev,RateCreativity,RateManagement,RateHardworking,Ratesense})
      .then(res =>{
        if(res.status===200){
          toast.success("Submited")
          window.scrollTo({
            top: 0, // Change this value to your desired position
            behavior: 'smooth' // Optional: adds smooth scrolling
          });
        }
      })
      .catch(err =>{
        setformerror(err)
      })    
  }
  return (
    <>
     <ToastContainer />
    <div className='w-screen min-h-screen text-black bg-no-repeat bg-cover bg-slate-800 bg-center '>
    <div className='w-screen cursor-pointer flex items-center justify-center gap-4'>

    {/* <div className='flex '>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px]  duration-300'>R</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px]  vmd:first-letter:text-[40px] lg:first-letter:text-[50px] hover:rotate-180 duration-300'>a</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px]  vmd:first-letter:text-[40px] lg:first-letter:text-[50px] hover:-translate-y-2 duration-300'>d</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px]  vmd:first-letter:text-[40px] lg:first-letter:text-[50px] hover:skew-x-6 duration-300'>i</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px]  vmd:first-letter:text-[40px] lg:first-letter:text-[50px] hover:-translate-y-2 duration-300'>o</h1>
    </div>
    <div className='flex'>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-x-1 duration-300'>N</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-2'>I</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>T</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:-translate-y-1 duration-300'>r</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>o</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:-translate-y-1 duration-300'>z</h1>
    </div>
    <div className='flex'>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>A</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:-translate-y-1 duration-300'>u</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>d</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:-translate-y-1 duration-300'>i</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>t</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:-translate-y-1 duration-300'>i</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>o</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:-translate-y-1 duration-300'>n</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 sm:text-[50px] vmd:text-[30px] hover:translate-y-1 duration-300'>s</h1>
    </div>
    <div className='flex'>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 4m:text-[50px] vmd:text-[30px] hover:skew-y-1 duration-300'>'2</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 4m:text-[50px] vmd:text-[30px] hover:skew-x-2 duration-300'>0</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 4m:text-[50px] vmd:text-[30px] hover:skew-y-1 duration-300'>2</h1>
    <h1 className='font-bold text-center py-[5vh] text-yellow-400 4m:text-[50px] vmd:text-[30px] hover:skew-x-2 duration-300'>5</h1>
    </div> */}
    <p className='text-yellow-400 font-bold text-center py-[5vh] sm:text-[50px] vmd:text-[30px] hover:skew-y-1 duration-300'>Radio Nitroz Audition's 2025</p>

    </div>
    <h2 className='text-center'>{formerror}</h2>

    <form action='/formdata' method='post' onSubmit={getfulldata} className='p-[3vh] text-white grid xl:grid-cols-3 xl:grid-rows-4  lg:grid-cols-2 lg:grid-rows-6 md:grid-cols-2 md:grid-rows-7 sm:grid-cols-2 sm:grid-rows-7 vmd:grid-cols-1 xl:gap-[2vh] lg:gap-[2vh] md:gap-[3vh] sm:gap-[3vh] vmd:gap-[5vh] place-items-center'>
      {/* first input */}
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px]'>First Name</h4>
      <input type='text' required onChange={(e)=>{setfirst(e.target.value)}} name={"n1"} placeholder='First Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl  hover:opacity-75 transition-all focus:bg-slate-600 '/>
      </div>
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px]'>Middle Name</h4>
      <input type='text' required onChange={(e)=>{setmiddle(e.target.value)}} name={"n2"} placeholder='Middle Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px] text-white'>Last Name</h4>
      <input type='text' required onChange={(e)=>{setlast(e.target.value)}} name={"n3"} placeholder='Last Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      {/* second input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Department</h4>
      <input type='text' required onChange={handleinput4} name={"n4"} placeholder='Department' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${regborder}   bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600`}/>
      </div>
      {/* third input */}
      
      {/* fourth input */}
      
      {/* fifth input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Roll No.</h4>
      <input type='text' required onChange={handleinput5} name={"n5"} placeholder='Roll No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${rollborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
      {/* sixth input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Year</h4>
      <input type='number' required onChange={handleinput6} name={"n6"} placeholder='2024 or 2025' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${yearborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
       {/* seventh input */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Mobile No.</h4>
      <input type='number' required onChange={handleinput7} name={"n7"} placeholder='Mobile No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${mobborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
       {/* eighth input */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>E-mail</h4>
      <input type='email' required onChange={(e)=>{setemail(e.target.value)}} name={"n8"} placeholder='E-mail' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      {/* eighth input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Message to us</h4>
      <input type='text' required onChange={(e)=>{setmessage(e.target.value)}} name={"n9"} placeholder='Message to us' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
       {/* ninth input */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Club preference</h4>
      <textarea type='textarea' required onChange={(e)=>{setclubpre(e.target.value)}} name={"n10"} placeholder='Club preference' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
       {/* tenth input */}
      <div className='flex flex-col gap-2'>
        <h4>Domain</h4>
        <select onChange={(e)=>{setwebdev(e.target.value)}} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>Select Your Domain</option>
          <option>Web Development</option>
          <option>Graphic Designing</option>
          <option>Content Writing</option>
          <option>Event Management</option>
          <option>Video Editing</option>
        </select>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Rate YourSelf in creativity</h4>
        <select onChange={(e)=>{setRateCreativity(e.target.value)}} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Rate YourSelf in Management Skills</h4>
        <select onChange={(e)=>{setRateManagement(e.target.value)}} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Rate YourSelf in Hardworking</h4>
        <select onChange={(e)=>{setRateHardworking(e.target.value)}} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className='flex flex-col gap-2'>
      <h4>Rate YourSelf in Sense of humour</h4>
        <select onChange={(e)=>{setRatesense(e.target.value)}} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
       {/* eleventh input */}
       {/* <div>
        <h4>Rate YourSelf out of 5 in the following skills</h4>
        <div>
          <input type='checkbox'/><h4>Web Development</h4>
          <input type='checkbox'/><h4>Content Writing</h4>
          <input type='checkbox'/><h4>Graphic Designing</h4>
          <input type='checkbox'/><h4>Event Management</h4>
          <input type='checkbox'/><h4>Video Editing</h4>
          <input type='checkbox'/><h4>Public Speaking</h4>
        </div>
       </div> */}
       <div>
        <button type='submit' className='outline-none bg-black text-2xl px-[20px] py-[5px] rounded text-white hover:font-mono duration-500 bg-gradient-to-tr from-red-400 to-purple-500 hover:border-opacity-50 ' >Submit</button>
      </div>

    </form>
    </div>
    </>
  )
}

export default RadioNitrozRegister