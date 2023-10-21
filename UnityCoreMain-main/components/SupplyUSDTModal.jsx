"use client";
import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "next/link";
import { Input } from "@mui/material";
import { LoanProtocolContext } from "@context/LoanProtocolContext";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import Switch from "@mui/material/Switch";
import { green } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import SupplyCorepage from "@PagesInfo/SupplyCorepage";
import WithdrawCorepage from "@PagesInfo/WithdrawCorepage";
import SupplyUSDTpage from "@PagesInfo/SupplyUSDTpage";
import WithdrawUSDTpage from "@PagesInfo/WithdrawUSDTpage";
import { RxCross2 } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 464,
  height: 437,
  bgcolor: "#fff",
  borderRadius: "10px",
  border: "1px solid #BDB7F2",
  p: 2,
};

const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 464,
  height: 537,
  bgcolor: "#fff",
  borderRadius: "10px",
  border: "1px solid #BDB7F2",
  p: 2,
};

const style4 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  height: 567,
  bgcolor: "#fff",
  borderRadius: "10px",
  border: "1px solid #BDB7F2",
  p: 2,
};

const style3 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 340,
  height: 460,
  bgcolor: "#fff",
  borderRadius: "10px",
  border: "1px solid #BDB7F2",
  p: 2,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = () => {
    setChecked(!checked);
  };
  const { Connectwallet, walletBalance, deposit, APY, userbalance, loading } =
    useContext(LoanProtocolContext);

  //Handle Max Amount to deposit
  const handleMaxClick = () => {
    setValue(String(walletBalance - 0.03).substring(0, 7));
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Validate the input to allow decimal numbers
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(true);
    handleOpen();
  };

  const handlebuttonstate = () => {
    setIsClicked(false);
    handleClose();
  };

  const [tab1, setTab1] = useState(false);
  const [tab2, setTab2] = useState(false);

  const handleClick = () => {
    setTab1(true);
  };
  const handleClicktofalse = () => {
    setTab1(false);
  };

  const handleprops = () => {
    // Trigger the effect in the upper component
    // change(true);
  };

  const handlepropstofalse = () => {
    // Trigger the effect in the upper component
    // change(false);
  };

  const handleButtonClickk = () => {
    handleClick();
    handleprops();
  };

  const handleButtonClicks = () => {
    handleClicktofalse();
    handlepropstofalse();
  };

  return (
    <div>
      {" "}
      <div>
        <button
          className={` ${isClicked ? "clicked mol_btn" : "btn mol_btn"}`}
          style={{
            color: isClicked ? "#C8BFCD" : "#FFF",
          }}
          onClick={handleButtonClick}
        >
          Supply
        </button>
        <Modal
          open={open}
          onClose={handlebuttonstate}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="mob_hid" sx={tab1 ? style2 : style}>
            <div className="gap-2 flex flex-col">
              <div className="flex flex-row pl-[170px] gap-5">
                <div className="flex gap-1  mr-[80px] justify-center items-center">
                  <Image
                    alt="usdt logo"
                    src="/usdt.png"
                    height={30}
                    width={30}
                  />
                  <h1
                    style={{ color: "#000" }}
                    className="text-5 family font-bold font-space-grotesk"
                  >
                    USDT
                  </h1>
                </div>
                <div
                  onClick={handlebuttonstate}
                  className="float-right cursor-pointer ml-[70px]"
                >
                  <RxCross2 />
                </div>
              </div>

              <div
                style={{ background: "#F3F4FF" }}
                class="rounded-md border  border-blue-200  w-510 h-[80px] flex-shrink-0"
              >
                <div className="flex justify-between items-center justify-center p-4 flex-row">
                  <div className="flex">
                    <p style={{ color: "#000" }} className="text-3xl custom">
                      {/* {value} */}
                      <input
                        className="w-[60px] py-2 px-3 text-lg bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none f"
                        value={value}
                        onChange={(e) => {
                          const enteredValue = e.target.value;
                          // Check if the entered value is a number and greater than or equal to 1
                          if (
                            /^[1-9]\d*$/.test(enteredValue) ||
                            enteredValue === ""
                          ) {
                            setValue(enteredValue); // Update the state with the entered value
                          }
                        }}
                        placeholder="200"
                      />
                    </p>
                    &nbsp;
                    <p className="smallP text-sm scustom ">($100.44)</p>
                  </div>

                  <div className="flex items-center lineH justify-center gap-3">
                    {tab1 == false ? (
                      <p className="smallP text-sm font-bold">
                        In wallet: {value}
                      </p>
                    ) : (
                      ""
                    )}
                    <button class="rounded-md bg-blue-200  w-16 items-start ">
                      <p className="font-medium">MAX</p>
                    </button>
                  </div>
                </div>

                <div></div>
                <div className="flex tabswitch2   justify-center items-center flex-row gap-12">
                  <button
                    onClick={handleButtonClicks}
                    className={
                      tab1 == false
                        ? "btnTab2 smallPwhite"
                        : "button flex   pl-10    smallP"
                    }
                  >
                    <p className="text-[16px]">Supply</p>
                  </button>
                  <button
                    className={
                      tab1 ? "btnTab2 smallPwhite" : "button smallP pr-10"
                    }
                    onClick={handleButtonClickk}
                  >
                    <p className="text-[16px]">Withdraw</p>
                  </button>
                </div>
                <div>
                  {" "}
                  {tab1 == false ? <br /> : <br />}
                  {tab1 === false ? <SupplyUSDTpage /> : ""}
                  {tab1 === true ? <WithdrawUSDTpage /> : ""}
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
      {/* Mobile View */}
      <Modal
        className="mob_show "
        open={open}
        onClose={handlebuttonstate}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="mob_show family " sx={tab1 ? style4 : style3}>
          <div className="gap-1 flex flex-col">
            <div className="flex family flex-col gap-2">
              <div className="flex flex-row pl-[90px] gap-1">
                <div className="flex gap-1  mr-[80px] justify-center items-center">
                  {tab1 ? (
                    <div className="flex  flex-row">
                      <p
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "700",
                        }}
                      >
                        WITHDRAW USDT
                      </p>
                    </div>
                  ) : (
                    <p
                      // className="family"
                      style={{
                        color: "#000",
                        fontSize: "16px",
                        fontWeight: "700",
                      }}
                    >
                      SUPPLY USDT
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handlebuttonstate}
                  className="float-right cursor-pointer ml-[0px]"
                >
                  <RxCross2 />
                </button>
              </div>

              <div
                style={{ background: "#F3F4FF" }}
                class="rounded-md border  border-blue-200  w-[300px] h-full"
              >
                <div className="flex justify-between p-2  flex-row">
                  <p className="smallP text-sm flex items-center justify-center  font-normal">
                    I want to Supply
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <p className="smallP text-sm font-normal">
                      In wallet: {value}
                    </p>
                    <button class="rounded-md bg-blue-200  w-16 items-start ">
                      MAX
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between p-2">
                    {/* <div className="flex"> */}
                    <div className="flex">
                      <p style={{ color: "#000" }} className="text-3xl custom">
                        {/* {value} */}
                        <input
                          className="w-[60px] py-2 px-3 text-lg bg-transparent border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none f"
                          value={value}
                          onChange={(e) => {
                            const enteredValue = e.target.value;
                            // Check if the entered value is a number and greater than or equal to 1
                            if (
                              /^[1-9]\d*$/.test(enteredValue) ||
                              enteredValue === ""
                            ) {
                              setValue(enteredValue); // Update the state with the entered value
                            }
                          }}
                          placeholder="200"
                        />
                      </p>
                      &nbsp;
                      <p className="smallP text-sm scustom ">($100.44)</p>
                      {/* </div> */}
                    </div>
                    <div className="flex gap-1 justify-center items-center">
                      <Image
                        alt="usdt logo"
                        src="/usdt.png"
                        height={40}
                        width={40}
                      />
                      <h1
                        style={{ color: "#000" }}
                        className="text-12 family font-bold font-space-grotesk"
                      >
                        USDT
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div></div>
              <div className="flex tabswitch2   justify-center items-center flex-row gap-12">
                <button
                  onClick={handleButtonClicks}
                  className={
                    tab1 == false
                      ? "btnTab2 smallPwhite"
                      : "button flex   pl-10    smallP"
                  }
                >
                  <p className="text-[16px]">Supply</p>
                </button>
                <button
                  className={
                    tab1 ? "btnTab2 smallPwhite" : "button smallP pr-10"
                  }
                  onClick={handleButtonClickk}
                >
                  <p className="text-[16px]">Withdraw</p>
                </button>
              </div>
              <div>
                {" "}
                {tab1 == false ? <br /> : <br />}
                {tab1 === false ? <SupplyUSDTpage /> : ""}
                {tab1 === true ? <WithdrawUSDTpage /> : ""}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
