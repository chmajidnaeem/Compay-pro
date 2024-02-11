import React from 'react'
import Pic1 from '../../../public/pic1.jpeg'
import Pic2 from '../../../public/pic2.jpeg'
import Pic3 from '../../../public/pic3.jpeg'
import Link from "next/link";
import Image from "next/image";

const AboutHbk = () => {
  return (
    <div>
    <h2 className="flex justify-center items-center text-[#000000] md:text-4xl text-2xl font-medium py-8">
    About HBK Engineering
    </h2>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:px-64 lg:px-44 md:px-32 sm:px-20 px-10 gap-5 mb-24">
    <div className="relative ">
        <Link href="/">
          <Image src={Pic1} alt="Logo" className="md:h-[190px] md:w-[235px] sm:h-[190px] sm:w-[235px] h-[200px] w-[330px] rounded-lg " />
          {/* <p className="top-44 ">Our Work</p>
          <div className="h-px bg-[#CCCCCC] w-full mb-12 "></div> */}
        </Link>
      </div>
      <div className="relative">
        <Link href="/">
        <Image src={Pic2} alt="Logo" className="md:h-[190px] md:w-[235px] sm:h-[190px] sm:w-[235px] h-[200px] w-[330px] rounded-lg " />
          {/* <p className="top-44 ">Our Work</p>
          <div className="h-px bg-[#CCCCCC] w-full mb-12 "></div> */}
        </Link>
      </div>
      <div className="relative">
        <Link href="/">
        <Image src={Pic3} alt="Logo" className="md:h-[190px] md:w-[235px] sm:h-[190px] sm:w-[235px] h-[200px] w-[330px] rounded-lg " />
          {/* <p className="top-44 ">Our Work</p>
          <div className="h-px bg-[#CCCCCC] w-full mb-12 "></div> */}
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AboutHbk