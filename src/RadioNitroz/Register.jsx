// import React, { useState } from 'react'
// import { motion } from 'framer-motion';
// import axios from 'axios'

// function Register() {
//   const [first, setfirst] = useState();
//   const [middle, setmiddle] = useState();
//   const [last, setlast] = useState();
//   const [Registration, setRegistration] = useState();
//   // const [red, setred] = useState();
//   const [roll, setroll] = useState();
//   const [year, setyear] = useState();
//   const [mobile, setmobile] = useState();
//   const [email, setemail] = useState();
//   const [message, setmessage] = useState();
//   const [clubpre, setclubpre] = useState();
//   const [webdev, setwebdev] = useState();
//   const [formerror, setformerror] = useState();


//   const [regborder, setregborder] = useState('yellow-300');
//   const [rollborder, setrrollborder] = useState('yellow-300');
//   const [yearborder, setyearborder] = useState('yellow-300');
//   const [mobborder, setmobborder] = useState('yellow-300')



//   const handleinput1=(e)=>{
//     const  name1=e.target.value;
//     setfirst(name1)
//   }
//   const handleinput2=(e)=>{
//     const name2 =e.target.value;
//     setmiddle(name2)
//   }
//   const handleinput3=(e)=>{
//     const  name3=e.target.value;
//     setlast(name3)
//   }
//   const handleinput4=(e)=>{
//     const  reg=e.target.value;
//     if ((reg.length)< 8){
//       setregborder('red-500');
//     }
//     else{
//       setregborder('yellow-300');
//     }
//     setRegistration(reg)
//   }
//   const handleinput5=(e)=>{
//     const  rollno=e.target.value;
//     setroll(rollno);
//     if ((rollno.length)< 8){
//       setrrollborder('red-500');
//     }
//     else{
//       setrrollborder('yellow-300');
//     }
//   }
//   const handleinput6=(e)=>{
//     const  yearstudy=e.target.value;
//     setyear(yearstudy);
//     if ((yearstudy.length)<4 | (yearstudy.length)>4){
//       setyearborder('red-500');
//     }
//     else{
//         setyearborder('yellow-300');
//     }
//   }
//   const handleinput7=(e)=>{
//     const  mob=e.target.value
//     setmobile(mob);
//     if ((mob.length)< 10){
//       setmobborder('red-500');
//     }
//     else{
//       setmobborder('yellow-300');
//     }
//   }
//   const handleinput8=(e)=>{
//     const useremail =e.target.value;
//     setemail(useremail);
//   }
//   const handleinput9=(e)=>{
//     const  messa=e.target.value;
//     setmessage(messa);
//   }
//   const handleinput10=(e)=>{
//     const  preference=e.target.value;
//     setclubpre(preference);
//   }
//   const handleinput11=(e)=>{
//     const checkbox1 =e.target.value;
//     setwebdev(checkbox1)
//   }

//   const getfulldata=async (e)=>{
//     e.preventDefault();

//       axios.post("http://localhost:5000/formdata",{first,middle,last,Registration,roll,year,mobile,email,message,clubpre,webdev}).then(res =>{
//         console.log(res)
//       }).catch(err =>{
//         setformerror(err)
//       })    
//   }
//   return (
//     <>
//     <div style={{backgroundImage:'url("/assets/RnbgImage.jpg")' }} className='w-screen min-h-screen mt-[3%] text-black bg-no-repeat bg-cover  bg-center '>
//     <motion.h1 whileInView={{opacity:1}} transition={{duration:2}} className='font-bold text-center py-[5vh] text-green-600 opacity-0 sm:text-[50px] vmd:text-[30px]  '>Register Here With Your Credentials</motion.h1>
//     <h2 className='text-center'>{formerror}</h2>

//     <form action='/formdata' method='post' onSubmit={getfulldata} className='p-[3vh] text-white grid xl:grid-cols-3 xl:grid-rows-4  lg:grid-cols-2 lg:grid-rows-6 md:grid-cols-2 md:grid-rows-7 sm:grid-cols-2 sm:grid-rows-7 vmd:grid-cols-1 xl:gap-[8vh] lg:gap-[8vh] md:gap-[10vh] sm:gap-[7vh] vmd:gap-[5vh] place-items-center'>
//       {/* first input */}
//       <div className='flex flex-col gap-2'>
//       <h4 className='vmd:text-[20px]'>First Name</h4><input type='text' onChange={handleinput1} name={"n1"} placeholder='First Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl  hover:opacity-75 transition-all focus:bg-slate-600 '/>
//       </div>
//       <div className='flex flex-col gap-2'>
//       <h4 className='vmd:text-[20px]'>Middle Name</h4><input type='text' onChange={handleinput2} name={"n2"} placeholder='Middle Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//       </div>
//       <div className='flex flex-col gap-2'>
//       <h4 className='vmd:text-[20px] text-white'>Last Name</h4><input type='text' onChange={handleinput3} name={"n3"} placeholder='Last Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//       </div>
//       {/* second input */}
//       <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>Registration No.</h4>
//       <input type='text' onChange={handleinput4} name={"n4"} placeholder='Registration No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${regborder}   bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600`}/>
//       </div>
//       {/* third input */}
      
//       {/* fourth input */}
      
//       {/* fifth input */}
//       <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>Roll No.</h4>
//       <input type='text' onChange={handleinput5} name={"n5"} placeholder='Roll No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${rollborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
//       </div>
//       {/* sixth input */}
//       <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>Year</h4>
//       <input type='number' onChange={handleinput6} name={"n6"} placeholder='Year' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${yearborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
//       </div>
//        {/* seventh input */}
//        <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>Mobile No.</h4>
//       <input type='number' onChange={handleinput7} name={"n7"} placeholder='Mobile No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${mobborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
//       </div>
//        {/* eighth input */}
//        <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>E-mail</h4>
//       <input type='email' onChange={handleinput8} name={"n8"} placeholder='E-mail' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//       </div>
//       {/* eighth input */}
//       <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>Message to us</h4>
//       <input type='text' onChange={handleinput9} name={"n9"} placeholder='Message to us' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//       </div>
//        {/* ninth input */}
//        <div className='flex flex-col gap-2'>
//         <h4 className='vmd:text-[20px]'>Club preference</h4>
//       <input type='textarea' onChange={handleinput10} name={"n10"} placeholder='Club preference' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
//       </div>
//        {/* tenth input */}
//       <div className='flex flex-col gap-2'>
//         <h4>Domain</h4>
//         <select onChange={handleinput11} className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '>
//           <option>Select Your Domain</option>
//           <option>Web Development</option>
//           <option>Graphic Designing</option>
//           <option>Content Writing</option>
//           <option>Event Management</option>
//           <option>Video Editing</option>
//         </select>
//       </div>
//        {/* eleventh input */}
//        <div>
//         <button type='submit' className='outline-none border-[2px] border-yellow-300 bg-black text-2xl px-[20px] py-[5px] rounded text-green-500 bg-gradient-to-tr from-red-400 to-purple-500 hover:border-opacity-50 ' >Submit</button>
//       </div>

//     </form>
//     </div>
//     </>
//   )
// }

// export default Register














import React, { useState } from 'react'
// import { motion } from 'framer-motion';
import axios from 'axios'

function Register() {
  const [firstName, setfirst] = useState();
  const [middle, setmiddle] = useState();
  const [last, setlast] = useState();
  const [Registration, setRegistration] = useState();
  // const [red, setred] = useState();
  const [roll, setroll] = useState();
  const [year, setyear] = useState();
  const [mobile, setmobile] = useState();
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const [clubpre, setclubpre] = useState();
  const [webdev, setwebdev] = useState();
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
    setRegistration(reg)
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

      axios.post("http://localhost:5000/formdata",{firstName,middle,last,Registration,roll,year,mobile,email,message,clubpre,webdev})
      .then(res =>{
        console.log(res.data)
      })
      .catch(err =>{
        setformerror(err)
      })    
  }
  return (
    <>
    <div style={{backgroundImage:'url("/assets/RnbgImage.jpg")' }} className='w-screen min-h-screen mt-[3%] text-black bg-no-repeat bg-cover  bg-center '>
    <h1 whileInView={{opacity:1}} transition={{duration:2}} className='font-bold text-center py-[5vh] text-green-600 opacity-0 sm:text-[50px] vmd:text-[30px]  '>Register Here With Your Credentials</h1>
    <h2 className='text-center'>{formerror}</h2>

    <form action='/formdata' method='post' onSubmit={getfulldata} className='p-[3vh] text-white grid xl:grid-cols-3 xl:grid-rows-4  lg:grid-cols-2 lg:grid-rows-6 md:grid-cols-2 md:grid-rows-7 sm:grid-cols-2 sm:grid-rows-7 vmd:grid-cols-1 xl:gap-[8vh] lg:gap-[8vh] md:gap-[10vh] sm:gap-[7vh] vmd:gap-[5vh] place-items-center'>
      {/* first input */}
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px]'>First Name</h4>
      <input type='text' onChange={(e)=>{setfirst(e.target.value)}} name={"n1"} placeholder='First Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl  hover:opacity-75 transition-all focus:bg-slate-600 '/>
      </div>
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px]'>Middle Name</h4>
      <input type='text' onChange={(e)=>{setmiddle(e.target.value)}} name={"n2"} placeholder='Middle Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      <div className='flex flex-col gap-2'>
      <h4 className='vmd:text-[20px] text-white'>Last Name</h4>
      <input type='text' onChange={(e)=>{setlast(e.target.value)}} name={"n3"} placeholder='Last Name' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      {/* second input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Registration No.</h4>
      <input type='text' onChange={handleinput4} name={"n4"} placeholder='Registration No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${regborder}   bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600`}/>
      </div>
      {/* third input */}
      
      {/* fourth input */}
      
      {/* fifth input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Roll No.</h4>
      <input type='text' onChange={handleinput5} name={"n5"} placeholder='Roll No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${rollborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
      {/* sixth input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Year</h4>
      <input type='number' onChange={handleinput6} name={"n6"} placeholder='Year' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${yearborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
       {/* seventh input */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Mobile No.</h4>
      <input type='number' onChange={handleinput7} name={"n7"} placeholder='Mobile No.' className={`xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-${mobborder} bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  `}/>
      </div>
       {/* eighth input */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>E-mail</h4>
      <input type='email' onChange={(e)=>{setemail(e.target.value)}} name={"n8"} placeholder='E-mail' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
      {/* eighth input */}
      <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Message to us</h4>
      <input type='text' onChange={(e)=>{setmessage(e.target.value)}} name={"n9"} placeholder='Message to us' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
      </div>
       {/* ninth input */}
       <div className='flex flex-col gap-2'>
        <h4 className='vmd:text-[20px]'>Club preference</h4>
      <input type='textarea' onChange={(e)=>{setclubpre(e.target.value)}} name={"n10"} placeholder='Club preference' className='xl:w-[25vw] md:w-[40vw] sm:w-[40vw] vmd:w-[80vw] outline-none border-b-[3px] border-yellow-300 bg-black vmd:text-[16px] vmd:py-[5px] py-[10px] px-[10px] text-white text-2xl hover:opacity-75 transition-all focus:bg-slate-600  '/>
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
       {/* eleventh input */}
       <div>
        <button type='submit' className='outline-none border-[2px] border-yellow-300 bg-black text-2xl px-[20px] py-[5px] rounded text-green-500 bg-gradient-to-tr from-red-400 to-purple-500 hover:border-opacity-50 ' >Submit</button>
      </div>

    </form>
    </div>
    </>
  )
}

export default Register