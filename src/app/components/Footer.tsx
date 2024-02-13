"use client";
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E28] text-white py-12 px-6 md:px-16">
      <div className="container mx-auto flex flex-col md:flex-row gap-5">
        {/* Left Side */}
        <div className="w-full md:w-2/5">
          <div>
            <h2 className="text-3xl mb-2 font-semibold font-sans">
              Our application is beyond the wave
            </h2>
            <p className="text-xs font-sans">
              Designed to make it easy for developers using a complex API allows
              you to build innovative solutions .
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-lg mb-2 font-semibold font-sans"> NAME LOGO</h2>
            <p className="text-xs font-sans">
              Comply with Zatcas e-invoicing mandate for transparent operations.
              Following government rules and laws (compliance) is crucial. It
              ensures smooth business practices, avoiding tax-related troubles.
              Stay compliant with us!
            </p>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-3/5 mt-4 md:mt-20 md:ml-8">
          <div className="grid lg:grid-cols-5  md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            <div>
              <h2 className="text-sm font-medium mb-2 font-sans">Complyance.io</h2>
              <ul className="text-xs font-extralight font-sans">
                <li>Home</li>
                <li>Product</li>
                <li>Whats New</li>
                <li>Pricing</li>
                <li>Business</li>
                <li>Enterprise</li>
                <li>Customer Success</li>
              </ul>
            </div>
            {/* Repeat the pattern for other vertical sections */}
            <div>
              <h2 className="text-sm font-medium mb-2 font-sans">About</h2>
              <ul className="text-xs font-extralight font-sans">
                <li>Company</li>
                <li>Customers</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
                <li>Sitemap</li>
                <li>Pricing FAQ</li>
              </ul>
            </div>
            {/* Repeat the pattern for other vertical sections */}
            <div>
              <h2 className="text-sm font-medium mb-2 font-sans">Resource</h2>
              <ul className="text-xs font-extralight font-sans">
                <li>Help Center</li>
                <li>Forum</li>
                <li>Support</li>
                <li>Developers & API</li>
                <li>Partner</li>
                <li>Events</li>
              </ul>
            </div>
            {/* Repeat the pattern for other vertical sections */}
            <div>
              <h2 className="text-sm font-medium mb-2 font-sans">Learn</h2>
              <ul className="text-xs font-extralight font-sans">
                <li>ZATCA-E-Invocing</li>
                <li>ERP Intergration</li>
                <li>ERP Implemttation</li>
                <li>ERP Customizations</li>
                <li>QR Code Generation</li>
              </ul>
            </div>
            {/* Repeat the pattern for other vertical sections */}
            <div>
              <h2 className="text-sm font-medium mb-2 font-sans">Webflow Solutions</h2>
              <ul className="text-xs font-extralight font-sans">
                <li>Phase-1</li>
                <li>Phase-2</li>
                <li>Booklet</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-16 mt-20 ">
        <div className="h-px bg-[#CCCCCC] w-full mb-12"></div>

        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Social Icons */}
          <div className="md:flex items-center mb-4 md:mb-0">
            <div className="flex items-center gap-5 ">
              <FacebookShareButton url={"http://localhost:3000"}>
                <FacebookIcon size={25} round />
              </FacebookShareButton>
              <TwitterShareButton url={"http://localhost:3000"}>
                <TwitterIcon size={25} round />
              </TwitterShareButton>
              <WhatsappShareButton url={"http://localhost:3000"}>
                <WhatsappIcon size={25} round />
              </WhatsappShareButton>
              <LinkedinShareButton url={"http://localhost:3000"}>
                <LinkedinIcon size={25} round />
              </LinkedinShareButton>
            </div>

            {/* Additional Text */}
            <div className="mt-4 md:mt-0 md:gap-8 gap-4  md:ml-12 flex justify-start  text-sm font-sans">
              <p>
                <a href="#">Privacy Policy</a>
              </p>
              <p>
                <a href="#">Terms and Conditions</a>
              </p>
              <p>
                <a href="#">Support</a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <p className="md:text-right text-left text-sm md:ml-0 md:mr-0 mr-[92px] font-sans">
            Copyright 2023 @ compylance.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
