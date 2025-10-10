import React, { useEffect, useState } from "react";
import useApps from "../hooks/useApps";
import DisplayApps from "../DisplayApps/DisplayApps";
import AppsNotFound from "../AppsNotFound/AppsNotFound";
import Spinner from "../Spinner/Spinner";

const Apps = () => {
  const { appsData, loading, error } = useApps();
  const [inputValue, setInputValue] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const inputValueTrim = inputValue.trim().toLowerCase();
  const searchValueData = inputValueTrim
    ? appsData.filter((app) => app.title.toLowerCase().includes(inputValueTrim))
    : appsData;
  useEffect(() => {
    if (inputValue === "") return;
    setSearchLoading(true);
    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);
  
  return (
    <div>
      <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-[#001931] text-center mb-5">
        Our All Applications
      </h1>
      <p className="text-[#627382] text-xl text-center mb-5">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center p-3">
        <h1 className="font-semibold text-2xl">
          ({searchValueData.length}) Apps Found
        </h1>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              onChange={(e) => setInputValue(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {searchLoading && <Spinner />}
      </div>
      <div>
        {!searchValueData.length && <AppsNotFound/>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-3">
        {searchValueData.map((singleApp) => (
          <DisplayApps key={singleApp.id} singleApp={singleApp} />
        ))}
      </div>
    </div>
  );
};

export default Apps;
