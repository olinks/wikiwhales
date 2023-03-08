import React from "react"
import logo from "../assets/Logo.png"
function Header() {
  return (
    <div>
      <div className='flex justify-center items-center flex-row pt-10 pb-2 border-b-[1px]  border-[#3C3E4D]'>
        <div className="">
        <img src={logo} alt='' />
        </div>

        <hr className="hrr " />
        <div>
          <h2 className="font-lexend font-light text-white text-[18px] uppercase "><span className="font-bold">SMC</span>  Whale Watch</h2>
        </div>
      </div>
    </div>
  )
}

export default Header
