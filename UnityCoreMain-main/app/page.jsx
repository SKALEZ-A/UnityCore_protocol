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
import BorrowEarning from "@personal/BorrowEarning";
import SupplyEarning from "@personal/SupplyEarning";
import NetAPY from "@personal/NetAPY";
import Tab from "@components/Tab";
import ProgressBar from "@components/ProgressBar";
import MobEarningInfo from "@components/MobEarningInfo";
import BottomNavigation from "@components/BottomNavigation";
import DropdownMenu from "@components/DropdownMenu";

export default function Page() {
  const [selectedOption, setSelectedOption] = useState("Core");
  const [isOpen, setIsOpen] = useState(false);
  const [showmenu, setShowMenu] = useState(false);

  const options = [
    { value: "Core", label: "Core", image: "/coredao.png" },
    { value: "Polygon", label: "Polygon", image: "/image.png" },
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
  const handleshowmenu = () => {
    setShowMenu(true);
  };

  const handlehidemenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="flex  flex-col">
      <div className="mainw mob_hid p-8 flex flex-col">
        <div className=" flex mainbg h-full w-full flex-row gap-10 justify-between">
          <div className="relative">
            <input
              className="w-[718px] h-[50px] pl-10 pr-3 outline-none bg-white input_style"
              placeholder="Search for tokens, pools..."
            />
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
        <br />
        <EarningInfo effect={effectActive} /> <br />
        <div className="flex flex-row justify-between  items-center ">
          <SupplyEarning />
          <NetAPY />
          <BorrowEarning />
        </div>{" "}
        <br />
        <ProgressBar /> <br />
        <Tab change={handleEffectChange} />
      </div>

      {/* Mobile Screen */}

      <div>
        {showmenu ? <DropdownMenu menuOpen={handlehidemenu} /> : ""}
        <div className="mainww">
          <div className="mainw  mob_show p-2 flex flex-col">
            <div className=" relative flex mainbg h-full w-full flex-grow justify-around gap-1">
              <Image
                alt="unitycorelogo"
                src="/unitycore 1.svg"
                height={50}
                width={50}
              />
              <div className="relative">
                <input
                  className="w-full h-[32px] pl-10 pr-3 outline-none bg-white input_style"
                  placeholder="Search for tokens, pools..."
                />
                <AiOutlineSearch className="absolute left-3 top-5 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <div className="flex flex-row ">
                <div className="relative inline-block ">
                  <div
                    className="w-[40px] h-[32px] border border-gray-300 justify-center rounded outline-none bg-white input_style  text-base cursor-pointer flex items-center"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <img
                      src={
                        options.find(
                          (option) => option.value === selectedOption
                        )?.image
                      }
                      alt={selectedOption}
                      className="h-4 w-4 mr-1"
                    />
                    {/* {selectedOption} */}
                    <FiChevronDown
                      className={`ml-2 transition-transform ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>
                  {isOpen && (
                    <div className="absolute w-[110px] border border-gray-300 bg-white rounded-b mt-1 z-20">
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
                <div className="flex gap-1 flex-row">
                  <div className="h-[32px] w-[55px]  gap-2 flex flex-row justify-center outline-none items-center bg-white input_style">
                    <Avatar
                      style={{ height: "20px", width: "20px" }}
                      src="/Ellipse.png"
                    />
                    <FiChevronDown
                      className={` transition-transform ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                    {/* <p style={{ fontWeight: "700" }}>0xFIuh...F738</p> */}
                  </div>{" "}
                  {/* <button style={{ width: "100%", width: "100%" }}> */}
                  <Image
                    onClick={handleshowmenu}
                    alt="icon"
                    src="/image 42.svg"
                    height={25}
                    width={25}
                    style={{ marginBottom: "12px" }}
                  />
                  {/* </button> */}
                </div>
              </div>
            </div>
            <br />
            <MobEarningInfo effect={effectActive} /> <br />
            <SupplyEarning />
            &nbsp;
            <NetAPY />
            &nbsp;
            <BorrowEarning />
            &nbsp;
            <ProgressBar /> <br />
            <Tab change={handleEffectChange} />
            <BottomNavigation />
          </div>
        </div>
      </div>
    </div>
  );
}
