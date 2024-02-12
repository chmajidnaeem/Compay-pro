import React from "react";
import Art from '../../../public/art.jpg'
import Aviation from '../../../public/aviation.png'
import buildings from '../../../public/buildings.png'
import Pic4 from "../../../public/pic4.jpeg";
import Pic5 from "../../../public/p5.jpeg";
import Pic6 from "../../../public/p6.jpeg";
import Pic7 from "../../../public/p7.jpeg";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <div className="bg-[#D5E9FF] pb-16">
      <h2 className="py-10 font-semibold text-center text-3xl">Our Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:px-64 lg:px-44 md:px-32 sm:px-20 px-10 gap-5 mb-12">
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Art}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white text-medium font-medium flex justify-center items-center h-16">
                  Architecture
                </h6>
              </div>
            </div>
          </Link>
        </div>

        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Aviation}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white text-medium font-medium flex justify-center items-center h-16">
                  Aviation
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={buildings}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white text-medium font-medium flex justify-center items-center h-16">
                  Buildings
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Pic4}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16">
                  Commisioning
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Pic5}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16">
                  Electric Power Geration
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Pic6}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16">
                  Industrial
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Pic7}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16">
                  Buildings
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={buildings}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white font-medium flex justify-center items-center h-16">
                  Constrction
                </h6>
              </div>
            </div>
          </Link>
        </div>
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Pic5}
                alt="Logo"
                className="md:h-[240px] md:w-[245px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[245px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16">
                  Program Managemnet
                </h6>
              </div>
            </div>
          </Link>
        </div>
      
      </div>
      <div className="flex justify-center items-center ">
        <button className="py-2 px-10 bg-[#FF4802] rounded-lg md:ml-12  font-semibold text-[#FFFFFF]">
          See More
        </button>
      </div>
    </div>
  );
};

export default OurServices;
