import React from 'react'

const BlogHero = () => {
  return (
    <div>
       <div>
            <div className='flex lg:justify-center justify-start gap-40 lg:h-[600px] lg:px-40 md:px-32 sm:px-16 px-8 '>
                <div className='flex flex-col justify-center gap-5 w-[500px]'>
                    <h1 className='text-4xl font-bold'>Blog</h1>
                    <p className='text-sm w-full md:text-lg'>AAITECH is a vast and diversified service provider in the fields of Logistics, Design Engineering, Consultancy, and supply of different materials to industrial plants. We are well known for constantly encouraging innovation and modern technologies and our products and services cater for sectors as diverse as Oil & Gas, Power, Petrochemicals, Mechanical, Non-Metallic, and Materials Handling. Our services and outstanding logistical support to our clients has given us the competitive edge over other competitors around the globe</p>
                 
                </div>
                <div className='w-[500px] relative sm:hidden lg:block hidden   '>
                    <img src="./Vector.png" alt="" className='absolute -right-5' />
                    <img src="./Rec3.png" alt="" className='absolute  -left-6' />
                    <img src="./men2.png" alt="" className='absolute top-20 ' />
                    <div className="absolute top-96 w-96 text-sm -left-14 flex flex-col  gap-5 bg-white rounded-3xl p-3">
                        <p className="text-rose-700 bg-red-200 w-28 p-2">Announcement</p>
                        <p className="font-semibold text-lg">Arcion have agreed to be acquired by Databricks</p>
                        <p>Looking forward, its clear that enterprises that want to derive value from AI need to choose the right </p>
                        <p className="font-light"> October 23, 2023</p>

                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default BlogHero
