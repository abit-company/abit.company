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
  background-position: right 20%;
  background-repeat: no-repeat; 
  ${Navigation} {
    margin-top: 50px;
  }
`;

const Column = styled.div`
  width: 960px;
  margin: 0 auto;
  position: relative;
`;

const Logo = styled.div.attrs({
  children: ({ src, alt }) => <img src={src} alt={alt} />
})`
  width: 240px;
  padding-top: 50px;
  img {
    width: 100%;
  }
`;

const TagLine = styled.h1`
  color: #fff;
  font-size: 56px;
  padding-top: 200px;
  padding-bottom: 300px;
  line-height: 70px;
`;

export default Header;
