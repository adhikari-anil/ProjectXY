import React from "react";
import { NavBarItems } from "../../../../constant/MenuItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-30 flex pt-6 pb-6 pl-20 pr-20 justify-between">
      <div className="flex justify-center items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlLLxIkE9p5IniBVIupwaILQg4Ozd90Z6KA&s"
          alt="WEBY"
          className="h-20 w-40"
        />
      </div>
      <div className="flex justify-center items-center p-2 gap-4">
        {NavBarItems.map((item, index) => (
          <Link to={item.path} key={index}>
            <div className="flex justify-center items-center rounded-sm hover:bg-slate-800 text-yellow-50 font-thin w-40 p-2">
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center h-16 w-40 border-2 text-white rounded-lg">
        <button>Contact Button</button>
      </div>
    </div>
  );
};

export default Navbar;
