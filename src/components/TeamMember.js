import React from 'react';
import styled from 'styled-components';
import { Linkedin } from './Icons';

const TeamMember = ({ avatar, name, role, bio, linkedin }) => (
  <Card>
    <Avatar>
      <img src={`../img/${avatar}`} alt={`${name} avatar`} />
      <LinkedinLink
        target="_blank"
        href={linkedin}
        backgroundColor="#0077B5"
        color="#fff"
      >
        <Linkedin />
      </LinkedinLink>
    </Avatar>
    <FullName>{name}</FullName>
    <Role>{role}</Role>
    <Bio>{bio}</Bio>
  </Card>
);

const Card = styled.div`
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
    max-width: 25%;
    @media (max-width: 800px) {
      max-width: 33%;
    }
    @media (max-width: 600px) {
      max-width: 50%;
      padding: 10px 10px 40px 10px;
    }
`;

const Avatar = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
  position: relative;
  img {
    width: 100%;
  }
`;

const LinkedinLink = styled.a`
  display: block;
  position: absolute;
  bottom: 15px;
  left: 15px;
  height: 30px;
  width: 30px;
  border-radius: 6px;
  transform: rotate(45deg);
  background-color: ${({ backgroundColor }) => backgroundColor};
  transition: 1s all;
  svg {
    transition: 1s all;
    fill: ${({ color }) => color};
    transform: rotate(-45deg);
  }
  &:hover {
    transform: rotate(360deg);
    svg {
      transform: rotate(-360deg);
    }
  }
`;

const FullName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #0c35fb;
  padding-top: 20px;
  width: 100%;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Role = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000629;
  width: 100%;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Bio = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000629;
  padding-top: 20px;
  width: 100%;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export default TeamMember;
