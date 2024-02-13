import React from "react";
// import video from '../../../public/'
import Wrapper from "../shared/Wrapper";

const QuantaServices = () => {
  return (
    // <Wrapper>
      <>
        <div className="bg-[#FFE4D9] h-[373px] w-full my-24">
          <h2 className="flex justify-center items-center text-[#233253] md:text-4xl text-2xl font-medium py-8 font-sans">
            About Quanta Services
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-2  xl:px-[450px] lg:px-64 md:px-44 sm:px-24  md:gap-12 gap-7  mt-8  place-items-center">
            <div className="p-2 bg-[#233253] text-white rounded-lg  font-sans">
              Electric Power
            </div>
            <div className="text-[#233253] md:p-2 font-sans">Underground Utility</div>
            <div className="text-[#233253] md:p-2 font-sans">Communications</div>
          </div>
          <div className=" flex justify-center items-center mt-12 rounded-2xl font-sans">
            <video controls width="1000" height="400">
              <source
                src="C:\Users\NOOR\Desktop\2024 projects\Webpage-pro\public\Quanta Services.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="lg:pt-[230px] md:pt-[200px] sm:pt-[140px] pt-[30px] xl:px-80 lg:px-52 md:px-24 px-5">
          <h2 className="flex justify-center items-center text-center  text-[#212529] font-semibold text-lg font-sans">
            Quanta Services is the leading, end-to-end solutions provider in the
            electric power sector. We build the infrastructure that powers your
            worl
          </h2>
          <p className="flex justify-center items-center text-center mt-6 text-[#212529] text-sm font-sans">
            Quanta engineers, constructs and maintains everything from
            generating stations, substations, transmission lines of any size and
            distribution lines. With companies around the globe and the most
            highly skilled and trained workforce in the industry, we deliver
            world-class execution on a local level
          </p>
          <div className="flex justify-center items-center mt-9">
            <button className="py-2 px-10 bg-[#FF4802] rounded-lg md:ml-12  font-semibold text-[#FFFFFF] font-sans">
              Explore Projects
            </button>
          </div>
        </div>
        <div className="px-24 mt-28">
          <div className="h-px bg-[#CCCCCC] w-full mb-12 "></div>
        </div>
      </>
    // </Wrapper>
  );
};

export default QuantaServices;
