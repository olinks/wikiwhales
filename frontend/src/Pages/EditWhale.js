import React, { useState, useEffect } from "react"
import { Detailss } from "../data/data"
import { Details } from "../data/data"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

import { BsArrowLeft } from "react-icons/bs"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import { IconContext } from "react-icons/lib"
import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import convertToCurrency from "../components/convertToCurrency";

function EditWhale() {
  const { id } = useParams()
  const details = Detailss.find((details) => details.id === id)
  const [holderData, setHolderData] = useState({});
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#1A1B23",

    boxShadow: 24,
    p: 4,
  }
  const handleClick = () => {
    navigate("/")
  }
  const [editedUsername, setEditedUsername] = useState("");
  const [editedPhone, setEditedPhone] = useState("");
  const [editedBalance, setEditedBalance] = useState("");
  const [editedAddress, setEditedAddress] = useState("");
  const [price, setPrice] = useState('');
  useEffect(() => {
    axios.get('https://wikiwhales-server.vercel.app/api/getWikicatData')
    .then((res) => {
    setPrice((res.data.usd));
    })
    },[]);
  const submitEdit = () =>{
    alert("Submitting....");
    axios.post('https://wikiwhales-server.vercel.app/api/insertHolderInfo',{username: editedUsername, address: editedAddress, balance: editedBalance, phone: editedPhone})
    // axios.post('http://localhost:3001/api/insertHolderInfo',{username: username, address: address, balance: balance, phone: phone})
    .then((res) =>{
      console.log(res.data);
    });
  }
  useEffect(() => {
    // axios.get(`http://localhost:3001/api/getHolderById/${id}`)
    axios.get(`https://wikiwhales-server.vercel.app/api/getHolderById/${id}`)
    .then((res) => {
      setHolderData(res.data[0]);
      setEditedAddress(holderData.address);
      console.log(holderData);
    });
  })
  return (
    <div>
      <Header />
      <div className='px-5 md:px-32 mt-5 '>
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          <BsArrowLeft onClick={handleClick} />
        </IconContext.Provider>
        <div className=' w-[100%] sm:w-[708px]  h-[260px] sm:h-[298px] bg-[#1A1B23] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-7 mt-5'>
          <div className=' '>
            <div>
              <h5 className='text-[#838699] text-[14px]  font-normal '>
                Address
              </h5>
              <h4 className='font-space font-bold text-[12px] sm:text-[32px] text-dimWhite mt-2 border-b border-[#41434F] pb-1 overme '>
                {holderData.address}
              </h4>
            </div>
            <div className='mt-1'>
              <h5 className='text-[#838699] text-[14px]  font-normal '>
                Username
              </h5>
              <h4 className='font-space font-bold text-[16px] sm:text-[20px] text-dimWhite mt-1 '>
                {holderData.username}
              </h4>
            </div>
            <div className='mt-2'>
              <h5 className='text-[#838699] text-[14px]  font-normal '>
                Phonenumber
              </h5>
              <h4 className='font-space font-bold text-[16px] sm:text-[20px] text-dimWhite mt-1 '>
                {holderData.phone}
              </h4>
            </div>
            <button
              onClick={handleOpen}
              className='font-inter text-[14px] sm:text-[20px] mt-2  font-bold text-white w-[77px] sm:w-[129px] sm:h-[49px] h-[43px]  flex justify-center items-center bg-[#5253E9] rounded-[10px]'
            >
              Edit
            </button>
          </div>
        </div>

        <Modal
          aria-labelledby='transition-modal-title'
          aria-describedby='transition-modal-description'
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography
                id='transition-modal-title'
                variant='h6'
                component='h2'
              >
                <div className=' w-[100%]   h-[300px] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-7 mt-5'>
                  <div className=' '>
                    <div>
                      <h5 className='text-[#838699] text-[14px]  font-normal '>
                        Address
                      </h5>
                      <h4 className='font-space font-bold text-[16px] text-dimWhite mt-2 border-b border-[#41434F] pb-1  overmee'>
                        {holderData.address}
                      </h4>
                    </div>
                    <div className='mt-1 mb-2'>
                      <h5 className='text-[#838699] text-[14px]  font-normal mb-2 '>
                        Username
                      </h5>
                      <div className='flex w-[100%]] justify-start pl-2 rounded-[8px] items-center h-[36px] border-[1px] border-[#838699]'>
                        <input
                          type='text'
                          className='bg-transparent pl-1 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D] text-[16px]'
                          placeholder='Username...'
                          value={holderData.username}
                        />
                      </div>
                    </div>
                    <div className='mt-1 mb-3'>
                      <h5 className='text-[#838699] text-[14px]  font-normal mb-2 '>
                        Phone Number
                      </h5>
                      <div className='flex w-[100%]  justify-start pl-2 rounded-[8px] items-center h-[36px] border-[1px]  border-[#838699]'>
                        <input
                          type='text'
                          className='bg-transparent pl-1 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D] text-[16px]'
                          placeholder='Enter Phone Number'
                          value={holderData.phone}
                        />
                      </div>
                    </div>

                    <button
                    onClick={submitEdit}
                    className='font-inter text-[14px] mt-3 font-bold text-white w-[77px] h-[33px]  flex justify-center items-center bg-[#5253E9] rounded-[10px]'>
                      Save
                    </button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Fade>
        </Modal>

        <div className=' w-[100%] sm:w-[698px] h-[108px] border border-[#3C3E4D] rounded-[10px] p-4  mt-4 '>
          <h5 className='text-[12px] font-inter font-normal text-[#838699]'>
            Balance
          </h5>
          <h4 className='font-space text-[#F6F6F6] text-[20px] font-bold'>
            {convertToCurrency((holderData.balance / 10**18).toFixed(2))} WKC
          </h4>
          <h4 className='font-space text-[#838699] text-[16px] font-normal mt-1'>
            ${convertToCurrency(((row.balance * price) /10**18).toFixed(2))}
          </h4>
        </div>
      </div>

      <div className='mt-10 pl-5 md:px-32  overflow-x-scroll sm:overflow-hidden'>
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
              className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px] md:pl-[27px] pr-7'
            >
              {" "}
           Type
            </td>
            <td
              style={{ width: "254px" }}
              className='text-[10px] sm:text-[12px]  lg:text-[14px]  font-inter font-normal text-white lg:pl-[40px]'
            >
              {" "}
From
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
          {Details.map((detail) => {
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
                  className='sm:text-[12px] pr-7 md:pr-[-28px] md:pl-[27px] lg:text-[14px] lg:pr-[40px] lg:pl-[40px] text-[10px] font-inter font-normal text-white'
                >
                  {detail.type}
                </td>
                <td
                  style={{
                    width: "234px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }}
                  className='sm:text-[12px] pr-7 md:pr-[-28px] lg:text-[14px] lg:pr-[40px]  lg:pl-[40px] text-[10px] font-inter font-normal text-[#21D4AF]'
                >
                  {" "}
                  {detail.address}
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
    </div>
  )
}

export default EditWhale
