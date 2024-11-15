import React from "react";
import Art from '../../../public/art.jpg'
import Aviation from '../../../public/aviation.png'
import buildings from '../../../public/buildings.png'
import Newimage from '../../../public/imagen.png'
import Buimage from '../../../public/imagebu.png'
import imagejs from '../../../public/imagejk.png'
import imagemachine from '../../../public/imagemachine.png'
import imagebuild from '../../../public/imagebuild.png'
import imagenwww from '../../../public/imagenwww.png'
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const OurServices = () => {
  return (
    <div className="bg-[#D5E9FF] pb-16">
      <Wrapper>
      <h2 className="py-10 font-semibold text-center text-3xl font-sans">Our Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1  md:px-32 sm:px-20 px-7 gap-5  mb-12 place-items-center">
        <div className="relative">
          <Link href="/">
            <div className="relative">
              <Image
                src={Art}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
              <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white text-medium font-medium flex justify-center items-center h-16 font-sans">
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
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
         <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white text-medium font-medium flex justify-center items-center h-16 font-sans">
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
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
                />
                <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white text-medium font-medium flex justify-center items-center h-16 font-sans">
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
                src={Newimage}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
        <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16 font-sans">
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
                src={Buimage}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
               <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16 font-sans">
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
                src={imagejs}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
               <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16 font-sans">
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
                src={imagemachine}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
             <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16 font-sans">
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
                src={imagebuild}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
            <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white font-medium flex justify-center items-center h-16 font-sans">
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
                src={imagenwww}
                alt="Logo"
                className="md:h-[240px] md:w-[285px] sm:h-[240px] sm:w-[245px] h-[200px] w-[330px] rounded-lg"
              />
         <div className="absolute bottom-0 left-0  bg-black opacity-70  rounded-b-lg md:w-[285px]  sm:w-[245px] w-[330px] ">
                <h6 className="text-white  font-medium flex justify-center items-center h-16 font-sans">
                  Program Managemnet
                </h6>
              </div>
            </div>
          </Link>
        </div>
      
      </div>
      <div className="flex justify-center items-center ">
        <button className="py-2 px-10 bg-[#FF4802] rounded-lg md:ml-12  font-semibold text-[#FFFFFF] font-sans">
          See More
        </button>
      </div>
      </Wrapper>
    </div>
  );
};

export default OurServices;
