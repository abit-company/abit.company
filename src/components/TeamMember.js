// @flow

import React, { Component } from "react";
import styled from "styled-components";

type Props = {
  avatar: string,
  className: string,
  fullName: string,
  role: string,
  bio: string
};

class TeamMember extends Component<Props> {
  static defaultProps = {
    className: ""
  };

  render() {
    const { avatar, className, fullName, role, bio } = this.props;
    return (
      <Card className={className}>
        <Avatar src={avatar} alt={`${fullName} avatar`} />
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

const Avatar = styled.div.attrs({
  children: ({ src, alt }) => <img src={src} alt={alt} />
})`
  background-color: #f2f2f2;
  border-radius: 10px;
  img {
    width: 100%;
  }
`;

const FullName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #0c35fb;
  padding-top: 20px;
  width: 100%;
  text-align: center;
`;

const Role = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000629;
  width: 100%;
  text-align: center;
`;

const Bio = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000629;
  padding-top: 20px;
  width: 100%;
  text-align: center;
`;

export default styled(TeamMember)``;
