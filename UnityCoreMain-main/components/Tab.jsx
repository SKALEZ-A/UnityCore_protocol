"use client";

import { useState } from "react";
import Image from "next/image";
import BorrowDashboard from "./BorrowDashboard";
import SupplyDashboard from "@components/SupplyDashboard";
import BorrowEarning from "@personal/BorrowEarning";
import SupplyEarning from "@personal/SupplyEarning";

export default function Tab({ change }) {
  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleClick = () => {
    setTab1(true);
  };
  const handleClicktofalse = () => {
    setTab1(false);
  };

  const handleprops = () => {
    // Trigger the effect in the upper component
    change(true);
  };

  const handlepropstofalse = () => {
    // Trigger the effect in the upper component
    change(false);
  };

  const handleButtonClick = () => {
    handleClick();
    handleprops();
  };

  const handleButtonClicks = () => {
    handleClicktofalse();
    handlepropstofalse();
  };

  const handleClaim = () => {
    setPopup(false);
  };
  return (
    <div>
      <div className="flex mob_hid flex-col p-0 gap-1">
        <div className="flex flex-row justify-between">
          <div className="flex tabswitch justify-center items-center flex-row gap-12">
            <button
              onClick={handleButtonClicks}
              className={
                tab1 == false
                  ? "btnTab smallPwhite"
                  : "button flex  pl-10  smallP"
              }
            >
              <p className="text-[16px]">Supply</p>
            </button>
            <button
              className={tab1 ? "btnTab smallPwhite" : "button smallP pr-10"}
              onClick={handleButtonClick}
            >
              <p className="text-[16px]">Borrow</p>
            </button>
          </div>
          <div>
            <button
              onClick={() => setPopup(true)}
              className="btnTab buttonp smallPwhite"
            >
              Claim
            </button>
          </div>
        </div>
        <div>
          {tab1 === false ? <SupplyDashboard /> : ""}
          {tab1 === true ? <BorrowDashboard /> : ""}
        </div>
      </div>

      {/* Mobile Screen */}
      <div className="flex mob_show flex-col p-0 gap-1">
        <div className="flex flex-row justify-between">
          <div className="flex tabswitch5 justify-center items-center flex-row gap-3">
            <button
              onClick={handleButtonClicks}
              className={
                tab1 == false
                  ? "btnTab_mob smallPwhite"
                  : "button flex  pl-10  smallP"
              }
            >
              <p className="text-[16px]">Supply</p>
            </button>
            <button
              className={
                tab1 ? "btnTab_mob smallPwhite" : "button smallP pr-10"
              }
              onClick={handleButtonClick}
            >
              <p className="text-[16px]">Borrow</p>
            </button>
          </div>

          <div>
            <button
              onClick={() => setPopup(true)}
              className="btnTab_mob buttonp smallPwhite"
            >
              Claim
            </button>
          </div>
        </div>
        <div>
          <div>
            <p className="p-text">
              {tab1 ? "All Borrow Assets" : "All Supply Assets"}
            </p>
          </div>
          {tab1 === false ? <SupplyDashboard /> : ""}
          {tab1 === true ? <BorrowDashboard /> : ""}
        </div>
      </div>
      {popup && (
        <div
          onClick={() => setPopup(false)}
          className="fixed inset-0 overflow-y-auto"
        >
          <div className="flex min-h-full items-end md:items-center justify-center text-center bg-[#00000041]">
            <div className="mb-14 w-full max-w-md overflow-hidden rounded-t-2xl md:rounded-2xl bg-white p-6 text-left shadow-xl">
              <button onClick={() => setPopup(false)} className="top-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col text-center mb-8">
                <Image
                  alt="unitycorelogo"
                  src="/unitycore.png"
                  height={65}
                  width={65}
                  className="mx-auto"
                />
                <span className="text-green-600 font-semibold">0.000000</span>
                <span className="text-slate-600 font-semibold">$0.000</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h3 className="font-medium text-slate-400 tracking-tight leading-4">
                    Wallet Balance
                  </h3>
                  <span className="text-green-600 font-semibold">
                    0.00000000
                  </span>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-medium text-slate-400 tracking-tight leading-4">
                    Unclaimed Balance
                  </h3>
                  <span className="text-green-600 font-semibold">
                    0.00000000
                  </span>
                </div>
                <div className="flex justify-between">
                  <h3 className="font-medium text-slate-400 tracking-tight leading-4">
                    Price
                  </h3>
                  <span className="text-green-600 font-medium">$0.0</span>
                </div>
              </div>

              <button
                onClick={handleClaim}
                className="w-full h-12 rounded-lg mt-4 text-white text-[16px] bg-gradient-to-l from-blue-700  to-purple-500"
              >
                Claim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
