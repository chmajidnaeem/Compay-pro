/* eslint-disable @next/next/no-img-element */
import React from "react";
import Wrapper from "../shared/Wrapper";

const JoinOurTeam = () => {
  return (
    <Wrapper>
      <div className="md:px-24">
        <h1 className="font-semibold md:text-4xl ml-14 justify-start m-10 sm:text-2xl text-3xl">
          Join Our Team
        </h1>
        <div className=" mx-4 ">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center  gap-10 m-10">
            <div className="bg-white shadow-lg rounded-lg py-10 px-8   w-200 h-50 md:mb-96">
              <img src="./student.png" alt="" className="content-center" />
              <h6 className="text-2xl font-semibold text-gray-800 mt-2">
                Students/Interns
              </h6>
              <p className="text-gray-600 my-4">
                Whether you’re a college student seeking an internship or a
                recent graduate looking to start your career, at HBK, you’ll be
                making important contributions to projects from the very first
                day.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg py-10 px-8   w-200 h-150 md:mt-12 md:mb-36">
              <img src="./leticon.png" alt="" className="content-center " />
              {/* <img src="./leticonnew.png" alt="" className='absolute ' /> */}
              <h6 className="text-2xl font-semibold text-gray-800 mt-1">
                Experienced Hires
              </h6>
              <p className="text-gray-600 justify-center mt-3">
                HBK welcomes candidates with a passion for problem solving to
                apply for any of our open positions. We offer a
                multi-disciplinary environment where you’ll be working with a
                variety of professionals to provide best in class engineering
                products to our clients.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg py-10 px-8 w-200 h-160 md:my-24">
              <img src="./epoperation.png" alt="" className="content-center" />

              <h6 className="text-2xl font-semibold text-gray-800">
                Filed Operations
              </h6>
              <p className="text-gray-600 mt-3">
                As an engineering firm known as the boots on the ground
                engineers, we have a range of positions available for both
                licensed and non-licensed field professionals who have  a desire
                to develop hands on survey, locating and inspection skills in
                the field environment.
              </p>
            </div>

            <div className="flex sm:flex-row gap-1 p-1 relative">
              <div className="relative">
                <img
                  src="./Vec.png"
                  alt=""
                  className="w-25 h-22 absolute top-0 right-0 transform translate-x-2 translate-y-2"
                />
                <img
                  src="./rectpic.png"
                  alt=""
                  className="w-30 h-50 relative m-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-10">
            <button className="py-2 px-10 bg-[#FF4802] rounded-lg md:ml-12  font-semibold text-[#FFFFFF] font-sans">
              See More
            </button>
          </div>
      </div>
    </Wrapper>
  );
};

export default JoinOurTeam;
