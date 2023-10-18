import React from "react";
import HeroSection from "../../components/HeroSection";
import Service from "../../components/Service";
import Trusted from "../../components/Trusted";
import FeatureProduct from "../../components/FeatureProduct";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <HeroSection />
      <FeatureProduct />
      <Service />
      <Trusted />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.nav`
height:100vh;
margin:0;
padding:0;
`;
