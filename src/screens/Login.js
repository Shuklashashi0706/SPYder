import React from 'react'

function Login() {
  return (
    <div className='bg-[#2699fb]  flex items-center justify-center h-screen'>
        <div className='max-w-[60%] mx-auto flex'>
            <div className=' bg-[#097ad6] shadow-lg h-[500px]  rounded-l-[10px] flex flex-col items-center p-10'>
                <p className='font-semibold text-2xl text-white mt-[120px] mb-2 '>Nice to see you again</p>
                <p className='font-bold text-white text-5xl mb-2 '>WELCOME BACK</p>
                <div className='border border-white bg-white w-[40%] h-[5px] rounded-3xl mt-2 mb-2'></div>
                <p className=' text-center text-white font-semibold '>It is a long established fact that a reader will be <br/>distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className=' bg-[#e6e7e9] shadow-lg h-[500px] flex flex-col items-center
            rounded-r-[10px] p-10'>
                <p className='font-bold text-5xl mt-[70px] mb-1'>Login Account</p>
                <div className='border border-black bg-black w-[40%] h-[5px] rounded-3xl mt-2 mb-2 mb-8'></div>
                <p className='font-semibold text-center mb-4 ' >It is a long established fact that a reader will be distracted by <br/>the readable content of a page when looking at its layout.</p>
                <input type='text' placeholder='Email id' className='border border-black rounded-md mb-2 p-2 w-[80%]'></input>
                <input type='passowrd' placeholder='Password' className='border border-black rounded-md p-2 w-[80%]'></input>
                <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[40%] rounded-lg mt-4">
            Login
          </button>
            </div>
        </div>
    </div>
  )
}

export default Login