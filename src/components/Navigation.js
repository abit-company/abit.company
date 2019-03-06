import React from 'react';
import styled from 'styled-components';

const Navigation = ({ className, children }) => (
  <Nav className={className}>
    <ul>{children}</ul>
  </Nav>
);

const Nav = styled.nav`
  position: absolute;
  right: 0;
  top: 0;
  letter-spacing: 0.06em;
  ul {
    list-style: none;
  }
`;

export const NavigationItem = ({ to, children }) => (
  <Li>
    <a href={to}>{children}</a>
  </Li>
);

const Li = styled.li`
  display: inline-block;
  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 20px;
    position: relative;
    &::before {
      background: #fff;
      opacity: 0;
      bottom: -5px;
      content: "";
      height: 2px;
      left: 50%;
      position: absolute;
      width: 0%;
      transition: all 500ms;
      transform: translateX(-50%);
    }
    &:hover {
      color: #fff;
      cursor: pointer;
      &::before {
        opacity: 1;
        width: 100%;
      }
    }
  }
`;

export default styled(Navigation)``;
