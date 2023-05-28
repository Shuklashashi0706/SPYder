import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div className="bg-[#2699fb] p-[100px] ">
      <div className="max-w-1240px mx-auto  p-[50px] flex">
        <div>
          <p className="font-bold text-6xl">SPYder</p>
          <p className="text-white font-semibold text-justify ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
            dolore? Corrupti accusamus delectus nihil dolore quibusdam sequi{" "}
            <br />
            atque voluptatem esse, autem natus voluptas officia aut quaerat nisi
            sapiente praesentium repellat?
          </p>
          <div className="flex text-3xl ">
            <IoLogoFacebook className="hover:scale-105 hover:text-white" />
            <AiFillInstagram className="hover:scale-105 hover:text-white" />
            <FaTwitterSquare className="hover:scale-105 hover:text-white" />
            <BsGithub className="hover:scale-105 hover:text-white" />
          </div>
        </div>
        <div className="p-3  ml-[650px] ">
          <div className=" inline-block text-left p-3">
            <p className="font-bold text-black">Solutions</p>
            <p className="font-semibold text-white">Analytics</p>
            <p className="font-semibold text-white">Commence</p>
            <p className="font-semibold text-white">Insights</p>
          </div>
          <div className=" inline-block p-3 text-left ">
            <p className="font-bold text-black">Support</p>
            <p className="font-semibold text-white">Analytics</p>
            <p className="font-semibold text-white">Commence</p>
            <p className="font-semibold text-white">Insights</p>
          </div>
          <div className=" inline-block p-3 text-left ">
            <p className="font-bold text-black">Company</p>
            <p className="font-semibold text-white">Analytics</p>
            <p className="font-semibold text-white">Commence</p>
            <p className="font-semibold text-white">Insights</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
