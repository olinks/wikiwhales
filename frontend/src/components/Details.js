import React from "react"
import { useNavigate,Link } from "react-router-dom"
import { Detailss } from "../data/data"

function Details() {
  
  return (
   
    <div className='px-4 sm:px-32'>
      
      <div className='flex  gap-[40px] bg-[#101116] py-1  pl-[10px]'>
        <h5 className='w-[33px] text-white sm:text-[12px] lg:text-[14px] text-[8px]'>
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
        {Detailss.map((items) => {
          return (
            <li className='flex gap-[10px] sm:gap-[40px] border-b-[1px] border-[#3C3E4D] py-4 pl-[10px]'>
              <h5 className='w-[33px] text-white sm:text-[12px] text-[8px] lg:text-[14px] '>
                {items._id}
              </h5>
              <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-[#21D4AF] overme'>
              <Link>  {items.address}</Link>
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
