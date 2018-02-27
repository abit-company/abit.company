import React, { Fragment } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Header from "components/Header";
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
    <ScrollableAnchor id="team">
      <Section>
        <Heading>Team</Heading>
        <Team>
          {data.allMarkdownRemark.edges.map(
            ({
              node: { id, frontmatter: { avatar, title: fullName, bio, role } }
            }) => (
              <TeamMember
                key={id}
                avatar={avatar}
                fullName={fullName}
                role={role}
                bio={bio}
              />
            )
          )}
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
`;

const Heading = styled.h2`
  text-align: center;
  margin: 0 auto;
  width: 600px;
  font-size: 50px;
  color: #0c35fb;
  padding-bottom: 50px;
`;

const Description = styled.p`
  text-align: center;
  margin: 0 auto;
  width: 600px;
  font-size: 32px;
  font-weight: 700;
  line-height: 45px;
`;

const Team = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  ${TeamMember} {
    flex-basis: 25%;
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
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            avatar
            role
            bio
          }
        }
      }
    }
  }
`;
