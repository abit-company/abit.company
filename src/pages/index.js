import React, { Fragment } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "components/Header";
import Service from "components/Service";
import TeamMember from "components/TeamMember";
import Footer from "components/Footer";
import SocialIcon from "components/SocialIcon";
import ScrollableAnchor from "react-scrollable-anchor";
import mattiaAvatar from "./assets/mattia-marcon-avatar.png";

type Props = {
  data: {}
};
const IndexPage = ({ data }: Props) => (
  <div>
    <Header />
    <ScrollableAnchor id="about-us">
      <Section>
        <Heading>About us</Heading>
        <Description>
          We are group of people united by the passion towards technologies.
          <br />We are always looking to the future trying to build better
          products everyday
        </Description>
      </Section>
    </ScrollableAnchor>
    <ScrollableAnchor id="services">
      <Section>
        <Heading>Services</Heading>
        <Services>
          {data.allServicesMarkdownRemark.edges.map(({ node }) => (
            <Service key={node.id} member={node} />
          ))}
        </Services>
      </Section>
    </ScrollableAnchor>
    <ScrollableAnchor id="team">
      <Section>
        <Heading>Team</Heading>
        <Team>
          {data.allTeamMarkdownRemark.edges.map(({ node }) => (
            <TeamMember key={node.id} member={node} />
          ))}
        </Team>
      </Section>
    </ScrollableAnchor>
    <ScrollableAnchor id="contacts">
      <Section>
        <Heading>Contacts</Heading>
        <SocialList>
          <SocialLink href="https://www.facebook.com/abitfund">
            <SocialIcon
              type="facebook"
              color="#fff"
              backgroundColor="#3B5998"
            />
          </SocialLink>
          <SocialLink href="https://twitter.com/abitfund">
            <SocialIcon type="twitter" color="#fff" backgroundColor="#1DA1F2" />
          </SocialLink>
        </SocialList>
        <EmailLink>info@abit.company</EmailLink>
      </Section>
    </ScrollableAnchor>
    <Footer />
  </div>
);

const Section = styled.section`
  width: 100%;
  padding-top: 60px;
  padding-bottom: 60px;
  @media (max-width: 1000px) {
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
  }
  @media (max-width: 600px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

const Heading = styled.h2`
  text-align: center;
  margin: 0 auto;
  width: 600px;
  font-size: 50px;
  color: #0c35fb;
  padding-bottom: 50px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 40px;
  }
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

const Description = styled.p`
  text-align: center;
  margin: 0 auto;
  width: 600px;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 26px;
    line-height: 36px;
  }
  @media (max-width: 450px) {
    font-size: 24px;
    line-height: 32px;
  }
`;

const Services = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const Team = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    width: 100%;
  }

  ${TeamMember} {
    flex-basis: 25%;
    @media (max-width: 800px) {
      flex-basis: 33%;
    }
    @media (max-width: 600px) {
      flex-basis: 50%;
      padding: 10px 10px 40px 10px;
    }
  }
`;

const EmailLink = styled.a.attrs({
  href: ({ email }) => `mailto:${email}`
})`
  text-align: center;
  width: 100%;
  display: block;
  text-decoration: none;
  color: #000629;
  font-weight: 700;
  font-size: 20px;
  padding-top: 40px;
`;

const SocialList = styled.div`
  width: 100%;
  padding-top: 40px;
  text-align: center;
`;

const SocialLink = styled.a`
  display: inline-block;
  padding: 0px 15px;
`;

export default IndexPage;

export const query = graphql`
  query HomePageQuery {
    allServicesMarkdownRemark: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/(/_collections/services)/.*\\.md$/" }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            icon
            description
          }
        }
      }
    }
    allTeamMarkdownRemark: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(/_collections/team)/.*\\.md$/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            avatar
            role
            linkedin
            bio
          }
        }
      }
    }
  }
`;
