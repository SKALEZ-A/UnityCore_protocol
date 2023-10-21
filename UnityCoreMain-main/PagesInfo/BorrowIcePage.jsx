"use client";
import * as React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { useState, useContext } from "react";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import { green } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

export default function BorrowCorepage() {
  const [checked, setChecked] = useState(false);
  const [value, setvalue] = useState(900);

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between "></div>
        <div className="flex justify-between ">
          <p className="smallP text-sm flex items-center font-normal">
            Borrow Limit &nbsp; <AiFillInfoCircle className="ml-1" />
          </p>

          <span className="text-sm">38%</span>
        </div>
        {/* //////////////// */}
        <div className="flex justify-between ">
          <p className="smallP text-sm flex items-center font-normal">
            Borrow Balance &nbsp; <AiFillInfoCircle className="ml-1" />
          </p>

          <span className="text-sm">38%</span>
        </div>
        {/* //////////////// */}
        <div className="flex justify-between ">
          <p className="smallP text-sm flex items-center font-normal">
            Borrow Limit Used &nbsp; <AiFillInfoCircle className="ml-1" />
          </p>

          <span className="text-sm">38%</span>
        </div>

        <div className="justify-center item-center flex">
          <button className="butn">Continue</button>
        </div>
      </div>{" "}
      <br />
      <div className="flex flex-row justify-between">
        <p style={{ color: "#7F8FA9" }} className="smallP text-sm font-normal">
          Currently Borrowing
        </p>
        <h1 style={{ fontSize: "15px", fontWeight: "700" }}>{value} ICE</h1>
      </div>
    </div>
  );
}
