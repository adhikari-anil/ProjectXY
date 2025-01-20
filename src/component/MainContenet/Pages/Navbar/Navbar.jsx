import React from "react";
import { NavBarItems } from "../../../../constant/MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-2 flex lg:pt-6 lg:pb-6 lg:pl-20 lg:pr-20 gap-2 justify-between h-fit">
      <div className="flex justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlLLxIkE9p5IniBVIupwaILQg4Ozd90Z6KA&s"
          alt="WEBY"
          className="h-20 w-40"
        />
      </div>
      <div className="hidden justify-center w-full items-center text-black p-2 gap-4 lg:flex">
        {NavBarItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="flex-auto justify-center items-center rounded-sm hover:bg-slate-800 text-yellow-50 font-thin w-24 gap-4 text-center p-2">
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden justify-center items-center w-40 border-2 text-white rounded-lg lg:flex">
        <button>Contact Button</button>
      </div>
    </div>
  );
};

export default Navbar;
