import React, { useEffect, useState } from "react";
import useApps from "../hooks/useApps";
import { useParams } from "react-router";
import { getFromLocaleStorage } from "../../utilities/localeStorage";
import InstallationsDisplay from "../InstallationsDisplay/InstallationsDisplay";

const Installation = () => {
  const [installApps, setInsTallApps] = useState([]);
  useEffect(() => {
    const savedInsTallApp = getFromLocaleStorage();
    setInsTallApps(savedInsTallApp);
  }, []);
  //   const { appsData, loading, error } = useApps();
  //   const paramsId = useParams();
  //   const findInstallData = appsData.find(
  //     (app) => app.id === Number(paramsId.id)
  //   );
  //   if (!findInstallData) return <p>Loading...</p>;
  //   const {
  //     id,
  //     companyName,
  //     image,
  //     title,
  //     ratingAvg,
  //     downloads,
  //     reviews,
  //     size,
  //     ratings,
  //     description,
  //   } = findInstallData;
  return (
    <div className="bg-[#F5F5F5] py-20">
        <h1 className="text-center font-bold text-5xl mb-5">Your Installed Apps</h1>
        <p className="text-center text-[#627382] text-xl mb-5">Explore All Trending Apps on the Market developed by us</p>
        <div>
            <p>1 Apps Found</p>
            <div>
                <label>
                    <select>
                        <option value="none"></option>
                    </select>
                </label>
            </div>
        </div>
      <div className="">
        {installApps.map(app => <InstallationsDisplay key={app.id} app={app} setInsTallApps={setInsTallApps}/>)}
      </div>
    </div>
  );
};

export default Installation;
