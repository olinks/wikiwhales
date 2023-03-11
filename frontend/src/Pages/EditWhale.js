import React from "react"
import { Detailss } from "../data/data"
import { useParams } from "react-router-dom"
function EditWhale() {
  const { id } = useParams()
  const details = Detailss.find((details) => details.id === id)

  return (
    <div>
      <div className='flex justify-center items-center h-[100vh]'>
        <div className='flex flex-col gap-3 text-white'>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.address}
          </div>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.quantity}
          </div>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.percentage}
          </div>
          <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
            {details.value}
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditWhale
