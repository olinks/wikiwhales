import React, {useState, useEffect} from "react"
import axios from 'axios'
import { Detailss } from "../data/data"

function Details() {
  const [holderslist, setHoldersList] = useState([]);
  // coinmarketcap API
  // https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD
  useEffect(() => {
    axios.get('https://wikiwhales-server.vercel.app/api/getAllHolders')
    .then((res) => {
      setHoldersList(res.data);
    })
  },[])
  return (
    <div className='px-4 sm:px-32'>
      <div className='flex  gap-[40px] bg-[#101116] py-1  pl-[10px]'>
        <h5 className='w-[33px] text-white sm:text-[12px] lg:text-[14px] text-[8px]'>
          {" "}
          Rank
        </h5>
        <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
          Username
        </h5>
        <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
          Address
        </h5>
        <h5 className='w-[234px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white '>
          Quantity
        </h5>
        <h5 className='w-[125px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
          Percentage
        </h5>
        <h5 className='w-[109px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
          Value
        </h5>
      </div>

      <ul>
        {/* {Detailss.map((items,i) => { */}
        {holderslist.map((items,i) => {
          const balance = (items.balance)/(10**18);
          return (
            <li key={i} className='flex gap-[10px] sm:gap-[40px] border-b-[1px] border-[#3C3E4D] py-4 pl-[10px]'>
              <h5 className='w-[33px] text-white sm:text-[12px] text-[8px] lg:text-[14px] '>
                {items.id}
              </h5>
              <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-[#21D4AF] overme'>
                {items.username}
              </h5>
              <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-[#21D4AF] overme'>
                {items.address}
              </h5>
              <h5 className='w-[234px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white '>
                {balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
              <h5 className='w-[125px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
                {((balance/(890454713676652.79)) * 100).toFixed(2)} %
              </h5>
              <h5 className='w-[109px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
                ${(balance*(0.00000002)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h5>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Details
