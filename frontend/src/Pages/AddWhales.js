import React,{useState} from "react"
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineCopy, AiOutlinePhone } from "react-icons/ai"
import { BsCurrencyDollar } from "react-icons/bs"
import { IconContext } from "react-icons/lib"
import axios from "axios"

function AddWhales() {
  const [currentBalance,setCurrentBalance] = useState([]);
  const [username,setUsername] = useState("");
  const [balance,setBalance] = useState("0");
  const [address,setAddress] = useState("");
const [phone,setPhone] = useState("");
  function fetchbalance (e){
    const addy = e.target.value;
    axios.get(`https://wikiwhales-server.vercel.app/api/getHolderBalance/${addy}`)
    .then((result) => {
      setCurrentBalance(result.data);
    });

  }

  function submitWhale(e){
    e.preventDefault();
    alert("Submitted");
    // axios.post('https://wikiwhales-server.vercel.app/api/insertHolderInfo',{username: username, address: address, balance: balance, phone: phone})
    axios.post('http://localhost:3001/api/insertHolderInfo',{username: username, address: address, balance: balance, phone: phone})
    .then((res) =>{
      console.log(res);
      alert('Saved');
    });
  }
  return (
    <div>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <div className='px-4 flex justify-center items-center flex-col w-[100%] h-[100vh]'>
          <h2 className='font-bold text-white text-[30px] font-lexend'>
            ADD TO WHALES
          </h2>
            <form onSubmit={submitWhale} >
          <div className='flex flex-col gap-3'>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlineUser className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#b5b5b5] w-[100%] placeholder:text-[#3C3E4D]'
                name="username"
                placeholder='Username'
                required
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlineCopy className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#b5b5b5] w-[100%] placeholder:text-[#3C3E4D]'
                name="address"
                placeholder='Address'
                onKeyUp={fetchbalance}
                required
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <BsCurrencyDollar className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#b5b5b5] w-[100%] placeholder:text-[#3C3E4D]'
                name="balance"
                value={((currentBalance)/(10**18)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                placeholder='Balance'
                onChange={(e) => {
                  setBalance(e.target.value);
                }}
                readOnly
              />
            </div>
            <div className='flex w-[350px] sm:w-[397px] justify-start pl-2 rounded-[8px] items-center h-[39px] border-[1px] mt-3 sm:mt-0 border-[#838699]'>
              <AiOutlinePhone className='' />
              <input
                type='text'
                className='bg-transparent pl-3 outline-none text-[#b5b5b5] w-[100%] placeholder:text-[#3C3E4D]'
                name="phone"
                placeholder='Phone Number'
                required
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
          </div>
          <div className='flex w-[400px] justify-between mt-5'>
            <Link to={'/'} className='font-inter w-[107px] h-[44px] border border-[#3C3E4D]  text-[12px] sm:text-[14px]font-bold rounded-[10px] text-[#3C3E4D] flex gap-1 justify-center items-center'>
              Cancel
            </Link>
            <button type="submit" className='font-inter w-[107px] h-[44px] bg-[#21D4AF]  text-[12px] sm:text-[14px] font-bold rounded-[10px] text-[#3C3E4D] flex gap-1 justify-center items-center'>
              Submit
            </button>
          </div>
            </form>
        </div>
      </IconContext.Provider>
    </div>
  )
}

export default AddWhales
