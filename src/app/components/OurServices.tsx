import React from "react";
import Pic1 from "../../../public/pic1.jpeg";
import Pic2 from "../../../public/pic2.jpeg";
import Pic3 from "../../../public/pic3.jpeg";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#D5E9FF] pb-16">
      <h2 className="py-10 font-semibold text-lg text-center">Our Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:px-64 lg:px-44 md:px-32 sm:px-20 px-10 gap-5 mb-24">
        <div className="relative ">
          <Link href="/">
            <Image
              src={Pic1}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={Pic3}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={Pic3}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative ">
          <Link href="/">
            <Image
              src={Pic3}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={Pic1}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={Pic2}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative ">
          <Link href="/">
            <Image
              src={Pic2}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={Pic3}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <Image
              src={Pic1}
              alt="Logo"
              className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg "
            />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2 ">
        <button className="py-2 px-10 bg-[#FF4802] rounded-lg md:ml-12  font-semibold text-[#FFFFFF]">
          See More
        </button>
      </div>
    </div>
  );
};

export default OurServices;
