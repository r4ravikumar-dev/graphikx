import React from "react";
import Hero from "../elements/Hero.jsx";
import ContentAwaited from "../elements/ContentAwaited.jsx";

function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
      </div>
      <div className=" mt-24 mb-12">
        <div className="flex flex-wrap flex-col items-center mx-auto max-w-screen-lg">
          <div className="flex flex-wrap px-4 flex-col justify-center item-center text-white text-center">
            <h1 className="font-playball text-[40px] sm:text-[64px] text-darkBlue">
              Welcome
            </h1>
            <h2 className="mt-8 font-poppins font-semibold text-[20px] sm:text-[28px] underline">
              Crafting Intuitive, Engaging & User-Cantered Experiences
            </h2>
            <p className="mt-4 font-poppins font-light text-[14px] sm:text-[18px]">
              At Graphikx, we believe that great design starts with
              understanding the user. This space will soon showcase our journey,
              our skills, our dedication and our latest works in crafting
              intuitive, engaging, and user-cantered experiences. From research
              and wireframing to prototyping and user testing, each project
              highlights our meticulous approach to solving complex problems
              with elegant solutions. Stay tuned to explore our journey and see
              how we turn ideas into impactful designs that resonate with users
              and achieve business goals.
            </p>
            <div className="mt-8 mb-8">
              <button className="rounded-[8px] px-[24px] py-2 text-white font-poppins bg-darkBlue hover:bg-midBlue text-[12px] sm:text-[12px] focus:outline-none">
                <a href="/">learn more</a>
              </button>
            </div>
          </div>
          {/* <div
        class="flex flex-wrap  justify-center mx-auto mt-6 text-[12px] md:text-[16px] leading-[135%] font-medium font-poppins text-[#646464] text-center items-center"
      >
        <span class="w-full">
          <p class="m-0">
            Exciting News! Our UX Design Portfolio Website is Launching Soon.
          </p>
          <p class="m-0">
            Stay Tuned for Innovative Designs and User-Cantered Solutions
          </p>
        </span>
      </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
