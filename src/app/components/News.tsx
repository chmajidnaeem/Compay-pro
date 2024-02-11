import React from "react";
import Pic1 from "../../../public/pic1.jpeg";
import Pic2 from "../../../public/pic2.jpeg";
import Pic3 from "../../../public/pic3.jpeg";
import Link from "next/link";
import Image from "next/image";

const News = () => {
  return (
    <div>
      <div className="bg-orange-600">
        <h2 className="relative top- text-center top-4 text-white text-4xl font-semibold pt-12">
          News
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:px-64 lg:px-44 md:px-32 sm:px-20 px-10 gap-5 mb-12 mt-16">
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
        </div>
        <div className="flex justify-center items-center">
        <button className="py-2 px-10 text-[#FF4802] rounded-lg md:ml-12  font-semibold bg-[#FFFFFF]">
          More News
        </button>
      </div>
      </div>
     
    </div>
  );
};

export default News;
