import React from "react";
import Typed from "react-typed";
function Banner() {
  return (
    <div className="bg-[#2699fb] py-[100px] w-full text-center font-bold">
      <div className=" text-xl md:text-3xl  max-w-[1240px] mx-auto text-black">
        Hack with us
      </div>
      <h1 className=" text-[#00df9a] text-4xl md:text-7xl">Grow with us.</h1>
      <div className=" text-xl md:text-3xl text-white mt-4 ">
        Learn
        <Typed className="pl-[4px]"
        strings={["Cyber Security","Ethical Hacking","Penetration Testing"]} typeSpeed={100} backSpeed={50} loop={true} />
      </div>
      <button className='bg-black text-white rounded-md p-3 px-4 mt-3 hover:scale-110'>Get Started</button>
    </div>
  );
}

export default Banner;
