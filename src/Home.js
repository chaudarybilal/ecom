import React from "react";
// import styled from "styled-components";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Thapa store",
  };
  return <HeroSection mydata={data} />;
};
// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;
