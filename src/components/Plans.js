import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import {FaNetworkWired} from "react-icons/fa";
import {SiHackaday} from "react-icons/si";
function Plans() {
  return (
    <div className="py-[10px] md:py-[100px]">
      <div className="max-w-[1600px] gap-3  mx-auto md:grid grid-cols-3">
        <div className="hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md  flex flex-col  text-center items-center">
          <AiFillDollarCircle className="text-[120px] mt-2" />
          <p className="font-bold text-3xl mt-5">Web development</p>
          <p className="font-semibold text-4xl mt-4">$149</p>
          <p className="font-semibold mt-3">Lorem ipsum is simply</p>
          <p className="font-semibold">
            Lorem ipsum is simply active and not working
          </p>
          <p className="font-semibold">Lorem ipsum is great</p>
          <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[50%] rounded-lg mt-4">
            Start Trial
          </button>
        </div>
        <div className="mt-[5px] hover:bg-gray-100 shadow-2xl border h-[500px] hover:scale-105 duration-500 rounded-md">
        <div className="hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md  flex flex-col  text-center items-center">
          <SiHackaday className="text-[120px] mt-2" />
          <p className="font-bold text-3xl mt-5">Ethical Hacking</p>
          <p className="font-semibold text-4xl mt-4">$350</p>
          <p className="font-semibold mt-3">Lorem ipsum is simply</p>
          <p className="font-semibold">
            Lorem ipsum is simply active and not working
          </p>
          <p className="font-semibold">Lorem ipsum is great</p>
          <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[50%] rounded-lg mt-4">
            Start Trial
          </button>
        </div>
        </div>
        <div className="mt-[5px] hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md">
        <div className="hover:bg-gray-100 shadow-2xl border  h-[500px] hover:scale-105 duration-500 rounded-md  flex flex-col  text-center items-center">
          <FaNetworkWired className="text-[120px] mt-2" />
          <p className="font-bold text-3xl mt-5">Digital Marketing</p>
          <p className="font-semibold text-4xl mt-4">$250</p>
          <p className="font-semibold mt-3">Lorem ipsum is simply</p>
          <p className="font-semibold">
            Lorem ipsum is simply active and not working
          </p>
          <p className="font-semibold">Lorem ipsum is great</p>
          <button className="bg-[#00df9a] text-black font-semibold hover:bg-black hover:text-[#00df9a] p-2 w-[50%] rounded-lg mt-4">
            Start Trial
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Plans;
