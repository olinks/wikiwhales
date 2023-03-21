import React, {useEffect, useState} from "react"
import axios from 'axios'
import wiki1 from "../assets/Wiki1.png"
import convertToDecimal from "./convertToDecimal"
function Overview() {
  const [price, setPrice] = useState('');
  const [change, setChange] = useState('');
  useEffect(() => {
    axios.get('https://wikiwhales-server.vercel.app/api/getWikicatData')
    .then((res) => {
    setPrice((res.data.usd));
    setChange((res.data.usd_24h_change));
    })
    },[])

  const [tokenSupply, setTokenSupply] = useState("");
  const [tokenCSupply, setTokenCSupply] = useState("");
  useEffect(() =>{

    axios.get('https://wikiwhales-server.vercel.app/api/getTokenSupply')
    .then((res) => {
      setTokenSupply(res.data);
    });

    axios.get('https://wikiwhales-server.vercel.app/api/getTokenCirculatingSupply')
    .then((res) => {
      setTokenCSupply(res.data);
    });

  },[tokenSupply,tokenCSupply]);
  
  return (
    <div className='md:px-32 px-4   mb-14'>
      <div className="w-[100%]">
        <h5 className='font-inter text-[#F6F6F6] text-[12px] my-2 text-center sm:text-start sm:mb-2 mb-3'>
          Token Overview for WIki Cat
        </h5>
      </div>
      <div className='flex sm:flex-row flex-col justify-between items-center sm:gap-3 lg:gap-4'>
        <div className=' w-[100%] sm:w-[335px] lg:h-[181px] h-[175px] bg-[#1A1B23] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-7'>
          <div className='flex flex-row gap-[10px] relative  '>
            <img className='lg:w-[74px] w-[60px]' src={wiki1} alt='' />
            <div>
              <h5 className='text-[#838699] text-[14px]  font-normal'>
                Current token Price 
                {
                  change > 0 ? <i className='m-2 font-space font-bold text-[green]'>+{Number(change).toFixed(2)}%</i> : <i className='m-2 font-space font-bold text-[red]'>{Number(change).toFixed(2)}%</i>
                }
              </h5>
              <h4 className='font-space font-bold text-[20px] lg:text-[32px] text-dimWhite mt-2'>
                ${convertToDecimal(price)}
              </h4>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <h5 className='text-[#838699] text-[11px] lg:text-[12px]  font-normal mt-4'>
                Fully diluted market cap
              </h5>
              <h5 className='text-[16px] font-space text-white font-normal mt-2'>
                $8,712,705.81
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
                    Token Supply
                  </h5>
                  <h4 className='font-space text-[#F6F6F6] text-[16px] font-bold'>
                    {(tokenSupply/(10 ** 18)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
              </div>

                <div className=' sm:w-[220px] h-[82px] border border-[#3C3E4D] rounded-[10px] p-4'>
                  <h5 className='text-[12px] font-inter font-normal text-[#838699]'>
                    Circulating Supply
                  </h5>
                  <h4 className='font-space text-[#F6F6F6] text-[16px] font-bold'>
                    {(tokenCSupply/(10 ** 18)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h4>
              </div>

                <div className=' sm:w-[220px] h-[82px] border border-[#3C3E4D] rounded-[10px] p-4'>
                  <h5 className='text-[12px] font-inter font-normal text-[#838699]'>
                    Number Of Holders
                  </h5>
                  <h4 className='font-space text-[#F6F6F6] text-[16px] font-bold'>
                    38K Holders{""}
                  </h4>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
