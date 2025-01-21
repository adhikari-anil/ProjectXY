import React from "react";

const Home = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6">
      <div className="flex flex-col justify-center items-center gap-8 animate-fadeIn">
        <div className="flex flex-col gap-5">
          <h1 className="font-serif text-6xl text-center sm:text-5xl lg:text-6xl text-white leading-tight">
            We Make Creative And
            <span className="block font-sans text-3xl sm:text-4xl lg:text-5xl text-red-400 mt-2">
              Sales Generating Website
            </span>
          </h1>

          <p className="font-light text-lg sm:text-xl text-white/90 max-w-xl text-center">
            Discover the key improvements your site needs to drive more sales.<span>Take the first step toward better results today!</span>
          </p>
        </div>

        <button
          className="group relative w-64 h-16 border-2 border-white/80 rounded-lg text-white
          transition-all duration-300 hover:bg-white/10 hover:border-red-400 overflow-hidden"
        >
          <span className="relative z-10 font-medium text-lg">
            Consult with Sales Expert
          </span>
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-400/20 to-purple-500/20
            transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"
          ></div>
        </button>
      </div>
    </div>
  );
};

export default Home;