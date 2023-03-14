import React from "react"
import { IconContext } from "react-icons/lib"
import { RiSearchLine } from "react-icons/ri"
// import defi from "../assets/Defi.png"
import wiki from "../assets/Wiki.png"
import { useNavigate } from "react-router-dom"
function Whale() {
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/add-whales')
  }
  return (
    <div className='md:px-32 px-4 mt-10'>
      <IconContext.Provider value={{ size: "20px", color: "#3C3E4D" }}>
       <div className="mb-10">
       <h2 className='font-space font-normal text-[40px] text-white'>
          whale watch
        </h2>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
          <p className='font-light text-[14px] text-[#838699] w-[100%] sm:w-[350px]'>
            A list of all Worthy Wikicat Holders{" "}
          </p>
          <div className='flex w-[100%] sm:w-[387px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
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
          {/* <button className='font-inter w-[107px] h-[44px] border border-[#3C3E4D]  text-[12px] sm:text-[14px]font-bold rounded-[10px] text-[#3C3E4D] flex gap-1 justify-center items-center'>
            <span>
              <img src={defi} alt='' />
            </span>
            Defi Tiger
          </button> */}
          <button onClick={handleClick} className='ont-inter w-[107px] h-[44px] bg-[#21D4AF]  text-[12px]  sm:text-[14px] font-bold rounded-[10px] text-[#13141A] flex justify-center items-center'>
        + Add Whale
      </button>
        </div>
      </div>
      
    </div>
  )
}

export default Whale
