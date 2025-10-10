import React from 'react';
import downLoadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { toast } from "react-toastify";
import { getFromLocaleStorage, removeFromLocaleStorge, saveToLocaleStorage } from '../../utilities/localeStorage';
const InstallationsDisplay = ({app, setInsTallApps}) => {
    const {
      id,
      companyName,
      image,
      title,
      ratingAvg,
      downloads,
      reviews,
      size,
      ratings,
      description,
    } = app;
    const handleUnInstallBtn = (id)=>{
        removeFromLocaleStorge(id);
        setInsTallApps(prev => prev.filter(p => p.id !== id))
        toast("successfully Uninstalled");
    }
    return (
        <div className=" bg-white shadow-sm my-5 p-3 flex justify-between md:items-center lg:items-center  flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col md:flex-row lg:flex-row  gap-5">
          <div>
            <img
              className="h-30 w-full object-cover rounded-xl"
              src={image}
              alt={title}
            />
          </div>
          <div>
            <h2 className="font-medium text-xl">{title}</h2>
            <div className="flex items-center md:gap-10 lg:gap-10 gap-3 my-5">
              <div>
                <img className="w-5" src={downLoadIcon} alt="" />
                <p className="font-medium">{downloads}</p>
              </div>
              <div>
                <img className="w-5" src={ratingIcon} alt="ratingIcon" />
                <p className="font-medium">{ratingAvg}</p>
              </div>
              <div>
                <p className="text-[#627382] text-sm">{size}MB</p>
              </div>
            </div>
          </div>
        </div>
        <button onClick={()=>handleUnInstallBtn(id)} className="btn bg-[#00D390] text-white font-semibold text-xl">
          Uninstall
        </button>
      </div>
    );
};

export default InstallationsDisplay;