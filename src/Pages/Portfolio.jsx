import React from "react";
import PortfolioComp from "../Components/PortfolioComp";
import PortfolioComponent from "../Components/PortfolioComponent";
import ThirdWorkComponent from "../Components/ThirdWorkCompo";
import FourthWorkComponent from "../Components/FourthWorkComponent";

function Portfolio() {
  return (
    <>
      <div className="pt-20 px-5 grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        <PortfolioComp />
        <PortfolioComponent />
        <ThirdWorkComponent />
        <FourthWorkComponent />
      </div>
    </>
  );
}

export default Portfolio;
