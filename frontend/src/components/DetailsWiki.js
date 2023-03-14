import React from "react"
import { Detailss } from "../data/data"
import { Link } from "react-router-dom"

function Details() {
  return (
    <div className='md:px-32 px-5 overflow-x-scroll sm:overflow-hidden'>
      <table style={{}}>
        <tr className='bg-[#101116] '>
          <td
            style={{
              width: "53px",
              paddingTop: "3px",
              paddingBottom: "3px",
              paddingLeft: "6px",
            }}
            className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white'
          >
            Rank
          </td>
          <td
            style={{ width: "307px" }}
            className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px] md:pl-[27px]'
          >
            {" "}
            Address
          </td>
          <td
            style={{ width: "254px" }}
            className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]'
          >
            {" "}
            Quantity
          </td>
          <td
            style={{ width: "145px" }}
            className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]'
          >
            {" "}
            Percentage
          </td>
          <td
            style={{ width: "129px" }}
            className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]  md:pl-[40px] md:pr-[60px]'
          >
            Value
          </td>
        </tr>
        {Detailss.map((detail) => {
          return (
            <tr key={detail.id} style={{ borderBottom: "1px solid #3C3E4D" }}>
              <td
                style={{
                  width: "33px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className='sm:text-[12px] lg:pr-[40px] md:pl-[10px] lg:pl-[20px] lg:text-[14px] text-[10px] font-inter font-normal text-white'
              >
                {detail.id}
              </td>
              <td
                style={{
                  width: "287px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className='sm:text-[12px] pr-7 md:pr-[-28px] md:pl-[27px] lg:text-[14px] lg:pr-[40px] lg:pl-[40px] text-[10px] font-inter font-normal text-[#21D4AF]'
              >
                <Link to={`details/${detail.id}`}>{detail.address}</Link>
              </td>
              <td
                style={{
                  width: "234px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className='sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px]  lg:pl-[40px] text-[10px] font-inter font-normal text-white'
              >
                {" "}
                {detail.quantity}
              </td>
              <td
                style={{
                  width: "125px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className='sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px] text-[10px] lg:pl-[40px] font-inter font-normal text-white'
              >
                {" "}
                {detail.percentage}
              </td>
              <td
                style={{
                  width: "109px",
                  paddingTop: "12px",
                  paddingBottom: "12px",
                }}
                className='sm:text-[12px] pr-7  lg:text-[14px] lg:pr-[120px] md:pl-[40px] md:pr-[60px] lg:pl-[80px] text-[10px] font-inter font-normal text-white'
              >
                {" "}
                {detail.value}
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default Details
