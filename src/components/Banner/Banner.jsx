import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import heroImg from "../../assets/hero.png"
const Banner = () => {
  return (
    <div className="bg-[#f3efef] ">
      <div>
        <div>
          <h2 className="font-black text-[72px]">We Build <br /> <span className="text-[#632EE3]">Productive</span> Apps</h2>
          <p className="text-[#627382] text-xl">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        </div>
        <div>
            <button className="btn btn-outline text-xl font-semibold"><FaGooglePlay className="text-[#47BCFF]" /> Google Play</button>
            <button className="btn btn-outline text-xl font-semibold"><FaAppStore className="text-[#00BFFC]" /> App Store</button>
        </div>
        <div>
            <img src={heroImg} alt="heroImage" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
