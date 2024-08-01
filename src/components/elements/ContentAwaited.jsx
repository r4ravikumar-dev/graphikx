import React from "react";
import reload from "../../assets/contentAwaited.svg";

function ContentAwaited() {
  return (
    <>
      <div className="w-full h-[90vh] flex flex-wrap flex-col justify-center px-[12px]">
        <div className="flex justify-center">
          <img
            src={reload}
            alt="Content Awaited"
            width={120}
            height={120}
            className="object-cover mt-8 mb-2"
          />
        </div>
        <div className="font-poppins flex flex-wrap flex-col item-center justify-center text-center mt-12">
          <div className="text-[28px] font-semibold text-darkBlue flex flex-wrap justify-center ">
            Content Awaited
          </div>
          <div className=" mb-12 mt-2 text-[18px] text-lightBlue flex flex-wrap justify-center ">
            Please be patient something great is bring cooking and stay tuned
            for more updates...
          </div>
          <div>
            <button className="rounded-[20px] px-[24px] py-2 text-white font-poppins bg-darkBlue hover:bg-midBlue text-[12px] sm:text-[16px] focus:outline-none">
              <a href="/">Back to home</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentAwaited;
