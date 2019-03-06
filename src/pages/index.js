import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Header from '../components/Header';
import Service from '../components/Service';
import TeamMember from '../components/TeamMember';
import Footer from '../components/Footer';
import SocialIcon from '../components/SocialIcon';
import Layout from '../components/layout';
import services from './services.json';
import team from './team.json';

const IndexPage = () => (
  <Layout>
    <Section>
      <Heading>About us</Heading>
      <Description>
        We love to solve the hardest problems, providing comprehensive
        blockchain solutions dealing with technology, marketing, legal and
        finance matters.
        <br /> We embrace each project with full commitment, and we treat them
        as our very own.
      </Description>
    </Section>
    <Section>
      <Heading>What we do</Heading>
      <Services>
        {services.serviceList.map(service => (
          <Service key={service.title} service={service} />
        ))}
      </Services>
    </Section>
    <Section>
      <Heading>Team</Heading>
      <Team>
        {team.teamMembers.map(team => (
          <TeamMember key={team.name} member={team} />
        ))}
      </Team>
    </Section>
    <Section>
      <Heading>Contacts</Heading>
      <SocialList>
        <SocialLink target="_blank" href="https://www.facebook.com/abitcompany">
          <SocialIcon type="facebook" color="#fff" backgroundColor="#3B5998" />
        </SocialLink>
        <SocialLink target="_blank" href="https://twitter.com/abitcompany">
          <SocialIcon type="twitter" color="#fff" backgroundColor="#1DA1F2" />
        </SocialLink>
        <SocialLink
          target="_blank"
          href="https://www.linkedin.com/company/abitcompany/"
        >
          <SocialIcon type="linkedin" color="#fff" backgroundColor="#0077B5" />
        </SocialLink>
        <SocialLink target="_blank" href="https://medium.com/abitcompany">
          <SocialIcon type="medium" color="#fff" backgroundColor="#1C1B1A" />
        </SocialLink>
        <SocialLink target="_blank" href="https://github.com/abit-company">
          <SocialIcon type="github" color="#fff" backgroundColor="#191717" />
        </SocialLink>
      </SocialList>
      <EmailLink target="_blank" href="mailto:info@abit.company">
        info@abit.company
      </EmailLink>
    </Section>
    <Footer />
  </Layout>
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
    padding-left: 10px;
    padding-right: 10px;
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
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    width: 100%;
  }

  ${ TeamMember } {
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

const EmailLink = styled.a`
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
