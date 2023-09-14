import React from "react";
import Banner from "../components/Banner";
import SearchForm from "../components/SearchForm";
import DataGrid from "../components/DataGrid";

const LandingPage = () => {
  return (
    <div className=" flex flex-col font-mono ">
      <Banner />
      <DataGrid />
    </div>
  );
};

export default LandingPage;
