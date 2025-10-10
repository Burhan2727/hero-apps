import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import heroImg from "../../assets/hero.png"
const Banner = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] md:pt-10 lg:pt-10 pt-5">
        <div className="text-center">
          <h2 className="font-black md:text-6xl lg:text-6xl text-3xl mb-4">We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps</h2>
          <p className="text-[#627382] text-md max-w-[600px] mx-auto">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div className="flex gap-4 justify-center my-10">
            <a href="https://play.google.com/store/games?device=windows&pli=1" target="_blank" className="btn btn-outline text-xl font-semibold"><FaGooglePlay className="text-[#47BCFF]" /> Google Play</a>
            <a href="https://www.apple.com/app-store/" target="_blank"className="btn btn-outline text-xl font-semibold"><FaAppStore className="text-[#00BFFC]" /> App Store</a>
        </div>
        <div className="flex justify-center">
            <img src={heroImg} alt="heroImage" />
        </div>
      </div>
      {/* counter section */}
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-80 w-full text-white">
        <h1 className="font-bold md:text-4xl lg:text-4xl text-3xl text-white text-center py-10">Trusted by Millions, Built for You</h1>
        <div className="flex justify-center md:gap-20 lg:gap-20 gap-3 px-3">
            <div className="space-y-2">
                <p className="text-sm">Total Downloads</p>
                <h1 className="font-extrabold md:text-6xl lg:text-6xl text-3xl">29.6M</h1>
                <p className="text-sm">46% more than last month</p>
            </div>
            <div className="space-y-2">
                <p className="text-sm">Total Reviews</p>
                <h1 className="font-extrabold md:text-6xl lg:text-6xl text-3xl">29.6M</h1>
                <p className="text-sm">21% more than last month</p>
            </div>
            <div className="space-y-2">
                <p className="text-sm">Active Apps</p>
                <h1 className="font-extrabold md:text-6xl lg:text-6xl text-3xl">29.6M</h1>
                <p className="text-sm">31 more will Launch</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
