import React, { useEffect, useState } from "react";

const TypeWriter = ({ text, speed }) => {
  const [displayedText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return (
    <div className="text-xl p-5 font-mono text-gray-80 text-white">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypeWriter;
