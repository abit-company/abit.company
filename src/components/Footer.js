import React from 'react';
import styled from 'styled-components';
import Navigation, { NavigationItem } from '../components/Navigation';
import logo from '../images/logo.svg';
import { Link } from 'gatsby';

const Footer = () => (
  <Wrapper>
    <Column>
      <Link to="/">
        <Logo src={logo} alt="abit company logo" />
      </Link>
      <Navigation>
        <NavigationItem to="/#about-us">About us</NavigationItem>
        <NavigationItem to="/#services">Services</NavigationItem>
        <NavigationItem to="/#team">Team</NavigationItem>
        <NavigationItem to="/#contacts">Contacts</NavigationItem>
        <BadgeContainer>
          <Badge>new!</Badge>
          <NavigationItem to="/education">Book</NavigationItem>
        </BadgeContainer>
      </Navigation>
      <Copyright>© 2018 abitcompany - P.I.: 02928220306</Copyright>
    </Column>
  </Wrapper>
);

const BadgeContainer = styled.div`
  display: inline-block;
  position: relative;
`;

const Badge = styled.div`
  font-size: 0.9em;
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: #ffff00;
  padding: 3px 7px;
  border-radius: 6px;
`;

const Wrapper = styled.footer`
  background-color: #000629;
  /* margin-top: 60px; */
  ${Navigation} {
    margin-top: 115px;
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
  children: ({ src, alt }) => <img src={src} alt={alt} />,
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

const Copyright = styled.div`
  color: #fff;
  letter-spacing: 0.06em;
  line-height: 24px;
  font-weight: 300;
  padding-top: 120px;
  padding-bottom: 20px;
  text-align: center;
`;

export default Footer;
