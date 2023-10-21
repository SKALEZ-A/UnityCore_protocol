import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import SupplyModal from "@components/SupplyCOREModal"
import SupplyICEModal from "@components/SupplyICEModal"


export default function MarketBoard ({address, propFromSecondPage}) {
    const[ethbal, setEthBal] = useState(1)
    const[APY, setAPY] = useState(0)
    const[userdeposit, setUserDeposit] = useState(0)
    const[totalCoredepositedUSD, setTotalCoreDepositedUSD] = useState(123000)
    const[totalIceTokendeposited, setTotalICETokenDeposied] = useState(1983782)
    const[totalUCoredepositedUSD, setTotalUCoreDepositedUSD] = useState(17623000)



    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }


    const Image = dynamic(() => import('next/image'), { ssr: false })

      const rows = [
        createData(
          <div className='flex flex-row'>
            <Image
              alt="CoreLogo"
              src="/coredao.png"
              height={16}
              width={25}
            />
         <Link href='/coreinfo'><span>CORE</span></Link>
          </div>,
          <div className='flex flex-col'>
            <h1>${totalCoredepositedUSD}</h1>
            <h1>{totalCoredepositedUSD}&nbsp;USDT</h1>
          </div>,
          0
        ),
        createData(
            <div className='flex flex-row'>
            <Image
              alt="icecreamswaplogo"
              src="/icecreamswap.png"
              height={16}
              width={25}
            />
            <span>ICE</span>
          </div>, 
         <div className='flex flex-col'>
          <h1>${totalIceTokendeposited}</h1>
          <h1>{totalIceTokendeposited}&nbsp;USDT</h1>
                  </div>,
           9.0,),

        createData(
            <div className='flex flex-row'>
            <Image
              alt="UnityCoreLogo"
              src="/unitycore.png"
              height={16}
              width={25}
            /> 
            <span>UCORE</span>
          </div>,
          <div className='flex flex-col'>
          <h1>${totalUCoredepositedUSD}</h1>
          <h1>{totalUCoredepositedUSD}&nbsp;USDT</h1>
                  </div>,
                  9.0,),
      ];



  return (
    <div  className='h-[400px] bup mt-[100px] text-black rounded-md w-[100%] p-7  justify-start gap-2 flex flex-col bg-slate-200'>
        <div className='flex flex-row justify-between'>
        <h1>Core Assets</h1>
        </div>
     <TableContainer  className='table-width all-font' component={Paper}>
      <Table  aria-label="table">
        <TableHead>
          <TableRow>
            <TableCell><h1 className='text-lg'>Asset</h1></TableCell>
            <TableCell align="center"><h1 className='text-lg'>Market</h1></TableCell>
            <TableCell align="center"><h1 className='text-lg'>Borrowed</h1></TableCell>
            <TableCell align="center"><h1 className='text-lg'></h1></TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
             <TableCell  align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    </div>
  )
}
