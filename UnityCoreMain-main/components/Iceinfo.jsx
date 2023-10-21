import Link from "next/link"
import Image from "next/image"

export default function Iceinfo() {
    const ContractAddress = "jdwoiqhepouiheofuiqef"
  return (
    <div>
              <div className="border-black h-50 p-[30px]  justify-between items-center rounded-md  border flex flex-row">
              <div className=''>
            <Image
              alt="ICE logo"
              src="/icecreamswap.png"
              height={10}
              width={25}
            />
      <span>ICE</span>
         </div>
         <div className="flex  flex-col">
            Address:
            <br />
            {ContractAddress}
         </div>
         <button className="btn">Copy</button>
              </div>
              
    </div>
  )
}
