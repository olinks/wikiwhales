import React from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { IconContext } from "react-icons/lib"
function Pagination() {
  return (
    <div>
     <div className="flex justify-center items-center gap-[10px] mt-10 mb-20">
     <IconContext.Provider value={{ color: "black", size: "20px" }}>
     <button className="p-[9px] bg-[#D5D7E6] rounded-[4px] font-inter font-normal text-[12px]">First</button>
        <div className='p-[8px] bg-[#D5D7E6] flex justify-center items-center rounded-[4px]'>
          <FiChevronLeft />
        </div>
        <button className="p-[9px] bg-[#D5D7E6] rounded-[4px] font-inter font-normal text-[12px]">Page 1 of 10</button>
        <div className='p-[8px] bg-[#D5D7E6] flex justify-center items-center rounded-[4px]'>
          <FiChevronRight />
        </div>
      </IconContext.Provider>

   
      <button className="p-[9px] bg-[#D5D7E6] rounded-[4px] font-inter font-normal text-[12px]">Last</button>
    </div>
     </div>
  )
}

export default Pagination
