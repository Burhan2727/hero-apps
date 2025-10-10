import React, { useEffect, useState } from "react";
import { getFromLocaleStorage } from "../../utilities/localeStorage";
import InstallationsDisplay from "../InstallationsDisplay/InstallationsDisplay";

const Installation = () => {
  const [installApps, setInsTallApps] = useState([]);
  useEffect(() => {
    const savedInsTallApp = getFromLocaleStorage();
    setInsTallApps(savedInsTallApp);
  }, []);
  const [sortState, setSortState] = useState("none");
  const sortedApps = (() => {
    if (sortState === "downloads-asc") {
      return [...installApps].sort(
        (a, b) => parseInt(a.downloads) - parseInt(b.downloads)
      );
    } else if (sortState === "downloads-desc") {
      return [...installApps].sort(
        (a, b) => parseInt(b.downloads) - parseInt(a.downloads)
      );
    } else {
      return installApps;
    }
  })();
  return (
    <div className="bg-[#F5F5F5] py-20">
      <h1 className="text-center font-bold md:text-5xl lg:text-5xl text-3xl mb-5">
        Your Installed Apps
      </h1>
      <p className="text-center text-[#627382] md:text-xl lg:text-xl mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="flex flex-col md:flex-row lg:flex-row md:items-center lg:items-center justify-between gap-4 px-3">
        <p className="text-2xl font-semibold">({sortedApps.length}) Apps Found</p>
        <div>
          <select value={sortState} className="select" onChange={e => setSortState(e.target.value)}>
            <option value="none">Sort By Downloads</option>
            <option value="downloads-asc">Low-&gt;High</option>
            <option value="downloads-desc">High-&gt;Low</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center my-5">
        {!sortedApps.length && <p className="text-3xl font-medium">No Installed Apps</p>}
      </div>
      <div className="">
        {sortedApps.map((app) => (
          <InstallationsDisplay
            key={app.id}
            app={app}
            setInsTallApps={setInsTallApps}
          />
        ))}
      </div>
    </div>
  );
};

export default Installation;
