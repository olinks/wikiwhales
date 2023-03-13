import React,{useState, useEffect} from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios'
import { Link } from "react-router-dom"

function Data_tables (){
    const [holderslist, setHoldersList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/getWhales')
        .then((res) => {
        setHoldersList(res.data);
        })
    },[])

    // const linkto = ({row}) => {
    //     <Link to={`details/${row.id}`}>{row.username}</Link>
    // }

    const columns = [
        {
            name: "Rank",
            selector: row => row.rank,
            sortable: true,
            cell: row => (<h5 className="w-[33px] text-white sm:text-[12px] text-[8px] lg:text-[14px]">{row.rank}</h5>),
        },
        {
            name: "Username",
            selector: row => row.username,
            sortable: true,
            cell: row => (
                <h5 className="w-[33px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-[#21D4AF] overme">
                    <Link to={`details/${row.id}`}>{row.username}</Link>
                </h5>
                ),
        },
        {
            name: "Address",
            selector: row => row.address,
            sortable: true,
            cell: row => (
                <h5 className='w-[287px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-[#21D4AF] '>
                    <Link to={`details/${row.id}`}>{row.address.slice(0,14)}...</Link>
                </h5>
            ),
        },
        {
            name: "Balance",
            selector: row => row.balance,
            sortable: true,
            cell: row => (
                <h5 className='w-[234px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white '>
                {row.balance}
                </h5>
            ),

        },
        {
            name:"Percentage",
            selector: row => row.percentage,
            sortable: true,
            cell: row =>(
                <h5 className='w-[125px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
                    {row.percentage}
                </h5>
            )
        },
        {
            name:"Value",
            selector: row => row.value,
            sortable: true,
            cell: row => (
                <h5 className='w-[109px] sm:text-[12px] lg:text-[14px] text-[8px] font-inter font-normal text-white'>
                    {row.value}
                </h5>
            ),
        }
    ];
    const data = [
        {
            id:1,
            rank: "1",
            username: "olinks1",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "100000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
        ,
        {
            id:2,
            rank: "2",
            username: "olinks",
            address: "0xb552cf92e761c8c71f8de52ed10b0df6",
            balance: "9000000000",
            percentage: "33.6812%",
            value: "$5,310,002.80"
        }
    ];
    createTheme('solarized', {
  text: {
    primary: 'white',
    secondary: '#21D4AF',
  },
  background: {
    default: 'transparent',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#3C3E4D',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

const customstyles = {
    rows:{
        style :{
            fontSize: '44px',
        }
    }
}
    return(
        <div>
            <div className="sm:px-5 lg:px-20">
                <DataTable
                title="Olinks"
                    columns={columns}
                    data={data}
                    fixedHeader
                    pagination
                    theme="solarized"
                    highlightOnHover="true"
                    >
                </DataTable>
            </div>
        </div>
    );
}
export default Data_tables;