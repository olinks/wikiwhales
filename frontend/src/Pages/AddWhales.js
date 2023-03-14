import React from "react"

import { RiSearchLine } from "react-icons/ri"
import { AiOutlineUser, AiOutlineCopy, AiOutlinePhone } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import { IconContext } from "react-icons/lib"

function AddWhales() {
  return (
    <div>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <div className='px-4 flex justify-center items-center flex-col w-[100%] h-[100vh]'>
          <h2 className='font-bold text-white text-[30px] font-lexend'>
            ADD TO WHALES
          </h2>
          <div className='flex flex-col gap-3'>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlineUser className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                placeholder='Username'
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <BsCurrencyDollar className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                placeholder='Balance'
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlineCopy className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                placeholder='Address'
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlinePhone className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                placeholder='Phone Number'
              />
            </div>
          </div>
          <div className='flex w-[350px] justify-between mt-5'>
            <button className='font-inter w-[107px] h-[44px] bg-white  text-[12px] sm:text-[14px] font-bold rounded-[10px] text-[#13141A] flex gap-1 justify-center items-center'>
              Cancel
            </button>
            <button className='font-inter w-[107px] h-[44px] border border-[#3C3E4D]  text-[12px] sm:text-[14px]font-bold rounded-[10px] text-[#3C3E4D] flex gap-1 justify-center items-center'>
              Submit
            </button>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default AddWhales
