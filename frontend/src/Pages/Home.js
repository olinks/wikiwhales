import React from "react";
// import Details from "../components/DetailsWiki"
import Header from "../components/Header";
import Overview from "../components/OverviewWiki";
// import Pagination from "../components/Pagination"
import Whale from "../components/Whale";
import Datatable from "../components/MyDatatable";

function Home() {
  return (
    <div>
      <Header />
      <Whale />
      <Overview />
      {/* <Details /> */}
      <Datatable />

      {/* <Pagination /> */}
    </div>
  );
}

export default Home;
