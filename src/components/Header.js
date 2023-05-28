import React, { useState } from 'react'
import {HiMenuAlt1} from "react-icons/hi";
import {AiOutlineCloseCircle} from "react-icons/ai"
function Header() {
    const [toggle,setToggle]=useState(false);
  return (
    // Main Body
    <div className="bg-[#2699fb] p-4">
        {/* Navbar */}
        <div className='max-w-1240px flex  justify-between items-center mx-auto'>
            {/* Logo */}
            <div className='font-bold text-3xl px-2 hover:scale-125'>
                SPYder
            </div>
            {/* Menu */}
            {
                toggle ?
            <AiOutlineCloseCircle  onClick={()=> setToggle(!toggle)}  className='text-white text-4xl md:hidden block'/>
                :
                <HiMenuAlt1 onClick={()=> setToggle(!toggle)} className='text-white text-4xl  md:hidden block'/>
            }
            
            <ul className='font-bold text-xl hidden md:flex text-white gap-x-5 px-2'>
                <li className=' hover:scale-110 duration-300 hover:underline'>Home</li>
                <li className=' hover:scale-110 duration-300 hover:underline'>Company</li>
                <li className=' hover:scale-110 duration-300 hover:underline'>Resources</li>
                <li className=' hover:scale-110 duration-300 hover:underline'>About</li>
                <li className=' hover:scale-110 duration-300 hover:underline'>Contact</li>
            </ul>
            {/* Responsive Menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed left-[-100%] top-[67px] bg-black px-2
            ${toggle? 'left-[0]':'left-[-100%]'}`}>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Header