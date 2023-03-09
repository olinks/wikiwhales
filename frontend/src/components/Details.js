import React, {useState, useEffect} from "react"
import axios from 'axios'
import { Detailss } from "../data/data"

function Details() {
  const [holderslist, setHoldersList] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/getAllHolders')
    .then((res) => {
      setHoldersList(res.data);
    })
  },[])
  return (
    <div className='px-4 sm:px-32'>
      <h2 className="text-white font-space font-bold text-[20px] lg:text-[32px] text-dimWhite mt-2">Whales</h2>
      <div className='flex  gap-[40px] bg-[#101116] py-1  pl-[10px]'>
        <h5 className='w-[33px] text-white sm:text-[12px] lg:text-[14px] text-[8px]'>
          {" "}
          Rank
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
        {Detailss.map((items,i) => {
          return (
            <li key={i} className='flex gap-[10px] sm:gap-[40px] border-b-[1px] border-[#3C3E4D] py-4 pl-[10px]'>
              <h5 className='w-[33px] text-white sm:text-[12px] text-[8px] lg:text-[14px] '>
                {items.id}
              </h5>
              <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-[#21D4AF] overme'>
                {items.address}
              </h5>
              <h5 className='w-[234px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white '>
                {items.quantity}
              </h5>
              <h5 className='w-[125px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
                {items.percentage}
              </h5>
              <h5 className='w-[109px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
                {items.value}
              </h5>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Details
