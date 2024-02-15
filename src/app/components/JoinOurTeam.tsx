import React from 'react'
import Wrapper from "../shared/Wrapper";

const JoinOurTeam = () => {
  return (
    <Wrapper>
      <div>
        <h1 className='font-bold text-xl justify-start m-10 sm:text-sm'>JoinOurTeam</h1>
        <div className=" mx-4 ">
  <div className="flex flex-col sm:flex-row justify-center  gap-1 m-10">
   
    <div className="bg-white shadow-lg rounded-lg p-4  w-200 h-50">
      
      <img src="./student.png" alt="" className='content-center' />
      <h6 className="text-2xl font-semibold text-gray-800">Students/Interns</h6>
      <p className="text-gray-600 ">Whether you’re a college <br /> student seeking an <br /> internship or a recent <br /> graduate looking to start <br /> your career, at HBK, you’ll <br /> be making important <br /> contributions to projects <br /> from the very first day.</p>
     
    </div>

   
    
  <div className="flex flex-col sm:flex-row m-10 items-center gap-1 pb-20">
   
    <div className="bg-white shadow-lg rounded-lg p-10  w-200 h-150">
      
      <img src="./leticon.png" alt="" className='content-center' />
      <img src="./leticonnew.png" alt="" className='absolute' />
      <h6 className="text-2xl font-semibold text-gray-800">Experienced Hires</h6>
      <p className="text-gray-600 justify-center">HBK welcomes candidates <br /> with a passion for problem <br /> solving to apply for any of<br /> our open positions. We <br /> offer a multi-disciplinary <br /> environment where you’ll <br /> be working with a variety of <br /> professionals to provide <br /> best in class engineering <br />products to our clients.</p>
     
   
  </div>
</div>
<div className="flex flex-col sm:flex-row justify-center items-center gap-1">
   
    <div className="bg-white shadow-lg rounded-lg p-6 w-200 h-150">
      
      <img src="./epoperation.png" alt="" className='content-center' />
     
      <h6 className="text-2xl font-semibold text-gray-800">Filed Operations</h6>
      <p className="text-gray-600 ">HBK welcomes candidates <br /> with a passion for problem <br /> solving to apply for any of<br /> our open positions. We <br /> offer a multi-disciplinary <br /> environment where you’ll <br /> be working with a variety of <br /> professionals to provide <br /> best in class engineering <br />products to our clients.</p>
     
   
  </div>
  <div className="flex sm:flex-row gap-1 p-1 ">
  <div className="  ">
  <img src="./Vec.png" alt="" className='w-25 h-22 content-end  m-5 absolute p-6' />
  <img src="./rectpic.png" alt="" className='w-30 h-50 content-end   m-10 relative' />
</div>
</div>

</div>
</div>
</div>

      </div>
    </Wrapper>
  )
}

export default JoinOurTeam