import React from "react";
import Link from "next/link";
import Circle from "../Svgs/circle";
import Orange from "../Svgs/orange";
import Blue from "../Svgs/Blue";
import Picture from "../Svgs/Image";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

const Hero = () => {
  return (
    <Wrapper>
      <div className=" md:py-12 pt-0 px-4 md:px-0 relative ">
        <div className=" md:px-36  px-7 grid md:grid-cols-2 grid-cols-1 items-center justify-center md:justify-between space-x-5 ">
          {/* text section  */}
          <div className="  mt-7 md:order-1 order-2 mb-80 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold  md:text-left mb-4 font-sans">
              Who We Are
            </h1>
            <p className="text-lg text-[#52525B]  md:text-left mb-8 md:mr-12 mr-0 font-sans">
              HBK Engineering, LLC is a fully licensed, professional engineering
              design firm headquartered in downtown Chicago, with a dedicated
              team of over 600 staff.
            </p>
            <button className="py-2 px-5 bg-[#FF4802] rounded-lg  font-semibold text-[#FFFFFF] font-sans">
              Contact Now
            </button>
          </div>

{/* images section  */}
          <div className="md:w-1/2 w-[190px] absolute md:top-12 top-80 xl:left-[1000px] lg:left-[800px] md:left-[700px] sm:block transform -translate-x-1/2 -translate-y-1/2 md:order-2 order-1">
            <div className="relative">
              <div
                className="md:w-16 w-10"
                style={{ position: "absolute", top: 0, left: 90 }}
              >
                <Orange />
              </div>
              <div
                className="md:w-16 w-10"
                style={{ position: "absolute", top: 24, left: 30 }}
              >
                <Circle />
              </div>
              <div
                className="md:w-16 w-10"
                style={{ position: "absolute", top: 230, left: 310 }}
              >
                <Blue />
              </div>
              <div
                className="md:w-16 w-10"
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
    </Wrapper>
  );
};

export default Hero;
