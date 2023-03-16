import React,{useState, useEffect} from "react";
import DataTable, { createTheme } from 'react-data-table-component';
import axios from 'axios';
import { Link } from "react-router-dom";
import convertToCurrency from "./convertToCurrency";

function MyDatatable (){
    const [holderslist, setHoldersList] = useState([]);
    const tokenSupply = 889167211299568.1;

    useEffect(() => {
        axios.get('https://wikiwhales-server.vercel.app/api/getWhales')
        .then((res) => {
        setHoldersList(res.data);
        console.log(res.data);
        })
    },[])

    const [price, setPrice] = useState('');
    useEffect(() => {
        axios.get('https://wikiwhales-server.vercel.app/api/getWikicatData')
        .then((res) => {
        setPrice((res.data.usd));
        })
    },[])
    
    // Columns to initialize react-data-table-component
    const columns = [
        {
            name: "Rank",
            selector: row => row.id,
            sortable: true,
            maxWidth: '10px',
            cell: row => (<h5 className="w-[33px] text-white sm:text-[16px] text-[16px] lg:text-[16px]">{row.id}</h5>),
        },
        {
            name: "Username",
            selector: row => row.username,
            sortable: true,
            maxWidth: '170px',
            cell: row => (
                <h5 className=" sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-[#21D4AF] overme">
                    <Link to={`details/${row.id}`}>{row.username}</Link>
                </h5>
                ),
        },
        {
            name: "Address",
            selector: row => row.address,
            sortable: true,
            maxWidth: "250px",
            cell: row => (
                <h5 className='w-[287px] sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-[#21D4AF] '>
                    <Link to={`details/${row.id}`}>{row.address.slice(0,20)}...</Link>
                </h5>
            ),
        },
        {
            name: "Balance",
            selector: row => row.balance,
            sortable: true,
            maxWidth: "250px",
            cell: row => (
                <h5 className='w-[200px] sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-white '>
                {/* {(row.balance / 10**18).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
                {convertToCurrency((row.balance / 10**18).toFixed(2))}
                </h5>
            ),

        },
        {
            name:"Percentage",
            selector: row => row.percentage,
            sortable: true,
            maxWidth: "50px",
            cell: row =>(
                <h5 className='sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-white'>
                    {((((row.balance) / (10**18) )/tokenSupply)*100).toFixed(2)}%
                </h5>
            )
        },
        {
            name:"Value",
            selector: row => row.value,
            sortable: true,
            maxWidth: "180px",
            cell: row => (
                <h5 className='sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-white'>
                    ${convertToCurrency(((row.balance * price) /10**18).toFixed(2))}
                </h5>
            ),
        }
    ];
    const paginationOptions = {
        rowsPerPageText: 'Rows per page:',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
    };
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

    return(
        <div>
            <div className="sm:px-5 mx-20">
                <DataTable className="mx-5"
                title="Whales"
                    columns={columns}
                    data={holderslist}
                    fixedHeader
                    pagination
                    paginationPerPage={25}
                    paginationComponentOptions={paginationOptions}
                    theme="solarized"
                    highlightOnHover="true"
                    >
                </DataTable>
            </div>
        </div>
    );
}
export default MyDatatable;