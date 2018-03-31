// @flow

import React from "react";
import styled from "styled-components";

type Props = {
  service: {
    id: string,
    frontmatter: {
      className: string,
      serviceName: string,
      icon: string,
      description: string
    }
  }
};

const Service = ({ service }: Props) => <Wrapper />;

const Wrapper = styled.div`
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
`;

export default Service;
