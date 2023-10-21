import React, { useState, useContext } from "react";
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
import BorrowWithCOREModal from "./BorrowWithCoreModal";
import BorrowwithUSDTModal from "./BorrowwithUSDTModal";
import BorrowwithUSDCModal from "@components/BorrowwithUSDCModal";
import BorrowWithICEModal from "./BorrowWithICEModal";
import { LoanProtocolContext } from "@context/LoanProtocolContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ({ address, propFromSecondPage }) {
  // const[ucorebalance, setucorebalance] = useState(3)
  const [userdept, setUserDept] = useState(0);
  const value = useContext(LoanProtocolContext);
  const {
    ucorebalance,
    borrowerror,
    borrowSuccess,
    walletBalance,
    APY,
    userbalance,
    setBorrowError,
    setBorrowSuccess,
    setLoading,
    invalidNetworkError,
    validNetwork,
    yourborrow,
    loading,
  } = useContext(LoanProtocolContext);

  if (borrowerror) {
    toast.error(
      <p>An error occurred while borrowing funds, please try again</p>,
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
    setBorrowError(false); // Reset the error variable after displaying the alert
  }

  if (borrowSuccess) {
    toast.success(<p>You have successfully borrowed UCORE</p>, {
      position: "top-left",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      draggablePercent: 0,
    });
    setBorrowSuccess(false); // Reset the error variable after displaying the alert
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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const Image = dynamic(() => import("next/image"), { ssr: false });

  const rows = [
    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image
            alt="CoreLogo"
            src="/coredao.png"
            height={50}
            width={50}
            className="img_size"
          />
          <Link href="/coreinfo">
            <h1
              style={{ color: "#000" }}
              className=" family font-bold font-space-grotesk mob_size"
            >
              CORE
            </h1>
          </Link>
        </div>
      </div>,
      walletBalance == 0 ? "--" : walletBalance?.substring(0, 6),
      APY == 0 ? "--" : APY,
      userbalance == 0 ? "--" : userbalance,
      <BorrowWithCOREModal />
    ),

    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image
            alt="ICE"
            src="/icecreamswap.png"
            height={50}
            width={50}
            className="img_size"
          />
          <Link href="/">
            <h1
              style={{ color: "#000" }}
              className=" family  mob_size font-bold font-space-grotesk "
            >
              ICE
            </h1>
          </Link>
        </div>
      </div>,
      <span className="font-semibold text-lg ">$99</span>,
      <span className="font-semibold text-lg" style={{ color: "green" }}>
        9
      </span>,
      <span className="font-semibold text-lg ">0</span>,
      <BorrowWithICEModal />
    ),

    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image
            alt="USDT"
            src="/usdt.png"
            height={50}
            width={50}
            className="img_size"
          />
          <Link href="/">
            <h1
              style={{ color: "#000" }}
              className=" family font-bold font-space-grotesk mob_size"
            >
              USDT
            </h1>
          </Link>
        </div>
      </div>,
      <span className="font-semibold text-lg ">$99</span>,
      <span className="font-semibold text-lg" style={{ color: "green" }}>
        9
      </span>,
      <span className="font-semibold text-lg ">0</span>,
      <BorrowwithUSDTModal />
    ),

    createData(
      <div className="flex flex-row">
        <div className="flex items-center gap-2">
          <Image
            alt="USDC"
            src="/usdc.png"
            height={50}
            width={50}
            className="img_size"
          />
          <Link href="/">
            <h1
              style={{ color: "#000" }}
              className=" family font-bold font-space-grotesk mob_size"
            >
              USDC
            </h1>
          </Link>
        </div>
      </div>,

      <span className="font-semibold text-lg ">$99</span>,
      <span className="font-semibold text-lg" style={{ color: "green" }}>
        9
      </span>,
      <span className="font-semibold text-lg ">0</span>,
      <BorrowwithUSDCModal />
    ),
  ];

  return (
    <div>
      <div className="h-[450px] mob_hid  text-black rounded-md w-[100%] p-2  justify-start gap-2 flex flex-col ">
        <div className="flex flex-row justify-between"></div>
        <div>
          {ucorebalance == 0 ? (
            <Alert severity="info">
              <p className="text-xs">
                Your UCORE wallet is empty. borrow assets.
              </p>
            </Alert>
          ) : (
            ""
          )}
        </div>
        <div className="table-contner ">
          <TableContainer className="table-width  all-font" component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="table">
              <TableHead style={{ fontSize: "2px" }}>
                <TableRow>
                  <TableCell className="custom-header1" align="right">
                    <h1 style={{ color: "#657795" }} className="text-md family">
                      Asset
                    </h1>
                  </TableCell>
                  <TableCell className="custom-header1" align="right">
                    <h1 style={{ color: "#657795" }} className="text-md family">
                      {" "}
                      Balance
                    </h1>
                  </TableCell>
                  <TableCell className="custom-header1" align="right">
                    <h1 style={{ color: "#657795" }} className="text-md family">
                      APY&nbsp;(%)
                    </h1>
                  </TableCell>
                  <TableCell className="custom-header1" align="right">
                    <h1 style={{ color: "#657795" }} className="text-md family">
                      Borrows
                    </h1>
                  </TableCell>
                  <TableCell
                    className="custom-header1"
                    align="right"
                  ></TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>{" "}
      </div>
      {/* Mobile screen */}
      <div className="table-parent  mob_show mb-14">
        <div className="table-container overflow-x-auto bg-white">
          {" "}
          {/* Set the background color explicitly here */}
          <Table
            className="min-w-[300px] max-w-[490px] w-full table-fixed custom-table1"
            aria-label="table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1 style={{ color: "#657795" }} className="text-md family">
                    Asset
                  </h1>
                </TableCell>
                <TableCell align="right">
                  <h1 style={{ color: "#657795" }} className="text-md family">
                    {" "}
                    Balance
                  </h1>
                </TableCell>
                <TableCell align="right">
                  <h1 style={{ color: "#657795" }} className="text-md family">
                    APY&nbsp;(%)
                  </h1>
                </TableCell>
                <TableCell align="right">
                  <h1 style={{ color: "#657795" }} className="text-md family">
                    Borrows
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
