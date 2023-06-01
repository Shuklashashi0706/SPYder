import React, { useState } from 'react'
import {HiMenuAlt1} from "react-icons/hi";
import {AiOutlineCloseCircle} from "react-icons/ai"
import { Link } from 'react-router-dom';
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
                <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/'>Home</Link></li>
                <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/courses'>Courses</Link></li>
                <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/cart'>Cart</Link></li>
                <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/about'>About</Link></li>
                <li className=' hover:scale-110 duration-300 hover:underline'><Link to='/login'>Login</Link></li>
            </ul>
            {/* Responsive Menu */}
            <ul className={`duration-300 md:hidden w-full h-screen text-white fixed left-[-100%] top-[67px] bg-black px-2
            ${toggle? 'left-[0]':'left-[-100%]'}`}>
                <li className='p-4'><Link to='/'>Home</Link></li>
                <li className='p-4'><Link to='/courses'>Courses</Link></li>
                <li className='p-4'><Link to='/about'>About</Link></li>
                <li className='p-4'><Link to='/login'>Login</Link></li>
            </ul>
        </div>

    </div>
  )
}

export default Header