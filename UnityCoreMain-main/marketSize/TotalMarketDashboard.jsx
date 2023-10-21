import React, { useState, useContext, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dynamic from "next/dynamic";
import Link from "next/link";
import SupplyUSDCModal from "@components/SupplyUSDCModal";
import SupplyModal from "@components/SupplyCOREModal";
import SupplyUSDTModal from "@components/SupplyUSDTModal";
import { LoanProtocolContext } from "@context/LoanProtocolContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Switch, { SwitchProps } from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "@CustomIcon/IOSSwitch.jsx";

export default function ({ address, propFromSecondPage }) {
  const [ethbal, setEthBal] = useState(1);
  const [userdeposit, setUserDeposit] = useState(0);
  const [isToastDisplayed, setIsToastDisplayed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const {
    depositerror,
    walletBalance,
    APY,
    depositSuccess,
    setDepositSucess,
    setLoading,
    setdepositerror,
    userbalance,
    invalidNetworkError,
    validNetwork,
    loading,
  } = useContext(LoanProtocolContext);

  function createData(name, calories, fat, carbs, protein, supplytype) {
    return { name, calories, fat, carbs, protein, supplytype };
  }

  const handleSwitchChange = () => {
    setChecked(!checked);
  };
  const handleSwitchChange1 = () => {
    setChecked1(!checked1);
  };
  const handleSwitchChange2 = () => {
    setChecked2(!checked2);
  };
  const handleSwitchChange3 = () => {
    setChecked3(!checked3);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      invalidNetworkError
        ? toast.error(
            <p>
              You are connected to the wrong network, please switch your Network
              to Core Mainnet follow metamask Prompt
            </p>,
            {
              className: "error-alert",
              position: "top-right",
              autoClose: false,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              draggablePercent: 0,
            }
          )
        : "";
    }, 90000);
    return () => clearInterval(timer);
  });

  const Image = dynamic(() => import("next/image"), { ssr: false });
  const IOSSwitchMemoized = React.memo(IOSSwitch);

  const rows = [
    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image alt="CoreLogo" src="/coredao.png" height={50} width={50} />
          <Link href="/coreinfo">
            <h1
              style={{ color: "#000", fontSize: "20px" }}
              className=" family font-bold font-space-grotesk"
            >
              CORE
            </h1>
          </Link>
        </div>
      </div>,
      walletBalance == 0 ? (
        "--"
      ) : (
        <p className="text-bold">{walletBalance?.substring(0, 6)}</p>
      ),
      APY == 0 ? "--" : APY,
      userbalance == 0 ? "--" : <p className="text-bold">{userbalance}</p>,
      <FormControlLabel
        control={
          <IOSSwitchMemoized
            sx={{ m: 1 }}
            defaultChecked
            checked={checked}
            onChange={handleSwitchChange}
          />
        }
        // label="iOS style"
      />,
      <SupplyModal />
    ),

    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image alt="ICE" src="/icecreamswap.png" height={50} width={50} />
          <Link href="/">
            <h1
              style={{ color: "#000", fontSize: "20px" }}
              className=" family font-bold font-space-grotesk"
            >
              ICE
            </h1>
          </Link>
        </div>
      </div>,
      <span className="font-semibold text-lg ">$50</span>,
      <span className="font-semibold text-lg" style={{ color: "green" }}>
        2
      </span>,
      <span className="font-semibold text-lg ">0</span>,
      <FormControlLabel
        control={
          <IOSSwitchMemoized
            sx={{ m: 1 }}
            defaultChecked
            checked={checked2}
            onChange={handleSwitchChange2}
          />
        }
        // label="iOS style"
      />,
      <SupplyUSDCModal />
    ),
    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image alt="USDT" src="/usdt.png" height={50} width={50} />
          <Link href="/">
            <h1
              style={{ color: "#000", fontSize: "20px" }}
              className=" family font-bold font-space-grotesk"
            >
              USDT
            </h1>
          </Link>
        </div>
      </div>,
      <span className="font-semibold text-lg ">$99</span>,
      <span className="font-semibold text-lg " style={{ color: "green" }}>
        9
      </span>,
      <span className="font-semibold text-lg ">0</span>,
      <FormControlLabel
        control={
          <IOSSwitchMemoized
            sx={{ m: 1 }}
            defaultChecked
            checked={checked1}
            onChange={handleSwitchChange1}
          />
        }
        // label="iOS style"
      />,
      <SupplyUSDTModal />
    ),

    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image alt="USDC" src="/usdc.png" height={50} width={50} />
          <Link href="/">
            <h1
              style={{ color: "#000", fontSize: "20px" }}
              className=" family font-bold font-space-grotesk"
            >
              USDC
            </h1>
          </Link>
        </div>
      </div>,
      <span className="font-semibold text-lg ">$99</span>,
      <span className="font-semibold text-lg " style={{ color: "4CAF50" }}>
        9
      </span>,
      <span className="font-semibold text-lg ">0</span>,
      <FormControlLabel
        control={
          <IOSSwitchMemoized
            sx={{ m: 1 }}
            defaultChecked
            checked={checked3}
            onChange={handleSwitchChange3}
          />
        }
        // label="iOS style"
      />,
      <SupplyUSDCModal />
    ),
  ];

  // Third Table

  if (depositerror) {
    toast.error(
      <p>An error occurred while depositing funds, please try again</p>,
      {
        position: "top-left",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        draggablePercent: 0,
      }
    );
    setdepositerror(false); // Reset the error variable after displaying the alert
  }

  if (depositSuccess) {
    toast.success(<p>Your funds has been deposited successfully</p>, {
      position: "top-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      draggablePercent: 0,
    });
    setDepositSucess(false); // Reset the error variable after displaying the alert
  }

  if (loading) {
    toast.promise(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 10500);
      }),
      {
        pending: "depositing your funds...",
        // success: 'your funds has been deposited'
      }
    );
    setLoading(false);
  }

  return (
    <div className="h-[450px] text-black rounded-md w-[100%] p-2  justify-start gap-2 flex flex-col">
      <div className="flex flex-row justify-between"></div>
      <div>
        {ethbal == 0 ? (
          <Alert severity="info">
            <p className="text-xs">
              Your Ethereum wallet is empty. Purchase or transfer assets.
            </p>
          </Alert>
        ) : (
          ""
        )}
      </div>
      <TableContainer className="table-width all-font" component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>
                <h1 style={{ color: "#657795" }} className="text-md family">
                  Asset
                </h1>
              </TableCell>
              <TableCell align="right">
                <h1 style={{ color: "#657795" }} className="text-md family">
                  Wallet Balance
                </h1>
              </TableCell>
              <TableCell align="right">
                <h1 style={{ color: "#657795" }} className="text-md family">
                  APY&nbsp;(%)
                </h1>
              </TableCell>
              <TableCell align="right">
                <h1 style={{ color: "#657795" }} className="text-md family">
                  Deposit
                </h1>
              </TableCell>
              <TableCell align="right">
                <h1 style={{ color: "#657795" }} className="text-md family">
                  Collateral
                </h1>
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">{row.supplytype}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
