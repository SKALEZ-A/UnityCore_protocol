"use client";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import Avatar from "@mui/material/Avatar";
import EarningInfo from "@components/EarningInfo";
import TotalMarketSize from "@marketSize/TotalMarketSize";
import TotalAvailable from "@marketSize/TotalAvailable";
import TotalBorrowedBalance from "@marketSize/TotalBorrowedBalance";

import AvailableLiquidity from "@marketSize/AvailableLiquidity";
import TotalReserves from "@marketSize/TotalReserves";
import TotalBorrower from "@marketSize/TotalBorrower";
import TotalDepositors from "@marketSize/TotalDepositors";
import TotalMarketDashboard from "@marketSize/TotalMarketDashboard";
import ProgressBar from "@components/ProgressBar";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("Polygon");
  const [isOpen, setIsOpen] = useState(false);
  const [showmenu, setShowMenu] = useState(false);

  const options = [
    { value: "Polygon", label: "Polygon", image: "/image.png" },
    { value: "Core", label: "Core", image: "/coredao.png" },
    { value: "Fantom", label: "Fantom", image: "/unitycore.png" },
  ];

  const handleOptionSelect = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const [effectActive, setEffectActive] = useState(false);

  const handleEffectChange = (isActive) => {
    setEffectActive(isActive);
  };

  const inputStyle = {
    backgroundColor: "#ffffff",
    backgroundPosition: "10px center",
    paddingLeft: "35px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    /* Add any other styles you want for the input */
  };

  const iconStyle = {
    content:
      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='%23353e48' viewBox='0 0 1024 1024'><path d='M964.8 889.6l-206.4-204.8c51.2-61.44 86.4-145.92 86.4-235.52 0-194.56-153.6-353.28-345.6-353.28C230.4 96 76.8 254.72 76.8 448s153.6 352 345.6 352c89.6 0 174.08-35.2 235.52-89.6l204.8 204.8c19.2 19.2 51.2 19.2 70.4 0s19.2-51.2 0-70.4zM422.4 678.4C313.6 678.4 224 588.8 224 480s89.6-198.4 198.4-198.4c108.8 0 198.4 89.6 198.4 198.4s-89.6 198.4-198.4 198.4z'/></svg>\")",
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
  };

  return (
    <div className="flex mob_hid flex-col">
      <div className="mainw p-8 flex flex-col">
        <div className=" flex mainbg h-full w-full flex-row gap-10 justify-between">
          <div className="relative">
            <input
              className="w-[718px] h-[50px]  outline-none bg-white input_style search-input"
              placeholder="Search for tokens, pools..."
            />
            {/* <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 search-icon" /> */}
          </div>

          <div className="flex flex-row gap-10">
            <div className="relative inline-block w-[100px]">
              <div
                className="w-[130px] h-[50px] border border-gray-300 justify-center rounded outline-none bg-white input_style text-base cursor-pointer flex items-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <img
                  src={
                    options.find((option) => option.value === selectedOption)
                      ?.image
                  }
                  alt={selectedOption}
                  className="h-4 w-4 mr-2"
                />
                {selectedOption}
                <FiChevronDown
                  className={`ml-2 transition-transform ${
                    isOpen ? "transform rotate-180" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <div className="absolute w-[130px] border border-gray-300 bg-white rounded-b mt-1 z-20">
                  {options.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center py-2 px-3 cursor-pointer hover:bg-gray-100"
                      onClick={() => handleOptionSelect(option.value)}
                    >
                      <img
                        src={option.image}
                        alt={option.value}
                        className="h-4 w-4 mr-2"
                      />
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="h-[50px] w-[180px] gap-2 flex flex-row justify-center outline-none items-center bg-white input_style">
              <Avatar
                style={{ height: "20px", width: "20px" }}
                src="/Ellipse.png"
              />
              <p style={{ fontWeight: "700" }}>0xFIuh...F738</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between  items-center ">
          <TotalMarketSize />
          <TotalAvailable />
          <TotalBorrowedBalance />
        </div>{" "}
        <br />
        <br />
        <div className="flex flex-row justify-between  items-center ">
          <AvailableLiquidity />
          <TotalReserves />
          <TotalBorrower />
          <TotalDepositors />
        </div>{" "}
        <br />
        {/* <ProgressBar /> <br /> */}
        <TotalMarketDashboard />
      </div>

      {/* Mobile Screen */}
    </div>
  );
}
