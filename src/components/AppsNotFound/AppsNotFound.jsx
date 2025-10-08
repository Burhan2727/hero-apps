import React from "react";
import { Link } from "react-router";

const AppsNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-7xl text-[#627382] my-7">No Apps Found</h1>
      <Link to="/">
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-10 rounded-sm cursor-pointer text-white font-semibold my-5">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default AppsNotFound;
