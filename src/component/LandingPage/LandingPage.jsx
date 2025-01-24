import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TypeWriter from "../Common/TypeWriter";

const LandingPage = () => {
  const [audio] = useState(new Audio("/intro-speech.mp3"));
  let navigate = useNavigate();
  const [clickedSkip, setClickSkip] = useState(false);

  const handleClick = () => {
    setClickSkip(!clickedSkip);
  };
  const text = "In the end of the 5th century before our time the first jewels were brought to Europe. Since then many have tried to recreate something similar in value and in beauty. Some have achieved however many have failed because of their lack of knowledge time or other resources. To this day jewels are thought to be one of the most precious gems on earth. Although we don't create jewels, we do imagine ourselves as jewelers. Just from a different angle.";
  return (
    <div className="h-screen w-screen p-10 flex flex-col justify-center items-start gap-4 bg-black">
      <div className="text-white flex justify-start">
        <img src="/LandingLogo.png" className="h-40 w-40"></img>
      </div>
      <TypeWriter text={text} speed={69} audio={audio} action={clickedSkip} from={"Landing"}/>
      <div className="flex gap-5 p-5 text-white justify-start">
        <button onClick={handleClick}> Skip our Story ! </button>
      </div>
    </div>
  );
};

export default LandingPage;
