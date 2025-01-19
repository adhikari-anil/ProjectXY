import React, { useState, useEffect } from "react";

const SlidingBackground = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Add your image URLs here
  const backgroundImages = [
    "https://images.unsplash.com/photo-1622357102666-c9f68f951fa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjgyfHxkYXJrJTIwYmx1ZXxlbnwwfHwwfHx8MA%3D%3D", // Replace with your actual image URLs
    "https://media.istockphoto.com/id/1368928539/photo/panoramic-view-of-lake-of-misurina.jpg?s=612x612&w=0&k=20&c=_ODBOYBPAHS1GHpmDF3i_Hy9CtyY9Z0K5Mwl3tHEMhE=",
    "https://images.unsplash.com/photo-1641215728345-385941727e25?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://media.istockphoto.com/id/1334646136/photo/typical-boats-the-water-at-lake-braies-in-the-dolomites-near-cortina-dampezzo.jpg?s=612x612&w=0&k=20&c=pJV9sC5cDa1Q0qPwbkkcaVoezRTGVzKaMx00-iQoFB0=",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full">
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: -1,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" /> {/* Optional overlay */}
    </div>
  );
};

export default SlidingBackground;