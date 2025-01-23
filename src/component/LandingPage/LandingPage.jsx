import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  let navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/home");
  };
  return (
    <div className='h-screen w-screen flex flex-col justify-start gap-5 bg-black'>
      <div className='text-white flex justify-start'>
        <img src='/public/LandingLogo.png'></img>
      </div>
        <div className='flex gap-5 text-white justify-start'>
            <button onClick={handleClick}>Yes</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default LandingPage