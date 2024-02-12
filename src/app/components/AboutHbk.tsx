import React from "react";
import Pic1 from "../../../public/pic1.jpeg";
import Pic2 from "../../../public/pic2.jpeg";
import Pic3 from "../../../public/pic3.jpeg";
import Link from "next/link";
import Image from "next/image";
import rec from '../../../public/rect.jpg'
import rec1 from '../../../public/rect1.jpg'
import rec2 from '../../../public/rect2.jpg'
const AboutHbk = () => {
  return (
    <div>
      <h2 className="font-sans flex justify-center items-center text-[#000000] md:text-4xl text-2xl font-medium py-8">
        About HBK Engineering
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:px-64 lg:px-44 md:px-32 sm:px-20 px-10 gap-5 mb-24">
        <div className="relative ">
          <Link href="/">
            <div className="relative">
              <Image
                src={rec}
                alt="Logo"
                className="md:h-[190px] md:w-[235px] sm:h-[190px] sm:w-[235px] h-[200px] w-[330px] rounded-lg "
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl font-semibold">
                Our Work
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-orange-500 w-16 top-28 rounded-lg"></div>
            </div>
          </Link>
        </div>
        <div className="relative">
        <Link href="/">
            <div className="relative">
              <Image
                src={rec1}
                alt="Logo"
                className="md:h-[190px] md:w-[235px] sm:h-[190px] sm:w-[235px] h-[200px] w-[330px] rounded-lg "
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl font-semibold">
                Our Impact
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-orange-500 w-16 top-28 rounded-lg"></div>
            </div>
          </Link>
        </div>
        <div className="relative">
        <Link href="/">
            <div className="relative">
              <Image
                src={rec2}
                alt="Logo"
                className="md:h-[190px] md:w-[235px] sm:h-[190px] sm:w-[235px] h-[200px] w-[330px] rounded-lg "
              />
              <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white text-xl font-semibold">
                Our Culture
              </p>
              <div className="absolute left-1/2 transform -translate-x-1/2 h-1 bg-orange-500 w-16 top-28 rounded-lg"></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutHbk;
