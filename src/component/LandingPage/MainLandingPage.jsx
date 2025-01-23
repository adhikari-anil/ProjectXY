import React from 'react'
import { useNavigate } from 'react-router-dom';

const MainLandingPage = () => {
  let navigate = useNavigate();

  const handleClick = (ans)=>{
    if(ans === "yes"){
        navigate("/start");
    }else{
        navigate("/home");
    }
  };
  return (
    <div className='h-screen w-screen flex flex-col justify-center p-6 gap-5 bg-black'>
      <div className='text-white flex justify-start flex-col gap-6 text-xl font-thin'>
        <h2>Hello, Welcome To ProjectX!</h2>
        <h2>Would you like to experience the website with sound?</h2>
      </div>
        <div className='flex gap-5 text-white justify-start'>
            <button onClick={()=>handleClick("yes")}>Yes Please!</button>
            <button onClick={()=>handleClick("no")}>No</button>
        </div>
    </div>
  )
}

export default MainLandingPage