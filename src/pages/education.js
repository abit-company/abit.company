import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Amazon from './Amazon.png';
import Img from 'gatsby-image';
import chapters from './chapters.json';

const AcademyPage = ({ data }) => (
  <Layout>
    <Container>
      <BookSection>
        <div>
          <BookImage fluid={data.book.childImageSharp.fluid} />
        </div>
        <DescriptionContainer>
          <BookIntro>
            "Un libro che permette di acquisire una reale comprensione della
            blockchain, una tecnologia innovativa e rivoluzionaria il cui
            avvento sembra ormai davvero inesorabile. Consapevoli di come questa
            tecnologia si stia diffondendo in tutti i settori, aprendo le porte
            a soluzioni prima irrealizzabili, gli autori di questo volume
            mettono in luce con competenza, completezza e senso pratico benefici
            e rischi di un mondo decentralizzato che, inevitabilmente, sembra
            destinato a essere sempre più reale"
          </BookIntro>
          <BuyNow>Buy now</BuyNow>
          <BuyBook>
            <BuyLink
              href="https://amzn.to/2NNTkU3"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={Amazon} />
            </BuyLink>
          </BuyBook>
        </DescriptionContainer>
      </BookSection>
      <ChaptersContainer>
        <ChaptersContainerTitle>Table of contents</ChaptersContainerTitle>
        <ChaptersList>
          {chapters.chapters.map(chapter => (
            <Chapter key={chapter.title}>{chapter.title}</Chapter>
          ))}
        </ChaptersList>
      </ChaptersContainer>
    </Container>
  </Layout>
);

const BuyNow = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 20px;
`;
const ChaptersContainerTitle = styled.h2`
  font-size: 46px;
`;

const ChaptersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const ChaptersList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Chapter = styled.h4``;
const BuyBook = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const BookIntro = styled.p`
  font-style: italic;
  font-size: 20px;
`;
const BuyLink = styled.a`
  width: 150px;
  display: block;

  img {
    width: 100%;
  }
`;

const DescriptionContainer = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const BookSection = styled.div`
  display: flex;
  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const BookImage = styled(Img)`
  width: 450px;
  @media (max-width: 960px) {
    width: 400px;
  }
`;

export const query = graphql`
  query {
    book: file(relativePath: { eq: "book.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default AcademyPage;
