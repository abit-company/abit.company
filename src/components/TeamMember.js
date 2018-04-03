// @flow

import React, { Component } from "react";
import styled from "styled-components";
import Linkedin from "./SocialIcon/Linkedin";

type Props = {
  member: {
    id: string,
    frontmatter: {
      avatar: string,
      title: string,
      role: string,
      bio: string,
      linkedin: string
    }
  }
};

class TeamMember extends Component<Props> {
  static defaultProps = {
    className: ""
  };

  render() {
    const { className } = this.props;
    const {
      avatar,
      title: fullName,
      role,
      linkedin,
      bio
    } = this.props.member.frontmatter;
    return (
      <Card className={className}>
        <Avatar src={avatar} alt={`${fullName} avatar`}>
          {typeof linkedin === "string" &&
            linkedin.length > 0 && (
              <LinkedinLink
                href={linkedin}
                backgroundColor="#0077B5"
                color="#fff"
              >
                <Linkedin />
              </LinkedinLink>
            )}
        </Avatar>
        <FullName>{fullName}</FullName>
        <Role>{role}</Role>
        <Bio>{bio}</Bio>
      </Card>
    );
  }
}

const Card = styled.div`
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
`;

const Avatar = styled(({ children, className, src, alt }) => (
  <div className={className}>
    <img src={src} alt={alt} />
    {children}
  </div>
))`
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

export default styled(TeamMember)``;
