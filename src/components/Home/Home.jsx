import React from "react";
import useApps from "../hooks/useApps";
import DisplayApps from "../DisplayApps/DisplayApps";
import { Link } from "react-router";
import Banner from "../Banner/Banner";

const Home = () => {
  const { appsData, loading, error } = useApps();
  const displayAppsData = appsData.slice(0, 8);
  // console.log(displayAppsData)
  return (
    <div>
      <Banner/>
      <h1 className="font-bold text-5xl text-center my-5">Trending Apps</h1>
      <p className="text-xl text-[#627382] text-center mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
        {displayAppsData.map((singleApp) => (
          <DisplayApps key={singleApp.id} singleApp={singleApp} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/apps">
          <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-2 px-10 rounded-sm cursor-pointer text-white font-semibold my-5">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
