import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TypeWriter from '../Common/TypeWriter';

const MainLandingPage = () => {
  let navigate = useNavigate();

  const handleClick = (ans)=>{
    if(ans === "yes"){
        navigate("/start");
    }else{
        navigate("/home");
    }
  };
  const text = "Hello, Welcome To ProjectX!";
  return (
    <div className='h-screen w-screen flex flex-col justify-center p-6 gap-5 bg-black'>
      <div className='text-white flex justify-start flex-col gap-6 text-xl font-thin'>
        <TypeWriter text={text} speed={100} from={"MainPage"}/>
        <h2 className='p-4'>Would you like to experience the website with sound?</h2>
      </div>
        <div className='flex gap-5 p-4 text-white justify-start'>
            <button onClick={()=>handleClick("yes")}>Yes Please!</button>
            <button onClick={()=>handleClick("no")}>No</button>
        </div>
    </div>
  )
}

export default MainLandingPage