import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TypeWriter = ({ text, speed, audio, action, from }) => {
  const [displayedText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    if (action) {
      console.log("Action: ", action);
      audio.pause();
      audio.currentTime = 0;
      navigate("/home");
      return;
    }
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
        console.log("Index: ", index);
        if (index < text.length - 1) {
          console.log("text: ", text.length - 1);
          audio.play();
        } else {
          audio.pause();
          audio.currentTime = 0;
          from === "Landing" ? navigate("/home") : null;
        }
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed, action, audio, navigate]);

  return (
    <div className="text-xl p-5 font-mono text-gray-80 text-white">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypeWriter;
