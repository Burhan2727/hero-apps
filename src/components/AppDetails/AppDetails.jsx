import React, { useEffect, useState } from "react";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useApps from "../hooks/useApps";
import { useParams } from "react-router";
import downLoadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png"
import { toast } from "react-toastify";
import { addItemToLocaleStorage, getFromLocaleStorage } from "../../utilities/localeStorage";
import NoAppFound from "../NoAppFound/NoAppFound";
const AppDetails = () => {
  const [isInstall, setIsInstall] = useState(false)
  const [getApp, setGetApp] = useState([])
  
  const { appsData } = useApps();
  const paramsId = useParams();
  useEffect(()=>{
    const getInstallAppData = getFromLocaleStorage();
    setGetApp(getInstallAppData)
    getInstallAppData.forEach(app=>{
      if(app.id === Number(paramsId.id)){
        setIsInstall(true)
      }
    })
  }, [paramsId.id])
  const findApp = appsData.find((app) => app.id === Number(paramsId.id));
  if (!findApp) return <NoAppFound/>;
  const {
    companyName,
    image,
    title,
    ratingAvg,
    downloads,
    reviews,
    size,
    ratings,
    description

  } = findApp;
  const handleInstallBtn = ()=>{
    addItemToLocaleStorage(findApp)
    setIsInstall(true)
    toast("successfully Installed");
    console.log("clicked")
  }
  return (
    <div className="md:px-10 lg:px-10 px-3">
        <div className=" bg-[#F5F5F5] shadow-sm my-10 p-2">
      <div className="flex flex-col md:flex-row lg:flex-row  gap-5">
        <div>
          <img className="md:h-65 lg:h-65  h-45 w-full object-cover rounded-xl" src={image} alt={title} />
        </div>
        <div>
          <h2 className="font-bold text-3xl">{title}</h2>
          <p className="border-b border-b-gray-300 py-2"><span className="text-xl text-[#627382]">Developed by:</span> <span className="text-[#632EE3] font-semibold text-xl">{companyName}</span></p>
          <div className="flex items-center md:gap-10 lg:gap-10 gap-3 my-5">
            <div>
              <img className="md:w-10 lg:w-10 w-5" src={downLoadIcon} alt="" />
              <p className="text-sm text-[#001931]">Downloads</p>
              <p className="font-extrabold md:text-4xl lg:text-4xl">{downloads}</p>
            </div>
            <div>
              <img className="md:w-10 lg:w-10 w-5" src={ratingIcon} alt="ratingIcon" />
              <p className="text-sm text-[#001931]">Average Ratings</p>
              <p className="font-extrabold md:text-4xl lg:text-4xl">{ratingAvg}</p>
            </div>
            <div>
                <img className="md:w-10 lg:w-10 w-5" src={reviewsIcon} alt="" />
                <p>Total Reviews</p>
                <p className="font-extrabold md:text-4xl lg:text-4xl">{reviews}k</p>
            </div>
          </div>
          <button disabled={isInstall? true : false} onClick={handleInstallBtn} className="btn bg-[#00D390] text-white font-semibold text-xl">{isInstall ? "Installed" : `Install Now (${size}MB)`}</button>
        </div>
      </div>
    </div>
    {/* bar chart */}
    <div>
        <h1 className="text-2xl font-semibold text-[#001931] mb-3">Rating</h1>
        <div className="bg-base-100 border rounded-xl p-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>

              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
    </div>
    {/* Details */}
    <div>
        <h1 className="text-2xl font-semibold text-[#001931] my-3">Description</h1>
        <p>{description}</p>
    </div>
    </div>
  );
};

export default AppDetails;
