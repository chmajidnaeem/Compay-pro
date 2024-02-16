import React from "react";
import Pic1 from "../../../public/pic1.png";
import Main from "../../../public/Main.png";
import imgecard3 from "../../../public/imgecard3.png";
import Link from "next/link";
import Image from "next/image";

const News = () => {
  return (
    <div>
      <div className="bg-orange-600 pb-10">
        <h2 className="relative top- text-center top-4 text-white text-4xl font-semibold pt-12 font-sans">
          News
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 xl:px-80 lg:px-44 md:px-32 sm:px-20 px-7 gap-5 mb-12 mt-16 place-items-center">
          <div className="relative">
            <Link href="/">
              <div className="relative">
                <Image
                  src={Pic1}
                  alt="Logo"
                  className="md:h-[280px] md:w-auto sm:w-full w-full h-[250px] rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-white rounded-b-lg xl:w-full lg:w-full md:w-full sm:w-full w-full p-2">
                  <h6 className="text-black text-sm font-normal flex justify-start items-center h-7 mb-3 font-sans">
                    End of Year Community & Volunteering
                  </h6>
                  <p className="text-[9px] font-normal font-sans">
                    HBK takes pride in going beyond the work and supporting
                    organizations that help all of our local communities and
                    communities in need, worldwide.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Link href="/">
              <div className="relative">
                <Image
                  src={Main}
                  alt="Logo"
                  className="md:h-[280px] md:w-auto sm:w-full w-full h-[250px] rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-white rounded-b-lg xl:w-full lg:w-full md:w-full sm:w-full w-full p-2">
                  <h6 className="text-black text-sm font-normal flex justify-start items-center h-7 mb-3 font-sans">
                    End of Year Community & Volunteering
                  </h6>
                  <p className="font-sans text-[9px] font-normal">
                    HBK takes pride in going beyond the work and supporting
                    organizations that help all of our local communities and
                    communities in need, worldwide.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="relative">
            <Link href="/">
              <div className="relative">
                <Image
                  src={imgecard3}
                  alt="Logo"
                  className="md:h-[280px] md:w-auto sm:w-full w-full h-[250px] rounded-lg"
                />
                <div className="absolute bottom-0 left-0 bg-white rounded-b-lg xl:w-full lg:w-full md:w-full sm:w-full w-full p-2">
                  <h6 className="text-black text-sm font-normal flex justify-start items-center h-7 mb-3 font-sans">
                    End of Year Community & Volunteering
                  </h6>
                  <p className="text-[9px] font-normal font-sans">
                    HBK takes pride in going beyond the work and supporting
                    organizations that help all of our local communities and
                    communities in need, worldwide.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="py-2 px-10 text-[#FF4802] font-sans rounded-lg md:ml-12  font-semibold bg-[#FFFFFF]">
            More News
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
