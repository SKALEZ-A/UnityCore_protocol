import Link from "next/link"
import Image from "next/image"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaCaretUp, FaCaretDown } from 'react-icons/fa';

export default function TokenInfo({address, priceChange, price}) {
    const ContractAddress = "jdwoiqhepouiheofuiqef"
  return (
<div className="flex collo gap-4 items-center justify-between">
  <div>
<h1 className="text-lg">Token Info</h1>
              <div className="border-black h-50 p-[20px] w-[800px] box_size justify-between items-center rounded-md  border flex flex-row">
              <div className=''>
            <Image
              alt="CoreLogo"
              src="/coredao.png"
              height={10}
              width={25}
            />
      <span>CORE</span>
         </div>
         <div className="flex  flex-col">
            Address:
            <br />
            {address?.length == 0 ? '--' : <h1 className="text-sm">{address?.substring(0, 6)}....{address?.substring(35)}</h1>}
         </div>
         <button className="btn">
         <CopyToClipboard text={address}>
          <span>Copy</span>
        </CopyToClipboard>
          </button>
              </div>
</div>


<div>
              <h1 className="">Price Info</h1>
              <div className="border-black h-50 p-[20px]  w-[800px] box_size justify-between items-center rounded-md  border flex flex-row">
              <div className=''>
            <Image
              alt="CoreLogo"
              src="/coredao.png"
              height={10}
              width={25}
            />
      <span>CORE</span>
         </div>
         <div className="flex  flex-col">
            Price:
            <br />
            {/* <h1>$ {price == 0 ? '--' : price}</h1> */}
            <div className="price">
            {priceChange === 'green' && <FaCaretUp className="icon green" />}
{priceChange === 'red' && <FaCaretDown className="icon red" />}
      <span>$ {price}</span>
    </div>
         </div>
         <button className="btn">
         <CopyToClipboard text={address}>
          <span>Copy</span>
        </CopyToClipboard>
          </button>
              </div>
              </div>

              
              

</div>
  )
}
