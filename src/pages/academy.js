import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import bookImage from '../images/libro.jpg';

const AcademyPage = () => (
  <Layout>
    <Container>
      <BookImage src={bookImage} />
      <div>
        <Title>Blockchain</Title>
        <Subtitle>Tecnologia e applicazioni per il business</Subtitle>
        <Description>
          Tutto ciò che serve per entrare nella nuova era digitale
        </Description>
      </div>
    </Container>
  </Layout>
);

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 72px;
  color: ${({ theme }) => theme.mainColor};
  text-transform: uppercase;
  margin-bottom: 0;
`;
const Description = styled.h3`
  font-size: 22;
`;
const Subtitle = styled.h2`
  text-transform: uppercase;
`;
const BookImage = styled.img`
  width: 500px;
`;
export default AcademyPage;
