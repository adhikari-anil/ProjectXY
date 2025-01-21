import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    src: "/instagram.svg",
    to: "https://www.instagram.com/anneeladhikari/",
    name: "Facebook",
  },
  {
    src: "/facebook.svg",
    to: "https://www.facebook.com/profile.php?id=100068405876847",
    name: "Instagram",
  },
  {
    src: "/linkedin.svg",
    to: "https://www.linkedin.com/in/anil-adhikari-833973298/",
    name: "Linkedin",
  },
];

const Footer = () => {
  const [clicked, setClick] = useState(true);
  const [audio] = useState(new Audio("/background.mp3"));

  const handleClick = () => {
    setClick(!clicked);
  };

  useEffect(() => {
    if (!clicked) {
      audio.play();
      audio.loop = true;
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [clicked, audio]);

  return (
    <div className="text-white p-2 fixed bottom-5 left-0 right-0 z-30 hidden lg:block">
      <div className="flex justify-between items-center h-10 p-10">
        <div className="flex gap-6 font-sans text-lg">
          <h3> © 2024 All Rights Reserved </h3>
          <div className="flex gap-3 justify-center items-center">
            Sound:
            {clicked === true ? (
              <img
                src="/volume1.svg"
                alt="volume"
                className="h-5 w-5 hover: cursor-pointer"
                onClick={handleClick}
              />
            ) : (
              <img
                src="/volume.svg"
                alt="volume"
                className="h-5 w-5 hover: cursor-pointer"
                onClick={handleClick}
              />
            )}
          </div>
        </div>
        <div className="flex gap-1">
          {items.map((item, index) => (
            <Link to={item.to} key={index}>
              <div className="p-1">
                <img src={item.src} alt={item.name} className="h-7 w-7" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
