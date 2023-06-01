import React from 'react'
import hack from '../assets/images/ethical-hacking.png'
function Experts() {
  return (
    <div className=' max-w-[1240px] mx-auto  md:my-5  md:grid grid-cols-2'>
        <div className='border   col-span-1'>
          <img className='object-fill rounded' src={hack} alt=""></img>
        </div>
        <div className=' p-5 md:p-0 ml-[20px] col-span-1 flex flex-col flex-wrap items-center justify-center'>
          <h2 className='font-bold text-2xl text-[#00df9a] m-2'>Learn From Experts</h2>
          <p className='m-2 text-black font-semibold text-justify md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corporis delectus, facilis voluptatum quibusdam laudantium voluptas repellat quos. Quibusdam deserunt dignissimos placeat id explicabo quisquam voluptatum quaerat minus cum eligendi.</p> 
        <button className='w-[30%] bg-black text-white hover:scale-110 rounded-md p-3 m-2 '>Get Started</button>
        </div>
    </div>
  )
}

export default Experts