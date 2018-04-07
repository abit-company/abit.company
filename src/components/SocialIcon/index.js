// @flow

import React from "react";
import styled from "styled-components";
import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Linkedin from "./Linkedin";
import Medium from "./Medium";

type Props = {
  type: "facebook" | "twitter" | "linkedin" | "medium",
  backgroundColor: string,
  color: string
};

const SocialIcon = ({
  backgroundColor = "#000",
  color = "#fff",
  type
}: Props) => {
  switch (type) {
    case "facebook":
      return (
        <Wrapper backgroundColor={backgroundColor} color={color}>
          <Facebook />
        </Wrapper>
      );
    case "twitter":
      return (
        <Wrapper backgroundColor={backgroundColor} color={color}>
          <Twitter />
        </Wrapper>
      );
    case "linkedin":
      return (
        <Wrapper backgroundColor={backgroundColor} color={color}>
          <Linkedin />
        </Wrapper>
      );
    case "medium":
      return (
        <Wrapper backgroundColor={backgroundColor} color={color}>
          <Medium />
        </Wrapper>
      );
    default:
      return null;
  }
};

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
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

export default SocialIcon;
