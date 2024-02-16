/* eslint-disable @next/next/no-img-element */
import React from "react";
import Wrapper from "../shared/Wrapper";
import Clock from "../Svgs/Clock";
import Clock2 from "../Svgs/Clock2";
import GataClock from "../Svgs/GataClock";
import Vec from "../Svgs/Vec";
import Picture from "../Svgs/Image";

const JoinOurTeam = () => {
  return (
    <Wrapper>
      <div className="md:px-24">
        <h1 className="font-semibold md:text-4xl ml-14 justify-start m-10 sm:text-2xl text-3xl">
          Join Our Team
        </h1>
        <div className=" mx-4 ">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center  gap-10 m-10">
            <div className="bg-white shadow-xl rounded-lg py-10 px-8   w-200 h-50 md:h-[460px] md:w-[223px]">
              <img
                src="./student.png"
                alt=""
                className="content-center  mx-auto"
              />
              <h6 className="text-2xl font-semibold text-gray-800 mt-2 text-center">
                Students/Interns
              </h6>
              <p className="text-gray-600 my-4 text-center">
                Whether you’re a college student seeking an internship or a
                recent graduate looking to start your career, at HBK, you’ll be
                making important contributions to projects from the very first
                day.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg py-10 px-8   w-auto h-auto md:mt-12  md:h-[560px] md:w-[223px]">
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: "-110px",
                    transform: "translateX(-50%)",
                    left: "50%",
                  }}
                >
                  <GataClock />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    transform: "translateX(-50%)",
                    left: "50%",
                  }}
                >
                  <Clock />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "19px",
                    transform: "translateX(-50%)",
                    left: "60%",
                  }}
                >
                  <Clock2 />
                </div>
              </div>

              <h6 className="text-2xl font-semibold text-gray-800 mt-20 text-center">
                Experienced Hires
              </h6>
              <p className="text-gray-600 justify-center mt-3 text-center">
                HBK welcomes candidates with a passion for problem solving to
                apply for any of our open positions. We offer a
                multi-disciplinary environment where you’ll be working with a
                variety of professionals to provide best in class engineering
                products to our clients.
              </p>
            </div>

            <div className="bg-white shadow-xl rounded-lg py-10 px-8 w-auto md:h-[560px] md:w-[223px] md:mt-24 ">
              <img
                src="./epoperation.png"
                alt=""
                className="content-center mx-auto"
              />
              <h6 className="text-2xl font-semibold text-gray-800 text-center">
                Filed Operations
              </h6>
              <p className="text-gray-600 mt-3 text-center">
                As an engineering firm known as the boots on the ground
                engineers, we have a range of positions available for both
                licensed and non-licensed field professionals who have  a desire
                to develop hands on survey, locating and inspection skills in
                the field environment.
              </p>
            </div>

            <div className="flex sm:flex-row gap-1 p-1 relative lg:block hidden">
              <div className="relative">
                <div style={{ position: "absolute", top: 0, left: 0 }}>
                  <Vec />
                </div>
                <div style={{ position: "absolute", top: 40, left: 60 }}>
                  <Picture />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center m-10">
          <button className="py-3 px-10 bg-[#FF4802] rounded-lg md:ml-12 mt-12  font-semibold text-[#FFFFFF] font-sans">
            Search Careers
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default JoinOurTeam;
