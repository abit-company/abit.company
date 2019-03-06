import React from 'react';
import styled from 'styled-components/macro';

const Service = ({ className, service: { icon, title, description } }) => (
  <Wrapper className={className}>
    <IconContainer>
      <Icon src={`/assets/images/${ icon }`} alt={`${ title } icon`} />
    </IconContainer>

    <TextContainer>
      <Name>{title}</Name>
      <Description>{description}</Description>
    </TextContainer>
  </Wrapper>
);

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
  &:nth-child(even) {
    flex-direction: row-reverse;
    text-align: right;
  }
`;

const IconContainer = styled.div`
  padding: 20px 20px 20px 20px;
  box-sizing: border-box;
  flex-basis: 25%;
  @media (max-width: 800px) {
    flex-basis: 33.33%;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    flex-basis: 50%;
  }
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

const TextContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  @media (max-width: 960px) {
    flex-basis: 75%;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
    text-align: center;
    padding-bottom: 50px;
  }
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #0c35fb;
  width: 100%;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000629;
  padding-top: 20px;
  width: 100%;
  line-height: 1.4em;
`;

export default styled(Service)``;
