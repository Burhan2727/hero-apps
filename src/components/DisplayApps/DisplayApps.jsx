import React from "react";
import downLoadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
const DisplayApps = ({ singleApp }) => {
  const { companyName, image, title, ratingAvg, downloads } = singleApp;
  console.log(singleApp);
  return (
    <div className="card bg-base-100 shadow-sm hover:scale-105 transition-all">
      <figure>
        <img src={image} alt={companyName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <div className="text-[#00D390] flex items-center gap-1 font-medium">
            <img className="w-3" src={downLoadIcon} alt="" />
            {downloads}
          </div>
          <div className="flex items-center gap-1">
            <img className="w-4" src={ratingIcon} alt="ratingIcon" />
            <p className="text-[#FF8811]">{ratingAvg}</p></div>
        </div>
      </div>
    </div>
  );
};

export default DisplayApps;
