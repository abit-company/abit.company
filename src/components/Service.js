// @flow

import React from "react";
import styled from "styled-components";

type Props = {
  service: {
    id: string,
    frontmatter: {
      title: string,
      iconUrl: string,
      description: string
    }
  }
};

const Service = ({
  service: { id, frontmatter: { icon, title: name, description } }
}: Props) => (
  <Wrapper>
    <Icon src={icon} alt={`${name} avatar`} />
  </Wrapper>
);

const Wrapper = styled.div`
  padding: 20px 20px 40px 20px;
  box-sizing: border-box;
`;

const Icon = styled(({ children, className, src, alt }) => (
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

export default Service;
