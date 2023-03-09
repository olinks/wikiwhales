import React from "react"
import { IconContext } from "react-icons/lib"
import { RiSearchLine } from "react-icons/ri"
import defi from "../assets/Defi.png"
import wiki from "../assets/Wiki.png"

function Whale() {
  return (
    <div className='sm:px-32 px-4 mt-10'>
      <IconContext.Provider value={{ size: "20px", color: "#3C3E4D" }}>
       <div className="mb-10">
       <h2 className='font-space font-normal text-[40px] text-white'>
          whale watch
        </h2>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
          <p className='font-light text-[14px] text-[#838699] w-[350px]'>
            A little description here. A town hall different. from balablu bluu
            blue, bulaba. What will they eat. Corn, cassava, Agbado.{" "}
          </p>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            <RiSearchLine className='' />
            <input
              type='text'
              className='bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
              placeholder='Enter Coin Name / Address'
            />
          </div>
        </div>
       </div>
      </IconContext.Provider>
      <div className="mb-8 ">
        <h5 className='font-inter text-[#F6F6F6] text-[12px] mb-2'>
          Select a Token
        </h5>
        <div className='flex sm:gap-4 gap-3 items-end'>
          <button className='font-inter w-[107px] h-[44px] bg-white  text-[12px] sm:text-[14px] font-bold rounded-[10px] text-[#13141A] flex gap-1 justify-center items-center'>
            <span>
              <img src={wiki} alt='' />
            </span>
            Wiki Cat
          </button>
          <button className='font-inter w-[107px] h-[44px] border border-[#3C3E4D]  text-[12px] sm:text-[14px]font-bold rounded-[10px] text-[#3C3E4D] flex gap-1 justify-center items-center'>
            <span>
              <img src={defi} alt='' />
            </span>
            Defi Tiger
          </button>
          <h5 className='font-inter underline text-[12px] text-[#F6F6F6]'>
            And 8 other token...
          </h5>
        </div>
      </div>
      
    </div>
  )
}

export default Whale
