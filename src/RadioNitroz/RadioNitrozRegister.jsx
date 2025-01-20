import React, { useState } from 'react'
// import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'

function RadioNitrozRegister() {
  
  const [first, setfirst] = useState();
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
  const [formerror, setformerror] = useState();
  const [loading, setloading] = useState(false);


  // const [regborder, setregborder] = useState('yellow-300');
  const [rollborder, setrrollborder] = useState('yellow-300');
  // const [yearborder, setyearborder] = useState('yellow-300');
  const [mobborder, setmobborder] = useState('yellow-300')


  // const handleinput4=(e)=>{
  //   const  reg=e.target.value;
  //   if ((reg.length)< 8){
  //     setregborder('red-500');
  //   }
  //   else{
  //     setregborder('yellow-300');
  //   }
  //   setDepartment(reg)
  // }
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
  const useryear=(e)=>{
    const  yearstudy=e.target.value;
    setyear(yearstudy);
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

  // form submit function
  const getfulldata=async (e)=>{
    e.preventDefault();
    setloading(true);
    // const notify = () => toast("Wow so easy!")
    
      axios.post("https://rn-backend-8wgt.onrender.com/formdata",{first,Department,roll,year,mobile,email,message,clubpre,webdev,RateCreativity,RateManagement,RateHardworking})
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
        console.log(err)
      }).finally(errr =>{
        setloading(false)
      })
      // console.log(first,Department,roll,year,mobile,email,message,clubpre,webdev,RateCreativity,RateManagement,RateHardworking)  
  }
  return (
    <>
     <ToastContainer />
    <div className='w-screen min-h-screen text-black bg-no-repeat bg-cover bg-slate-800 bg-center '>
    <div className='w-screen cursor-pointer flex items-center justify-center gap-4'>


    <p className='auditiontext text-yellow-400 font-bold text-center py-[5vh] sm:text-[50px] vmd:text-[30px] hover:skew-y-1 duration-300'>Radio Nitroz Audition's 2025</p>

    </div>
    <h2 className='text-center'>{formerror}</h2>

    <form action='/formdata' method='post' onSubmit={getfulldata} className='p-[3vh] text-white grid xl:grid-cols-3 xl:grid-rows-4  lg:grid-cols-2 lg:grid-rows-6 md:grid-cols-2 md:grid-rows-7 sm:grid-cols-2 sm:grid-rows-7 vmd:grid-cols-1 xl:gap-[2vh] lg:gap-[2vh] md:gap-[3vh] sm:gap-[3vh] vmd:gap-[5vh] place-items-center'>
      {/* name */}
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px]'>Name</h4>
      <input type='text' required onChange={(e)=>{setfirst(e.target.value)}} name={"n1"} placeholder='First Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl  hover:opacity-75 transition-all focus:bg-slate-600 '/>
      </div>
      {/* Department */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Department</h4>
      {/* <input type='text' required onChange={handleinput4} name={"n4"} placeholder='Department' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${regborder}   bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600`}/> */}
      <select onChange={(e)=>{setDepartment(e.target.value)}} className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600`}>
    <option>Select Department</option>
    <option value="Computer Science">Computer Science Engineering</option>
    <option value="Mathematics & Computing">Mathematics & Computing</option>
    <option value="Electronics & Communication">Electronics & Communication Engineering</option>
    <option value="Mechanical Engineering">Mechanical Engineering</option>
    <option value="Civil Engineering">Civil Engineering</option>
    <option value="Electrical Engineering">Electrical Engineering</option>
    <option value="Chemical Engineering">Chemical Engineering</option>
    <option value="Biotechnology">Biotechnology</option>
    <option value="Biotechnology">Metallurgical and Materials</option>
</select>

      </div>      
      {/* Roll No. */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Roll No.</h4>
      <input type='text' required onChange={handleinput5} name={"n5"} placeholder='Roll No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${rollborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
      {/* year */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Year</h4>
      <input type='number' required onChange={useryear} name={"n6"} placeholder='2023 or 2024 ' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] border-yellow-300 outline-none border-b-[3px]  bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      {/* <select onClick={useryear} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option value={"Select Year"}>Select Year</option>
          <option value={"1st year"}>1st year</option>
          <option value={"2nd year"}>2nd year</option>
        </select> */}
      </div>
       {/* Mobile No */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Mobile No.</h4>
      <input type='number' required onChange={handleinput7} name={"n7"} placeholder='Mobile No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${mobborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
       {/* E-mail */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>E-mail</h4>
      <input type='email' required onChange={(e)=>{setemail(e.target.value)}} name={"n8"} placeholder='E-mail' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      {/*Message to us */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Message to us</h4>
      <input type='text' required onChange={(e)=>{setmessage(e.target.value)}} name={"n9"} placeholder='Message to us' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600 '/>
      </div>
       {/* Club preference */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Club preference</h4>
      <textarea type='textarea' onChange={(e)=>{setclubpre(e.target.value)}} name={"n10"} placeholder='Club preference' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
       {/* Domain */}
      <div className='flex flex-col gap-2'>
        <h4>Domain</h4>
        <select required onChange={(e)=>{setwebdev(e.target.value)}} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
          <option>Select Your Domain</option>
          <option>Web Development</option>
          <option>Graphic Designing</option>
          <option>Content Writing</option>
          <option>Event & Public Speaking</option>
          <option>Video Editing</option>
        </select>
      </div>
      {/* Rate YourSelf in creativity */}
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
      {/* Management Skill? */}
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
      {/* submit */}
       <div>
        <button type='submit' disabled={loading} className='outline-none bg-black text-2xl px-[20px] py-[5px] rounded text-white duration-500 bg-gradient-to-tr from-red-400 to-purple-500  focus:bg-green-400 hover:opacity-60' >Submit</button>
        {loading && <p className='text-green-500 text-center font-bold'>Saving data...</p>}
      </div>
    </form>
    </div>
      
    </>
  )
}

export default RadioNitrozRegister