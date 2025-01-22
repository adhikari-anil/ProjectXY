import React from 'react'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  let navigate = useNavigate();

  const handleClick = ()=>{
    navigate("/home");
  };
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
        <div className='flex gap-5'>
            <button onClick={handleClick}>Yes</button>
            <button>No</button>
        </div>
    </div>
  )
}

export default LandingPage