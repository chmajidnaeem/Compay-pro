import React from "react";
import QuantaLogo from "../Svgs/Quanta";

const Quanta = () => {
  return (
    <div className="max-w-7xl   xl:px-52 lg:px-24 md:px-8 sm:4 px-3 mt-44 ">
      <div className=" bg-[#D5E9FF] py-8 rounded-2xl">
        <p className=" text-center text-[#212529]">A division of</p>
        <div className="flex justify-center items-center mt-5">
          <QuantaLogo />
        </div>
        <h2 className="text-center mt-7 font-bold text-lg text-[#212529]">
          REPEATABLE. SUSTAINABLE. BETTER.
        </h2>
        <p className=" text-center mt-5 md:px-24 px-5 text-[#212529]">
          Quanta Services is the leading specialty contractor with the largest
          skilled labor force in North America – providing fully integrated
          infrastructure solutions for the utility, energy and communications
          industries. We self-perform more than 85% of our work, collaborating
          with our customers to provide cost certainty and safety.
        </p>
        <div className="flex justify-center items-center">

        <button className="py-2 px-7 bg-[#FF4802] rounded-lg md:ml-12 flex justify-center items-center mt-12 text-center  font-semibold text-[#FFFFFF] mb-10">
          Learn More..
        </button>
        </div>

      </div>
    </div>
  );
};

export default Quanta;
