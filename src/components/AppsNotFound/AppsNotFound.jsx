import React from "react";
import { Link } from "react-router";
import appErrorImg from "../../assets/App-Error.png"
const AppsNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <img className="w-50" src={appErrorImg} alt="" />
      <h1 className="text-4xl text-[#627382] my-7">OPPS! 404 No Apps Found</h1>
      <Link to="/">
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-10 rounded-sm cursor-pointer text-white font-semibold ">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default AppsNotFound;
