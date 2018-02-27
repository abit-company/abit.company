// @flow

import React from "react";
import styled from "styled-components";
import Navigation, { NavigationItem } from "components/Navigation";
import logo from "images/logo.svg";

const Footer = () => (
  <Wrapper>
    <Column>
      <Logo src={logo} alt="abit company logo" />
      <Navigation>
        <NavigationItem to="#about-us">About us</NavigationItem>
        <NavigationItem to="#team">Team</NavigationItem>
        <NavigationItem to="#contacts">Contacts</NavigationItem>
      </Navigation>
      <CompanyInfo>
        abitcompany Srl<br />
        Capital €10200 i.v.<br />
        Piazza Castello n. 26<br />
        20121 Milano<br />
        VAT Number 09287730965<br />
        REA MI - 2081233
      </CompanyInfo>
    </Column>
  </Wrapper>
);

const Wrapper = styled.footer`
  background-color: #000629;
  margin-top: 60px;
  ${Navigation} {
    margin-top: 105px;
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
  padding-top: 100px;
  img {
    width: 100%;
  }
`;

const CompanyInfo = styled.div`
  color: #fff;
  padding-top: 80px;
  padding-bottom: 100px;
  letter-spacing: 0.06em;
  line-height: 24px;
  font-weight: 700;
`;

export default Footer;
