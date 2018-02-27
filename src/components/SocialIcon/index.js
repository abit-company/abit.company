// @flow

import React from "react";
import styled from "styled-components";
import Facebook from "./Facebook";
import Twitter from "./Twitter";

type Props = {
  type: "facebook" | "twitter",
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
    default:
      return null;
  }
};

const Wrapper = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
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
