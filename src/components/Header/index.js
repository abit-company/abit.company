import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import logo from "images/logo.svg";
import Navigation, { NavigationItem } from "components/Navigation";
import headerIllustration from "./header-illustration.svg";

const Header = () => (
  <Wrapper>
    <Column>
      <Logo src={logo} alt="abit company logo" />
      <Navigation>
        <NavigationItem to="#about-us">About us</NavigationItem>
        <NavigationItem to="#services">Services</NavigationItem>
        <NavigationItem to="#team">Team</NavigationItem>
        <NavigationItem to="#contacts">Contacts</NavigationItem>
      </Navigation>
      <TagLine>
        Building the future <br /> one bit at a time
      </TagLine>
    </Column>
  </Wrapper>
);

const Wrapper = styled.header`
  background-color: #000629;
  background-image: url("${headerIllustration}");
  background-position: right;
  background-repeat: no-repeat;
  ${Navigation} {
    margin-top: 50px;
    @media (max-width: 700px) {
      display: none;
    }
  }
  @media (max-width: 800px) {
    background-size: cover;
  }
`;

const Column = styled.div`
  width: 960px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1000px) {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
  }
  @media (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Logo = styled.div.attrs({
  children: ({ src, alt }) => <img src={src} alt={alt} />
})`
  width: 220px;
  padding-top: 40px;
  img {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 200px;
  }
`;

const TagLine = styled.h1`
  color: #fff;
  font-size: 56px;
  padding-top: 200px;
  padding-bottom: 300px;
  line-height: 70px;
  @media (max-width: 600px) {
    font-size: 40px;
    line-height: 50px;
    padding-top: 150px;
    padding-bottom: 180px;
  }
  @media (max-width: 450px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

export default Header;
