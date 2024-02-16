import React from 'react'


const ServiceHero = () => {
  return (
    <div>
      <div className=" pb-16">

<div className='flex lg:justify-center justify-start gap-20 lg:h-[600px]  lg:p-10 p-8 md:px-16 '>
  <div className='flex flex-col justify-around gap-5 w-[500px]'>
    <h1 className='text-4xl font-bold'>What We Do</h1>
    <p className='text-sm w-full md:text-lg'>AAITECH is a vast and diversified service provider in the fields of Logistics, Design Engineering, Consultancy, and supply of different materials to industrial plants. We are well known for constantly encouraging innovation and modern technologies and our products and services cater for sectors as diverse as Oil & Gas, Power, Petrochemicals, Mechanical, Non-Metallic, and Materials Handling. Our services and outstanding logistical support to our clients has given us the competitive edge over other competitors around the globe</p>
    <div>
      <button className='bg-[#FF4802] text-white p-3 text-xl rounded-lg w-40'>Contact Now</button> </div>
  </div>
  <div className='w-[500px] relative sm:hidden lg:block hidden   '>
    <img src="./Vector.png" alt="" className='absolute w-80 right-0 -top-10' />
    <img src="./Ellipse.png" alt="" className='absolute w-80 top-40' />
    <img src="./Rectangle2.png" alt="" className='absolute w-80 right-20 top-10' />


  </div>

</div>
    </div>
    </div>
  )
}

export default ServiceHero
