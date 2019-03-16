import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import Amazon from './Amazon.png';
import Hoepli from './hoepli-logo.gif';
import Img from 'gatsby-image';
import chapters from './chapters.json';
import Bullet from 'components/Bullet';

const AcademyPage = ({ data }) => (
  <Layout>
    <div style={{ backgroundColor: '#fafafa' }}>
      <Container>
        <BookSection>
          <div>
            <BookImage fluid={data.book.childImageSharp.fluid} />
          </div>
          <DescriptionContainer>
            <BookIntro>
              "Un libro che permette di acquisire una reale comprensione della
              blockchain, una tecnologia innovativa e rivoluzionaria il cui
              avvento sembra ormai davvero inesorabile. Consapevoli di come
              questa tecnologia si stia diffondendo in tutti i settori, aprendo
              le porte a soluzioni prima irrealizzabili, gli autori di questo
              volume mettono in luce con competenza, completezza e senso pratico
              benefici e rischi di un mondo decentralizzato che,
              inevitabilmente, sembra destinato a essere sempre più reale"
            </BookIntro>
            <BuyBook>
              <BuyLink
                href="https://amzn.to/2NNTkU3"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={Amazon} />
              </BuyLink>
              <BuyLink
                href="https://www.hoepli.it/libro/blockchain-tecnologia-e-applicazioni-per-il-business/9788820389253.html?from=Suggerimento+Ricerca"
                rel="noopener noreferrer"
                target="_blank"
                style={{ marginLeft: '40px' }}
              >
                <img src={Hoepli} />
              </BuyLink>
            </BuyBook>
          </DescriptionContainer>
        </BookSection>
        <ChaptersContainer>
          <ChaptersContainerTitle>Contenuti</ChaptersContainerTitle>
          <TwoColumns>
            <Column>
              <ChaptersList>
                {chapters.chapters
                  .filter((_, idx) => !(idx % 2))
                  .map(chapter => (
                    <Chapter key={chapter.title}>
                      <div>
                        <Bullet height="30px" style={{ marginRight: '15px' }} />
                      </div>
                      {chapter.title}
                    </Chapter>
                  ))}
              </ChaptersList>
            </Column>
            <Column style={{ marginLeft: '30px' }}>
              <ChaptersList>
                {chapters.chapters
                  .filter((_, idx) => idx % 2)
                  .map(chapter => (
                    <Chapter key={chapter.title}>
                      <div>
                        <Bullet height="30px" style={{ marginRight: '15px' }} />
                      </div>
                      {chapter.title}
                    </Chapter>
                  ))}
              </ChaptersList>
            </Column>
          </TwoColumns>
          <SingleCol>
            <ChaptersList>
              {chapters.chapters.map(chapter => (
                <Chapter key={chapter.title}>
                  <div>
                    <Bullet height="30px" style={{ marginRight: '15px' }} />
                  </div>
                  {chapter.title}
                </Chapter>
              ))}
            </ChaptersList>
          </SingleCol>
        </ChaptersContainer>
      </Container>
    </div>
  </Layout>
);

const SingleCol = styled.div`
  display: none;
  @media (max-width: 580px) {
    display: block;
  }
`;
const TwoColumns = styled.div`
  display: flex;
  @media (max-width: 580px) {
    display: none;
  }
`;
const Column = styled.div``;

const ChaptersContainerTitle = styled.h2`
  font-size: 46px;
  margin-top: 60px;
`;

const ChaptersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ChaptersList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Chapter = styled.h4`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
`;
const BuyBook = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const BookIntro = styled.p`
  font-style: italic;
  font-size: 20px;
  @media (max-width: 840px) {
    font-size: 16px;
    text-align: center;
    margin: 20px 0;
  }
`;
const BuyLink = styled.a`
  width: 150px;
  display: block;
  img {
    width: 100%;
  }
  @media (max-width: 840px) {
    width: 110px;
  }
`;

const DescriptionContainer = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 840px) {
    margin-left: 0;
  }
`;

const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-bottom: 90px;
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
  @media (max-width: 600px) {
    width: 300px;
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
