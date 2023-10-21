"use client";
import * as React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { useState, useContext } from "react";
import Image from "next/image";
import Switch from "@mui/material/Switch";
import { green } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

export default function SupplyCorepage() {
  const [checked, setChecked] = useState(false);
  const [value, setvalue] = useState(900);

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      {" "}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <Image
              alt="ice cream swap logo"
              src="/icecreamswap.png"
              height={30}
              width={30}
            />
            <p
              style={{ color: "#7F8FA9", fontWeight: "700" }}
              className="smallP text-sm flex mt-[10px] items-center font-normal"
            >
              Supply APY
            </p>
          </div>
          <span
            style={{ color: "#4CAF50", fontWeight: "600" }}
            className="text-sm"
          >
            5%
          </span>
        </div>
        <div className="flex justify-between ">
          <div className="flex gap-2">
            <Image
              alt="unitycore logo"
              src="/unitycore.png"
              height={25}
              width={25}
            />
            <p
              style={{ color: "#7F8FA9", fontWeight: "700" }}
              className="smallP text-sm flex  mt-[10px] font-normal"
            >
              Distribution APY
            </p>
          </div>

          <span
            style={{ color: "#4CAF50", fontWeight: "600" }}
            className="text-sm"
          >
            5%
          </span>
        </div>

        <div className="justify-center item-center flex">
          <button className="butn">Continue</button>
        </div>
      </div>{" "}
      <br />
      <div className="flex flex-row justify-between">
        <p style={{ color: "#7F8FA9" }} className="smallP text-sm font-normal">
          Wallet Balance
        </p>
        <h1 style={{ fontSize: "15px", fontWeight: "700" }}>{value} ICE</h1>
      </div>
    </div>
  );
}
