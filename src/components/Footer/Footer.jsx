import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logoImg from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="bg-black text-white py-10 md:px-10 lg:px-10 p-3">
      <div className="flex justify-between items-center border-b border-b-[#E5E7EB] pb-5">
        <div className="flex items-center gap-1">
          <img className="w-10" src={logoImg} alt="logo" />
          <span>HERO.IO</span>
        </div>
        <div className="space-y-2">
          <h1>Social Links</h1>
          <div className="flex items-center gap-2">
            <FaXTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-4">Copyright © 2025 - All right reserved</h1>
    </div>
  );
};

export default Footer;
