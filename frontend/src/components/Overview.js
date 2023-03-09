import React,{useEffect, useState} from "react"
import wiki1 from "../assets/Wiki1.png"
import { Whales } from "../data/data"
import axios from 'axios'
function Overview() {
  const [tokenSupply, setTokenSupply] = useState("");
  useEffect(() =>{

    // axios.get('http://localhost:3001/api/getTokenSupply')
    axios.get('https://wikiwhales-server.vercel.app/api/getTokenSupply')
    .then((res) => {
      setTokenSupply(res.data);
    });

  },[tokenSupply]);
  
  return (
    <div className='sm:px-32 px-4  mb-14'>
      <div>
        <h5 className='font-inter text-[#F6F6F6] text-[12px] my-2'>
          Token Overview for WIki Cat
        </h5>
      </div>
      <div className='flex sm:flex-row flex-col justify-between items-center lg:gap-4'>
        <div className=' w-[100%] sm:w-[335px] lg:h-[181px] h-[175px] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-7'>
          <div className='flex flex-row gap-[10px] relative  '>
            <img className='lg:w-[74px] w-[60px]' src={wiki1} alt='' />
            <div>
              <h5 className='text-[#838699] text-[14px]  font-normal'>
                Current token Price
              </h5>
              <h4 className='font-space font-bold text-[20px] lg:text-[32px] text-dimWhite mt-2'>
                $0.00000088
              </h4>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h5 className='text-[#838699] text-[11px] lg:text-[12px]  font-normal mt-4'>
                Fully diluted market cap
              </h5>
              <h5 className='text-[16px] font-space text-white font-normal mt-2'>
                $13,898,655.05
              </h5>
            </div>
            <div className='flex items-center gap-3'>
              <button className='text-[10px] font-inter text-[#FDFEFF] uppercase flex justify-center items-center w-[44px] h-[16px] border border-[#5253E9] rounded-[4px]'>
                token
              </button>
              <button className='text-[10px] font-inter text-[#FDFEFF] uppercase flex justify-center items-center w-[44px] h-[16px] border border-[#5253E9] rounded-[4px]'>
                BEP 20
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row flex-wrap w-[100%] mt-3 sm:mt-0  sm:w-[800px] lg:w-[550px] sm:px-4 px-0  gap-4'>
                <div className=' sm:w-[220px] h-[82px] border border-[#3C3E4D] rounded-[10px] p-4'>
                <h5 className='text-[12px] font-inter font-normal text-[#838699]'>
                  API Token Supply
                </h5>
                <h4 className='font-space text-[#F6F6F6] text-[16px] font-bold'>
                  {(tokenSupply/(10 ** 18)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h4>
              </div>
          {Whales.map((items, i) => {
            return (
              <div key={i} className=' sm:w-[220px] h-[82px] border border-[#3C3E4D] rounded-[10px] p-4'>
                <h5 className='text-[12px] font-inter font-normal text-[#838699]'>
                  {items.title}
                </h5>
                <h4 className='font-space text-[#F6F6F6] text-[20px] font-bold'>
                  {items.amount}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Overview
