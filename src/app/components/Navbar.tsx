"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#FFE4D9] text-[#52525B] p-1 md:text-base text-sm flex justify-center items-center  text-center font-sans">
        Unleash the Power of Integration: Discover Our API Today! 🚀
      </div>

      <nav className="bg-[#FFFFFF] p-4 ">
        <div className="max-w-7xl mx-auto flex justify-between items-center xl:pl-32 lg:pl-24  xl:pr-52 lg:pr-24 md:px-8 sm:4 px-3">
          <div>
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-8 ">
              <li>
                <Link href="/">
                  <div className="text-[#FF4802] hover:text-gray-300 py-2 font-semibold font-sans">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold font-sans">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/our-services">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold  font-sans">
                    Our Services
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold font-sans">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold font-sans">
                    Blog
                  </div>
                </Link>
              </li>
              <div>
                <button className="py-2 px-10 bg-[#FF4802] rounded-lg md:ml-12  font-semibold text-[#FFFFFF] font-sans">
                  Join
                </button>
              </div>
            </ul>
          </div>

          {/* menu button  */}
          <div className="md:hidden ">
            <button
              className="text-[#52525B] focus:outline-none "
              onClick={toggleMenu}
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden my-3">
            <ul className="flex flex-col space-y-4 bg-[#FFE4D9] py-12 px-8">
              <li>
                <Link href="/">
                  <div className="text-[#52525B] hover:text-gray-300 font-sans">
                    Home
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/AboutUs">
                  <div className="text-[#52525B] hover:text-gray-300 font-sans">
                    About Us
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/OurServices">
                  <div className="text-[#52525B] hover:text-gray-300 font-sans">
                    Our Services
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/ContactUs">
                  <div className="text-[#52525B] hover:text-gray-300 font-sans">
                    Contact
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Blog">
                  <div className="text-[#52525B] hover:text-gray-300 font-sans">
                    Blog
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
