
"use client"
import TokenInfo from "@components/TokenInfo";
import { useState,useContext } from "react";
import { LoanProtocolContext } from '@context/LoanProtocolContext';


export default function page() {
  const [isHovered, setIsHovered] = useState(false);
  const [usdt, setUSDT] = useState(1000)
  const [coredeposited, setCoreDeposited] = useState(1000000)
  const [ucoreborrowed, setUcoreBorrowed] = useState(800000000000)
  const [ucoreborrowedusd, setUcoreBorrowedUSD] = useState(300000000000)



  const {walletaddress, priceMovement , metamaskAlert , tokentotalborrow, priceChange, coreprice ,ContractBalance } = useContext(LoanProtocolContext)

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className='w-full p-[30px] h-full'>
      <div className="border-black h-full p-[30px] rounded-md  border flex flex-col">
        <div
          className="justify-center items-center flex">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="h-65 w-65  bg-slate-200 rounded-full shadow-2xl grid justify-center items-center">
            <div className=" h-60 w-60 bg-yellow-500 grid justify-center items-center rounded-full">
              <div className="h-40 w-40  bg-slate-300  grid justify-center items-center rounded-full">
                <div className="h-20 w-20  bg-white justify-center flex flex-col  items-center rounded-full">
                  <p className="text-blue-600 text-xs justify-center items-center flex flex-col ">
                    UTILIZATION RATE <br />      103.85%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isHovered && (
          <div className="absolute h-full justify-center items-center flex  top-0 left-0 bg-black p-4 rounded-md">
            <p>This is the hidden div</p>
          </div>
        )}
        <div className="flex flex-col" >
          <h1 className="text-xl4">Special title treatment</h1>
          <h1 className="text-sm text-green-700">TOTAL DEPOSITED</h1>
          <span>{usdt} USD</span>
          <span>{ ContractBalance == 0 ? '--' : ContractBalance} CORE</span>
        </div>
        <br />
        <div className="flex flex-col">
          <h1 className="text-sm text-green-700">TOTAL BORROWED</h1>
          <span>{tokentotalborrow == 0 ? '--' : tokentotalborrow} UCORE</span>
          <span>{ucoreborrowedusd} USD</span>
        </div><br />
        <div className="">

          <div className="flex items-center justify-center mobile_w  gap-4">
            <div className="h-[200px] w-[300px]  wid-box flex flex-col">
              <div className="flex-grow p-2 bg-gray-200">
               <h1 className="text-xl items-center ">Your deposit</h1>
               <h1>Core: {usdt}</h1>
               <h1>Core deposit in USD: {usdt}</h1>
              </div>
            </div>

            <div className="h-[200px] w-[300px] wid-box flex flex-col">
              <div className="flex-grow p-2 bg-gray-200">
              <h1 className="text-xl items-center ">UCORE BORROWED</h1>
              <h1>UCORE: {usdt}</h1>
               <h1> UCORE Borrowed in USD: {usdt}</h1>
              </div>
            </div> 
            <div className="h-[200px] w-[300px] wid-box flex flex-col">
              <div className="flex-grow p-2 bg-gray-200">
                Box 3
              </div>
            </div>
          </div>
        </div>

      </div> <br />
      <TokenInfo priceChange={priceChange} price={coreprice} address={walletaddress} />
    </div>
  )
}
