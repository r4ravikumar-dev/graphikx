import React from "react";
import Hero from "../elements/Hero.jsx";

function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
      </div>
      <div className="bg-[#080b17] pt-4">
        <div className="flex flex-wrap items-center mx-auto max-w-screen-lg">
          <div className="flex flex-wrap justify-center mx-auto mt-10 mb-10">
            <h1 className="text-white text-4xl font-ubuntu font-bold">
              Welcome
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
