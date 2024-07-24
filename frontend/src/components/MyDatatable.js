import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle, AiOutlineReload } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import convertToCurrency from "./convertToCurrency";

function MyDatatable() {
  const [holderslist, setHoldersList] = useState();
  const tokenSupply = 889167211299568.1;

  useEffect(() => {
    axios
      .get("https://wikiwhales-server.vercel.app/api/getWhales")
      .then((res) => {
        if (res.data.fatal) {
          setHoldersList(null);
          return;
        }
        setHoldersList(res.data);
      })
      .catch((e) => {
        console.log("fetching holders error", e);
      });
  });

  async function fetchbalance(e) {
    const addy = e;
    axios
      .get(`https://wikiwhales-server.vercel.app/api/getHolderBalance/${addy}`)
      .then((result) => {
        console.log("result", result.data);

        console.log(e);
        const newBal = result.data;
        axios
          .post(
            `https://wikiwhales-server.vercel.app/api/refreshHolderBalance`,
            { address: addy, balance: newBal }
          )
          .then((result) => {});
      });
  }
  async function deleteHolder(e) {
    const addy = e;
    axios
      .post(`https://wikiwhales-server.vercel.app/api/deleteHolder/`, {
        address: addy,
      })
      .then((result) => {
        alert("deleted");
      });
  }

  const [price, setPrice] = useState("");
  useEffect(() => {
    axios
      .get("https://wikiwhales-server.vercel.app/api/getWikicatData")
      .then((res) => {
        setPrice(res.data.usd);
      })
      .catch((e) => {
        console.log("Get Price error", e);
      });
  }, []);

  // Columns to initialize react-data-table-component
  const columns = [
    {
      name: "Rank",
      selector: (row) => row.id,
      sortable: true,
      maxWidth: "10px",
      cell: (row) => (
        <h5 className="w-[33px] text-white sm:text-[16px] text-[16px] lg:text-[16px]">
          {row.id}
        </h5>
      ),
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
      maxWidth: "170px",
      cell: (row) => (
        <h5 className=" sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-[#21D4AF] overme">
          <Link to={`details/${row.id}`}>{row.username}</Link>
        </h5>
      ),
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      maxWidth: "255px",
      cell: (row) => (
        <h5 className="w-[300px] sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-[#21D4AF] ">
          <Link to={`details/${row.id}`}>{row.address.slice(0, 19)}...</Link>
        </h5>
      ),
    },
    {
      name: "Balance",
      selector: (row) => row.balance,
      sortable: true,
      maxWidth: "250px",
      cell: (row) => (
        <h5 className="w-[230px] sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-white ">
          {/* {(row.balance / 10**18).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} */}
          {convertToCurrency((row.balance / 10 ** 18).toFixed(2))}
        </h5>
      ),
    },
    {
      name: "Percentage",
      selector: (row) => row.percentage,
      sortable: true,
      maxWidth: "50px",
      cell: (row) => (
        <h5 className="sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-white">
          {((row.balance / 10 ** 18 / tokenSupply) * 100).toFixed(2)}%
        </h5>
      ),
    },
    {
      name: "Value",
      selector: (row) => row.value,
      sortable: true,
      maxWidth: "180px",
      cell: (row) => (
        <h5 className="sm:text-[16px] lg:text-[16px] text-[16px] font-inter font-normal text-white">
          ${convertToCurrency(((row.balance * price) / 10 ** 18).toFixed(2))}
        </h5>
      ),
    },
    {
      name: "Actions",
      selector: (row) => row.value,
      cell: (row) => (
        <div>
          {/* Refresh button */}
          <button
            style={{ color: "#5253E9" }}
            className="m-2"
            onClick={() => {
              fetchbalance(row.address);
            }}
          >
            <AiOutlineReload
              style={{
                color: "#5253E9",
              }}
            />
          </button>
          {/* Delete Button */}
          <button
            className="m-2"
            onClick={() => {
              deleteHolder(row.address);
            }}
          >
            <AiOutlineCloseCircle
              style={{
                color: "#ed6969",
              }}
            />
          </button>
        </div>
      ),
    },
  ];
  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    selectAllRowsItem: true,
    selectAllRowsItemText: "All",
  };
  createTheme(
    "solarized",
    {
      text: {
        primary: "white",
        secondary: "#21D4AF",
      },
      background: {
        default: "transparent",
      },
      context: {
        background: "#cb4b16",
        text: "#FFFFFF",
      },
      divider: {
        default: "#3C3E4D",
      },
      action: {
        button: "rgba(0,0,0,.54)",
        hover: "rgba(0,0,0,.08)",
        disabled: "rgba(0,0,0,.12)",
      },
    },
    "dark"
  );

  return (
    <div>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <div className="sm:px-5 lg:mx-20">
          {holderslist ? (
            <DataTable
              className="lg:mx-5"
              title="Whales"
              columns={holderslist ? columns : []}
              data={holderslist ? holderslist : []}
              fixedHeader
              pagination
              paginationPerPage={25}
              paginationComponentOptions={paginationOptions}
              theme="solarized"
              highlightOnHover="true"
            ></DataTable>
          ) : (
            <>
              <p>No Data</p>
            </>
          )}
        </div>
      </IconContext.Provider>
    </div>
  );
}
export default MyDatatable;
