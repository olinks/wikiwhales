import React, {useState} from "react"
import axios from 'axios'
import { IconContext } from "react-icons/lib"
import { RiSearchLine } from "react-icons/ri"
// import defi from "../assets/Defi.png"
import wiki from "../assets/Wiki.png"

import Backdrop from "@mui/material/Backdrop"
import Box from "@mui/material/Box"
import Modal from "@mui/material/Modal"
import Fade from "@mui/material/Fade"

import Typography from "@mui/material/Typography"
import { AiOutlineUser, AiOutlineCopy, AiOutlinePhone } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
function Whale() {

  const [username,setUsername] = useState("");
  const [balance,setBalance] = useState("0");
  const [address,setAddress] = useState("");
  const [phone,setPhone] = useState("");


   const redirectToPage = (i) =>{
    // Navigate(`/${i}`);
    window.location.href =`/details/${i}`;
  }

  function submitWhale(e){
    e.preventDefault();
    alert("Submitting....");
    axios.post('https://wikiwhales-server.vercel.app/api/insertHolderInfo',{username: username, address: address, balance: balance, phone: phone})
    // axios.post('http://localhost:3001/api/insertHolderInfo',{username: username, address: address, balance: balance, phone: phone})
    .then((res) =>{
      console.log(res);
      console.log("data =>{");
      console.log(res.data);
      console.log("insertId =>{");
      console.log(res.data.insertId);
      const id = res.data.insertId;
      // if(res.data.status == 200){
        alert("successfully added");
        redirectToPage(id);
      // }
    });
  }
  function fetchbalance (e){
    const addy = e.target.value;
    axios.get(`https://wikiwhales-server.vercel.app/api/getHolderBalance/${addy}`)
    // axios.get(`http://localhost:3001/api/getHolderBalance/0xb552cf92e761c8c71f8de52ed10b0df6dcfa24ff`)
    .then((result) => {
    setBalance(result.data);
    });
  }
 
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
  return (
    <div className='md:px-32 px-5 mt-10 '>
      <IconContext.Provider value={{ size: "20px", color: "#3C3E4D" }}>
       <div className="mb-10">
       <h2 className='font-space font-normal text-[40px] text-white text-center sm:text-start'>
          whale watch
        </h2>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
          <p className='font-light text-[14px] text-[#838699] w-[100%] sm:w-[350px] text-center sm:text-start sm:mb-0 mb-3 sm:px-0 px-4'>
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
      <div className='mb-8 w-[100%]'>
        <h5 className='font-inter text-[#F6F6F6] text-[12px]  text-center sm:text-start sm:mb-2 mb-3'>
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
          </button>
          <button
            onClick={handleOpen}
            className='font-inter w-[107px] h-[44px] bg-white  text-[12px]  sm:text-[14px] font-bold rounded-[10px] text-[#13141A] flex justify-center items-center'
          >
            Add Whale
          </button>
          </button> */}
          <button onClick={handleOpen} className='ont-inter w-[107px] h-[44px] bg-[#21D4AF]  text-[12px]  sm:text-[14px] font-bold rounded-[10px] text-[#13141A] flex justify-center items-center'>
        + Add Whale
      </button>

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
                  <div>
                    <IconContext.Provider
                      value={{ color: "white", size: "20px" }}
                    >
                      <div className=' w-[100%]   h-[480px] border border-[#5253E9] rounded-[20px] flex flex-col px-4 lg:py-6 py-5 mt-5'>
                        <h2 className='font-bold text-white text-[20px] mb-3 font-space'>
                          ADD TO WHALES
                        </h2>
                        <div className='flex flex-col gap-3'>
                          <h4 className='font-space text-[#838699] text-[12px]  font-normal '>
                          Username
                          </h4>
                          <div className='flex w-[100%] text-[16px]  justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px]  sm:mt-0 border-[#838699]'>
                            <AiOutlineUser className='' />
                            <input
                              type='text'
                              className='font-space bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                              name="username"
                              placeholder='Username'
                              required
                              onChange={(e) => {
                                setUsername(e.target.value);
                              }}
                            />
                          </div>
                          <h4 className='font-space text-[#838699] text-[12px]  font-normal '>
                          Address
                          </h4>
                          <div className='flex w-[100%] text-[16px]  justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px]  sm:mt-0 border-[#838699]'>
                            <AiOutlineCopy className='' />
                            <input
                              type='text'
                              className='font-space bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                              name="address"
                              placeholder='Address'
                              required
                              onChange={(e) => {
                                setAddress(e.target.value);
                              }}
                              onKeyUp={fetchbalance}
                            />
                          </div>
                          <h4 className='font-space text-[#838699] text-[12px]  font-normal '>
                          Token Balance
                          </h4>
                          <div className='flex w-[100%] text-[16px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px]  sm:mt-0 border-[#838699]'>
                            <BsCurrencyDollar className='' />
                            <input
                              type='text'
                              className='font-space bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                              name="balance"
                              value={((balance)/(10**18)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                              placeholder='Balance'
                              readOnly
                            />
                          </div>
                          <h4 className='font-space text-[#838699] text-[12px]  font-normal '>
                          Phone
                          </h4>
                          <div className='flex w-[100%] text-[16px]  justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px]  sm:mt-0 border-[#838699]'>
                            <AiOutlinePhone className='' />
                            <input
                              type='text'
                              className='font-space bg-transparent pl-3 outline-none text-[#3C3E4D] w-[100%] placeholder:text-[#3C3E4D]'
                              name="phone"
                              placeholder='Phone Number'
                              required
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className=' mt-3 flex justify-between w-[100%]'>
                          <button onClick={handleClose} className='font-inter text-[14px] mt-3 font-bold text-white w-[77px] h-[33px]  sm:w-[107px] sm:h-[44px]  flex justify-center items-center border border-[#5253E9] rounded-[10px]'>
                            Cancel
                          </button>
                          <button 
                          className='font-inter text-[14px] mt-3 font-bold text-white w-[77px] h-[33px]  sm:w-[107px] sm:h-[44px]  flex justify-center items-center bg-[#5253E9] rounded-[10px]'
                          onClick={submitWhale}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </IconContext.Provider>
                  </div>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Whale;
