
"use client"
import Iceinfo from "@components/Iceinfo";
import { useState } from "react";

export default function page() {
    const [isHovered, setIsHovered] = useState(false);
    const [usdt, setUSDT] = useState(1000)
    const [icedeposited, seticeDeposited] = useState(1000000)
    const [uiceborrowed, setUiceBorrowed] = useState(800000000000)
    const [uiceborrowedusd, setUiceBorrowedUSD] = useState(300000000000)

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
     className="h-72 w-72  bg-slate-200 rounded-full shadow-2xl grid justify-center items-center">
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
    <span>{icedeposited} ICE Token</span>
      </div>
      <br />
      <div className="flex flex-col">
    <h1 className="text-sm text-green-700">TOTAL BORROWED</h1> 
    <span>{uiceborrowed} ICE Token</span>
    <span>{uiceborrowedusd} USD</span>
      </div><br />
      <div class="flex gap-y-56 relative justify-center">
  <div  class="flex   border-2">
    <div class="lg:h-[200px] md: h-[100px] w-px bg-black"></div>
    <div class="flex-1 p-1 flex ">
      <div class="px-2 p-10 w-[300px] table-grid sm:w-[100px] lg:w-[300px] md:w-[200px] ">
        <h1 className="text-2xl">Deposit </h1>
        <div>
        <h1 className="text-md text-black">Deposit APY:</h1> 
        <h1 className="text-green-600">9%</h1>
        </div>
      </div>
    </div>
    <div class="h-full w-px bg-black"></div>
    <div class="flex-1 flex items-center justify-center">
      <div class="px-2 w-[300px] md:w-[200px] table-grid sm:w-[100px] lg:w-[300px]">
        <p>Box 2</p>
      </div>
    </div>
    <div class="h-full w-px bg-black"></div>
    <div class="flex-1 flex items-center justify-center">
      <div class="px-2 w-[300px] table-grid sm:w-[100px] lg:w-[300px] md:w-[200px]">
        <p>Box 3</p>
      </div>
    </div>
  </div>
</div>
      </div> <br />
      <Iceinfo />
</div>
  )
}
