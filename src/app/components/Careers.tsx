import React from "react";
// import Career from '../Svgs/Careers'
import Link from "next/link";
import Career from "../../../public/career.jpg";
import Image from "next/image";

const Careers = () => {
  return (
    <div className="my-16 relative mb-36">
      <div className=" flex justify-center items-center absolute inset-0 bg-orange-600 bg-opacity-75 lg:h-[320px] md:h[340px] sm:h-[400px] h-[450px]  md:w-[860px] lg:mx-60 md:mx-20 sm:mx-12 mx-5 rounded-xl">
        <Link href="/">
          <Image
            src={Career}
            alt="Logo"
            className=" md:w-[860px]  opacity-35  rounded-xl absolute inset-0 md:block lg:h-[320px] md:h[340px] sm:h-[400px] h-[450px] "
          />
        </Link>
      </div>

      <div className="xl:px-72 lg:px-60 md:px-20 sm:px-28 px-9 pt-8 ">
        <h2 className="relative top- text-center top-4 text-white text-4xl font-semibold">
          Careers
        </h2>
        <p className="relative text-center top-8 text-black text-xl font-medium">
          Our employees are our number one asset
        </p>
        <p className="relative text-center  top-12 text-white text-sm">
          Our employees are our number one asset. Our goal is to recruit the
          best candidates in the industry and retain them for a long,
          progressive career. HBK is a fast-paced, team-centered environment
          with unlimited growth potential. Our long list of established clients
          provides employees with the opportunity to work on dynamic and
          challenging projects every day. We offer an exciting and gainful work
          environment encouraging professional, personal and organizational
          growth. Our team of multi-talented employees contributes to an
          entrepreneurial-minded atmosphere where ideas, creativity and
          solutions are cultivated
        </p>
      </div>
    </div>
  );
};

export default Careers;
