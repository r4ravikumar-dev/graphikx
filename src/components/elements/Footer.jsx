import React from "react";
import brandLogo from "../../assets/graphikx-white.png";
import {
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaGithub,
  FaChrome,
  FaFigma,
  FaDribbble,
  FaBehance,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-navy">
        <div className="flex flex-wrap mx-2 sm:mx-auto max-w-screen-xl pt-[40px] sm:pt-[80px] pb-[40px] ">
          <div className="flex flex-wrap justify-start">
            <a href="/">
              <img src={brandLogo} alt="Logo" className="h-[18px]" />
            </a>
          </div>
          <div className="w-full flex flex-wrap justify-center flex-col mt-10">
            <h1 className="flex flex-wrap  justify-center text-center underline font-ubuntu font-medium text-[12px] sm:text-[16px] leading-[135%] text-white">
              For more updates be socially connected with us on
            </h1>
            <div className="flex flex-wrap justify-center mt-2 mb-4">
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[24px]  p-2  hover:bg-white/40 ">
                <a href="https://www.instagram.com/_graphikx">
                  <FaInstagram />
                </a>
              </div>
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[24px]  p-2  hover:bg-white/40 ">
                <a href="https://www.instagram.com/_graphikx">
                  <FaLinkedin />
                </a>
              </div>
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[24px]  p-2  hover:bg-white/40 ">
                <a href="https://www.instagram.com/_graphikx">
                  <FaGithub />
                </a>
              </div>
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[24px]  p-2  hover:bg-white/40">
                <a href="https://www.instagram.com/_graphikx">
                  <FaFigma />
                </a>
              </div>
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[40px]  p-2 hover:bg-white/40 ">
                <a href="https://www.instagram.com/_graphikx">
                  <FaBehance />
                </a>
              </div>
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[40px]  p-2 hover:bg-white/40">
                <a href="https://www.instagram.com/_graphikx">
                  <FaDribbble />
                </a>
              </div>
              <div className="text-white hover:text-navy text-[12px] sm:text-[20px] ml-2 rounded-[24px]  p-2  hover:bg-white/40 ">
                <a href="https://www.instagram.com/_graphikx">
                  <FaChrome />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center item-center text-center mx-auto mt-4">
            <p className="text-[12px] sm:text-[14px] text-white/60">
              © {new Date().getFullYear()} <a href="/">Graphikx India.</a>{" "}
              <span>
                All rights reserved. | Privacy Policy | Terms of Services
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
