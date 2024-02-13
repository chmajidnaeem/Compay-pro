import React from "react";
import QuantaLogo from "../Svgs/Quanta";
import Image from "next/image";
import QuantanewLogo from "../../../public/quanta.png";
import Wrapper from "../shared/Wrapper";

const Quanta = () => {
  return (
    <Wrapper>
      <div className="max-w-7xl   xl:px-36 lg:px-24 md:px-8 sm:4 px-3 mt-44 ">
        <div className=" bg-[#D5E9FF]  py-10 rounded-2xl">
          <p className=" text-center text-[#212529]">A division of</p>
          <div className="flex justify-center items-center mt-5">
            <Image width="250" height="67.25" src={QuantanewLogo} alt="" />
          </div>
          <h2 className="text-center mt-7 font-bold text-lg text-[#212529] font-sans">
            REPEATABLE. SUSTAINABLE. BETTER.
          </h2>
          <p className=" justify-text text-center mt-5 md:px-24 px-5 text-[#212529] font-sans">
            Quanta Services is the leading specialty contractor with the largest
            skilled labor force in North America – providing fully integrated
            infrastructure solutions for the utility, energy and communications
            industries. We self-perform more than 85% of our work, collaborating
            with our customers to provide cost certainty and safety.
          </p>
          <div className="flex justify-center items-center">
            <button className="py-2 px-7 bg-[#FF4802] rounded-lg md:ml-12 flex justify-center items-center mt-12 text-center  font-semibold text-[#FFFFFF] mb-10 font-sans">
              Learn More..
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Quanta;
