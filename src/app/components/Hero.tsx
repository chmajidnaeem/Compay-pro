import React from "react";
import Link from "next/link";
import Circle from "../Svgs/circle";
import Orange from "../Svgs/orange";
import Blue from "../Svgs/Blue";
import Picture from "../Svgs/Image";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" py-12 px-4 md:px-0 relative ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-between space-x-5 md:pl-28 pl-2">
        <div className=" mb-6 md:mb-0 mt-7">
          <h1 className="text-4xl md:text-5xl font-bold  md:text-left mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-[#52525B]  md:text-left mb-8 md:mr-12 mr-0">
            HBK Engineering, LLC is a fully licensed, professional engineering
            design firm headquartered in downtown Chicago, with a dedicated team
            of over 600 staff.
          </p>
          <button className="py-2 px-5 bg-[#FF4802] rounded-lg  font-semibold text-[#FFFFFF]">
            Contact Now
          </button>
        </div>
        <div className="md:w-1/2 absolute top-12 left-[1000px] transform -translate-x-1/2 -translate-y-1/2 xl:block lg:hidden md:hidden hidden">
          <div className="relative">
            <div style={{ position: "absolute", top: 0, left: 90 }}>
              <Orange />
            </div>
            <div style={{ position: "absolute", top: 24, left: 0 }}>
              <Circle />
            </div>
            <div style={{ position: "absolute", top: 230, right: 210 }}>
              <Blue />
            </div>
            <div
              style={{
                position: "absolute",
                top: 23,
                left: 120,
                borderRadius: "20px",
              }}
            >
              <Picture />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
