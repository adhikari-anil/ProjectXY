import React from "react";

const items = [
  {
    id: 1,
    photo: "/creative.png",
    title: "Creative Website",
  },
  {
    id: 2,
    photo: "/visitor.png",
    title: "Convert Visitor",
  },
  {
    id: 3,
    photo: "/capital.png",
    title: "Increase Revenue",
  },
];

const Service = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6">
      <div className="flex flex-col justify-center items-center gap-8 animate-fadeIn">
        <div className="flex flex-col gap-5">
          <h1 className="font-serif text-6xl text-center sm:text-5xl lg:text-6xl text-white leading-tight">
            Turn Visitors into Paying Customers
          </h1>
          <p className="font-light w-full text-lg sm:text-xl text-white/90 text-center">
            Often, boring web design, monotonous content & bad story telling is the
            <span> culprit for a low conversion rate. </span>
          </p>
        </div>
        <div className="flex flex-row gap-5 justify-center items-center">
          {items.map((item, index) => (
            <div className="flex flex-col gap-3 items-center text-center" key={index}>
              <img src={item.photo} alt={item.title} className="h-16 w-16"/>
              <p className="text-white">{item.title}</p>
            </div>
          ))}
        </div>
        <button
          className="group relative w-64 h-16 border-2 border-white/80 rounded-lg text-white
          transition-all duration-300 hover:bg-white/10 hover:border-red-400 overflow-hidden"
        >
          <span className="relative z-10 font-medium text-lg">
            Get a Free Website Audit
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

export default Service;
