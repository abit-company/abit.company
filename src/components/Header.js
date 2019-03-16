import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components/macro';
import logo from '../images/logo.svg';
import Navigation, { NavigationItem } from './Navigation';
import MenuIcon from './MenuIcon';
import handleScroll from 'utils/scroll';

export default function Header({ location }) {
  const [isSidebar, setIsSidebar] = useState(0);
  return (
    <HeaderContainer location={location}>
      <Column>
        <Link to="/">
          <Logo src={logo} alt="abit company logo" />
        </Link>
        <Navigation>
          <NavigationItem onClick={() => handleScroll('about')} to="/#about-us">
            About us
          </NavigationItem>
          <NavigationItem
            onClick={() => handleScroll('services')}
            to="/#services"
          >
            Services
          </NavigationItem>
          <NavigationItem onClick={() => handleScroll('team')} to="/#team">
            Team
          </NavigationItem>
          <NavigationItem
            onClick={() => handleScroll('contacts')}
            to="/#contacts"
          >
            Contacts
          </NavigationItem>
          <BadgeContainer>
            <Badge>new!</Badge>
            <NavigationItem to="/education">Book</NavigationItem>
          </BadgeContainer>
        </Navigation>
        <MobileNav>
          <NavBarMenu onClick={() => setIsSidebar(!isSidebar)} />
        </MobileNav>
      </Column>
      {!!isSidebar && <Mask onClick={() => setIsSidebar(false)} />}
      <SideBarContainer isOpen={isSidebar}>
        <SideBarLinks>
          <SideBarLink>
            <Link to="/#about-us" onClick={() => setIsSidebar(false)}>
              About us
            </Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/#services" onClick={() => setIsSidebar(false)}>
              Services
            </Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/#team" onClick={() => setIsSidebar(false)}>
              Team
            </Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/#contacts" onClick={() => setIsSidebar(false)}>
              Contacts
            </Link>
          </SideBarLink>
          <SideBarLink>
            <Link to="/education" onClick={() => setIsSidebar(false)}>
              Book
            </Link>
            <InlineBadge>new!</InlineBadge>
          </SideBarLink>
        </SideBarLinks>
      </SideBarContainer>
    </HeaderContainer>
  );
}

const MobileNav = styled.div`
  flex: 1;
  justify-content: flex-end;
  display: none;
  @media (max-width: 840px) {
    display: flex;
  }
`;
const HeaderContainer = styled.div`
  position: relative;
  background-color: ${({ location }) =>
    location === '/' ? 'trasparent' : '#000629'};
`;

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

const InlineBadge = styled.div`
  font-size: 0.9em;
  display: inline-block;
  background-color: ${({ theme }) => theme.mainColor};
  color: #fff;
  padding: 3px 7px;
  border-radius: 6px;
  margin-left: 10px;
`;

const Column = styled.div`
  width: 960px;
  margin: 0 auto;
  position: relative;
  display: flex;
  height: 150px;
  align-items: center;
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
  ${Navigation} {
    position: relative;
    margin-left: auto;
    @media (max-width: 840px) {
      display: none;
    }
  }
`;

export const Mask = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  background-color: #000;
  opacity: 0.3;
  transition: 0.3s;
`;

const SideBarContainer = styled.div`
  box-shadow: 6px 0 15px rgba(36, 37, 38, 0.18);
  background-color: #000;
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10002;
  height: 100%;
  transform: translate(100%);
  overflow-y: scroll;
  height: 100vh;
  width: 300px;
  background-color: #fff;
  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: translate(0);
    `};
`;

const SideBarLinks = styled.ul`
  padding: 0;
  margin: 0;
  padding: 70px 30px;
  list-style: none;
`;
const SideBarLink = styled.li`
  text-decoration: none;
  padding: 5px 0;
  margin-bottom: 15px;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.mainColor};
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.1em;
  }
`;

const NavBarMenu = styled(MenuIcon)`
  color: ${({ theme }) => theme.textColorLight};
  display: none;
  height: 30px;
  width: 30px;
  @media (max-width: 840px) {
    display: block;
  }
`;

const Logo = styled.div.attrs({
  children: ({ src, alt }) => <img src={src} alt={alt} />,
})`
  width: 220px;
  img {
    width: 100%;
  }
  @media (max-width: 600px) {
    width: 200px;
  }
`;
