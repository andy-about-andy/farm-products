import React from "react";
import About from "/src/components/blocks/about/about";
import ComparisonsList from "/src/components/blocks/comparison-list/comparison-list";

function MainPage({ comparisons }) {
  return (
    <>
      <About />
      <ComparisonsList comparisons={comparisons} />
    </>
  );
}

export default MainPage;
