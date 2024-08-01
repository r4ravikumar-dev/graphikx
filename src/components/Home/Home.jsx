import React from "react";
import Hero from "../elements/Hero.jsx";
import ContentAwaited from "../elements/ContentAwaited.jsx";

function Home() {
  return (
    <>
      <div className="w-full">
        <Hero />
      </div>
      <div className=" mt-8 mb-12">
        <div className="flex flex-wrap items-center mx-auto max-w-screen-lg">
          <ContentAwaited/>
        </div>
      </div>
    </>
  );
}

export default Home;
