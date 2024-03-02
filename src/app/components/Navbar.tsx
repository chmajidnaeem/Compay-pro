"use client";
import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const Navbar = ({ currentPage }: any) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


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
            <ul className="flex space-x-8  pt-5">
              <li>
                {/*    Home strt */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center  bg-white  text-sm font-semibold text-black ">
                      <Link href={"/"} >

                        Home

                      </Link>                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*       Home end */}
                {/* <Link href="/">
                  <div className="text-[#FF4802] hover:text-gray-300 py-2 font-semibold font-sans">
                    Home
                  </div>
                </Link> */}
              </li>
              <li>
                {/*   About Us strt */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center  bg-white text-sm font-semibold text-black ">
                      <Link href="/about-us" >

                        AboutUs   </Link>                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*     About Us end */}

                {/* <Link href="/about-us">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold font-sans">
                    About Us
                  </div>
                </Link> */}
              </li>
              <li>
                {/*   Our Services */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center   text-sm font-semibold text-black ">
                      <Link href="/our-services">

                        OurServices </Link>
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*   Our Services end */}

                {/* <Link href="/our-services">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold  font-sans">
                    Our Services
                  </div>
                </Link> */}
              </li>

              <li>
                {/*    Contact */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center  bg-white text-sm font-semibold text-black ">
                      <Link href="/contact-us" >

                        Contact   </Link>                     <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*    Contact end */}
                {/* <Link href="/contact-us">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold font-sans">
                    Contact
                  </div>
                </Link> */}
              </li>

              <li>
                {/*    Blog */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center  text-sm font-semibold text-black ">
                      <Link href="/Blog" >

                        Blog  </Link>                   <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute  right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*     Blog end */}

                {/* <Link href="/blog">
                  <div className="text-[#52525B] hover:text-gray-300 py-2 font-semibold font-sans">
                    Blog
                  </div>
                </Link> */}
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
                {/*    Home strt */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5    text-sm font-semibold text-black ">
                      <Link href={"/"} >

                        Home

                      </Link>                  <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right text-black rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                // active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*       Home end */}
              </li>
              <li>
                {/*   About Us strt */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center  text-sm font-semibold text-black ">
                      <Link href="/about-us" >

                        AboutUs   </Link>                <ChevronDownIcon className=" h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*     About Us end */}
              </li>
              <li>
                {/*   Our Services */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5   text-sm font-semibold text-black ">
                      <Link href="/our-services">

                        OurServices </Link>
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*   Our Services end */}
              </li>
              <li>
                {/*    Contact */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5   text-sm font-semibold text-black ">
                      <Link href="/contact-us" >

                        Contact   </Link>                     <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*    Contact end */}
              </li>
              <li>
                {/*    Blog */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  text-sm font-semibold text-black ">
                      <Link href="/Blog" >

                        Blog  </Link>                   <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 1
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100 text-black' : 'text-black',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              Item 2
                            </a>
                          )}
                        </Menu.Item>
                        <form method="POST" action="#">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="submit"
                                className={classNames(
                                  active ? 'bg-gray-100 text-black' : 'text-black',
                                  'block w-full px-4 py-2 text-left text-sm'
                                )}
                              >
                                Item 3
                              </button>
                            )}
                          </Menu.Item>
                        </form>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
                {/*     Blog end */}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
