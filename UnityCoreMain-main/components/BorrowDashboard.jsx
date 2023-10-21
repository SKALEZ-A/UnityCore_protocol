"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { ColorRing } from "react-loader-spinner";
import BorrowInterface from "./BorrowInterface";
import Tab from "./Tab";
import { LoanProtocolContext } from "@context/LoanProtocolContext";
import MetamaskAlert from "@components/Metamask";
import Alert from "@mui/material/Alert";

export default function BorrowDashboard() {
  const [click, setClick] = useState(false);
  const { Connectwallet, walletaddress, loading } =
    useContext(LoanProtocolContext);

  return (
    <div>
      {/* {walletaddress && walletaddress.length > 0 */}
      {true ? (
        <BorrowInterface address={walletaddress} />
      ) : (
        <div className="h-[450px] justify-center box_heihgt rounded-md w-[100%] p-7 items-center gap-2 flex flex-col bg-white">
          <Alert severity="info">
            <span
              style={{
                color: "#657795",
                fontFamily: "Space Grotesk",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: 200,
              }}
            >
              Please Connect Your wallet to continue
            </span>
          </Alert>
          <button
            onClick={() => {
              setClick(true);
              Connectwallet();
            }}
            className="Connectbtn cursor-not-allowed"
          >
            <p className="text-[15px] flex flex-row justify-center items-center">
              {click ? (
                <p className="text-[15px] flex flex-row justify-center items-center">
                  <ColorRing
                    visible={true}
                    height="30"
                    width="30"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={["#fff", "#fff", "#fff", "#fff", "#fff"]}
                  />{" "}
                  Connecting...
                </p>
              ) : (
                ""
              )}
              {click ? "" : "Connect wallet"}
            </p>
          </button>
        </div>
      )}
    </div>
  );
}
