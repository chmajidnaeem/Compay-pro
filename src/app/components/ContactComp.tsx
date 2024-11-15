"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Vector from "../../../public/Vector.png";
import Recctangle from "../../../public/Rectangle.png";

export const ContactUs = () => {
  return (
    <section className="bg-white ">
      <div className="container lg:px-40 md:px-32 sm:px-16 px-8 py-12 mx-auto">
        <div className="lg:flex  lg:-mx-6 lg:gap-10 md:h-screen sm:h-[900px] h-[1280px]">
          {/* left side  */}
          <div className="lg:w-1/2 lg:mx-4 text-sm md:text-lg lg:text-2xl  mb-10">
            <h1 className="text-4xl md:text-5xl font-bold  md:text-start mb-4">
              Contact Us
            </h1>
            <p className="text-[#52525B] text-justify md:text-left mb-8 md:mr-12 mr-0">
              We are looking forward to assist you please find contact details
              given below or fill the form and send message we will get you soon
              as soon as possible.
            </p>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <span className="inline-block p-3 text-white rounded-full bg-[#FF4802] dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <span className="m-2 text-black truncate w-72 ">
                  +447926 926179
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <span className="inline-block p-3 text-white rounded-full bg-[#FF4802] dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span className="m-2 text-black truncate w-72 ">
                  info@aaitech.com
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <span className="inline-block p-3 text-white rounded-full bg-[#FF4802] dark:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <span className="m-2 text-black truncate w-72 ">
                  12 Ditton Park Road Slough,England,SL3 7JA
                </span>
              </p>
            </div>
          </div>
          {/* rigth side */}
          <div className=" lg:w-1/2 w-auto lg:mx-6 relative">
            <div className="w-full px-8  mx-auto overflow-hidden bg-gray-100 rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50  ">
              <div>
                <Link href="/">
                  <Image
                    src={Vector}
                    alt="vector"
                    className="absolute -right-14 -top-5 sm:hidden md:block hidden"
                  />
                </Link>
              </div>
              <div>
                <Link href="/">
                  <Image
                    src={Recctangle}
                    alt="ractangle"
                    className="absolute left-5 sm:hidden md:block hidden"
                  />
                </Link>
              </div>

              <form className=" absolute bg-white rounded-3xl px-7 py-10 top-20 shadow-xl">
                {" "}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {" "}
                  <div>
                    <label className=" font-bold" htmlFor="username">
                      FullName
                    </label>
                    <input
                      id="username"
                      placeholder="your name"
                      type="text"
                      className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className=" font-bold" htmlFor="emailAddress">
                      CompanyName
                    </label>
                    <input
                      id="emailAddress"
                      placeholder="your company name"
                      type="email"
                      className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className=" font-bold" htmlFor="username">
                      Work Email
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="your email"
                      className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className=" font-bold" htmlFor="emailAddress">
                      How did you know about us
                    </label>
                    <input
                      id="emailAddress"
                      type="email"
                      placeholder="click to select"
                      className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label className=" font-bold" htmlFor="password">
                      PhoneNo/Whatsapp
                    </label>
                    <input
                      id="password"
                      type="input"
                      placeholder="number to contact"
                      className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                  <div>
                    <label
                      className=" font-bold"
                      htmlFor="passwordConfirmation"
                    >
                      Job Title
                    </label>
                    <input
                      id="passwordConfirmation"
                      placeholder="designation"
                      type="password"
                      className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label className=" font-bold " htmlFor="username">
                    Requirement
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="requirement"
                    className="block w-full px-6 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   focus:border-[#FF4802] focus:ring-[#FF4802] focus:ring-opacity-40  focus:outline-none focus:ring"
                  />
                </div>
                <div className="flex justify-end mt-6">
                  <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#FF4802] rounded-md hover:bg- focus:outline-none focus:bg-gray-600">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactUs;
