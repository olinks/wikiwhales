import React from "react"

import { RiSearchLine } from "react-icons/ri"
import { AiOutlineUser, AiOutlineCopy, AiOutlinePhone } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import { IconContext } from "react-icons/lib"
import axios from "axios"

function AddWhales() {
  function fetchbalance (e){
    const addy = e.target.value;
    axios.get()
    .then((result) => {

    });
  }
  return (
    <div>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <div className='px-4 flex justify-center items-center flex-col h-[100vh]'>
          <h2 className='font-bold text-white text-[30px] font-lexend'>
            ADD TO WHALES
          </h2>
          <div className="flex flex-col gap-3">
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlineUser className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                name="username"
                placeholder='Username'
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <BsCurrencyDollar className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                name="balance"
                placeholder='Balance'
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlineCopy className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                name="address"
                placeholder='Address'
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlinePhone className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                name="phone"
                placeholder='Phone Number'
              />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default AddWhales
