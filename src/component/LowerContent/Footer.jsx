import React from "react";
import { Link } from "react-router-dom";
import { IoVolumeHighOutline } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const items = [
  {
    src: "/public/instagram.svg",
    to: "https://www.instagram.com/anneeladhikari/",
    name: "Facebook",
  },
  {
    src: "/public/facebook.svg",
    to: "https://www.facebook.com/profile.php?id=100068405876847",
    name: "Instagram",
  },
  {
    src: "/public/linkedin.svg",
    to: "https://www.linkedin.com/in/anil-adhikari-833973298/",
    name: "Linkedin",
  },
];

const Footer = () => {
  return (
    <div className="text-white p-16 h-16 fixed bottom-5 left-0 right-0 z-30">
      <div className="flex justify-between items-center h-10">
        <div className="flex gap-6 font-sans text-lg">
          <h3> © 2024 All Rights Reserved </h3>
          <div className="flex gap-3 justify-center items-center">
            Sound:{" "}
            <img src="/public/volume.svg" alt="volume" className="h-5 w-5" />
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
