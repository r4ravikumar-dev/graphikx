import React from "react";
import background from "../../assets/illustation1.svg"

function Hero() {
  return (
    <>
      <div className="h-[91vh]">
      <img
        src={background}
        alt="Hero Background"
        className="w-full h-[100vh] object-cover object-center absolute -z-10 top-0 left-0 bg-darkBlue"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center ">
      <div class="w-full flex flex-wrap justify-center items-center text-[#F0F8FF] mx-auto max-w-screen-lg">
          <b class="font-playwrirte font-semibold text-[40px] lg:text-[120px] text-center leading-[135%]">
            <span>Designing your </span>
            <span class="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#007FFF,_#87CEFA)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Visualization
            </span>
            <span> into Reality</span>
          </b>
        </div>
        {/* <div class="flex justify-center mt-[-16px]">
          <b class="w-full text-[40px] sm:text-[72px] leading-[100%] inline-block font-ubuntu text-navy text-center">
            .
            <span class="mx-8 text-[48px] sm:text-[96px] leading-[100%] inline-block font-ubuntu text-navy text-center">
              .
            </span>
            .
          </b>
        </div> */}
      </div>
    </div>
    </>
  );
}

export default Hero;
