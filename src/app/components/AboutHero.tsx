import React from 'react'

const AboutHero = () => {
  return (
    <div>
       <div className='max-w-7xl mx-auto'>
          
          <div className='flex justify-center gap-20 lg:h-[600px]  lg:p-10 p-5 '>
              <div className='flex flex-col gap-5 w-[500px]'>
                  <h1 className='text-4xl font-bold'>About us</h1>
                  <p className='text-sm w-full md:text-lg'>AAITECH is a vast and diversified service provider in the fields of Logistics, Design Engineering, Consultancy, and supply of different materials to industrial plants. We are well known for constantly encouraging innovation and modern technologies and our products and services cater for sectors as diverse as Oil & Gas, Power, Petrochemicals, Mechanical, Non-Metallic, and Materials Handling. Our services and outstanding logistical support to our clients has given us the competitive edge over other competitors around the globe</p>
                <div>
                 <button className='bg-orange-700 text-white p-3 text-xl rounded-lg w-40'>Contact Now</button> </div>  
              </div>
              <div className='w-[500px] relative sm:hidden lg:block hidden   '>
                  <img src="./Vector.png" alt="" className='absolute -right-5' />
                  <img src="./Rectangle.png" alt="" className='absolute ' />
                  <img src="./men img.png" alt="" className='absolute p-14 ' />


              </div>

          </div>
          </div>
    </div>
  )
}

export default AboutHero