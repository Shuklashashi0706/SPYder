import React from "react";
import Typed from "react-typed";
function Banner() {
  return (
    <div className="bg-[#2699fb] py-[100px] w-full text-center font-bold">
      <div className=" text-xl md:text-3xl  max-w-[1240px] mx-auto text-black">
        Hack with us
      </div>
      <h1 className=" text-white text-4xl md:text-7xl">Grow with us.</h1>
      <div className=" text-xl md:text-3xl text-white mt-4 ">
        Learn
        <Typed className="pl-[4px]"
        strings={["Cyber Security","Ethical Hacking","Penetration Testing"]} typeSpeed={100} backSpeed={50} loop={true} />
      </div>
    </div>
  );
}

export default Banner;
