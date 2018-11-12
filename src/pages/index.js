import React from 'react';
import styled from 'styled-components';
import Service from '../components/Service';
import TeamMember from '../components/TeamMember';
import SocialIcon from '../components/SocialIcon';
// import ScrollableAnchor from 'react-scrollable-anchor';
import team from '../team';
import services from '../services';
import Layout from '../components/Layout';
import SubscriptionForm from '../components/SubscriptionForm';

const IndexPage = () => (
  <Layout>
    {/* <ScrollableAnchor id="about-us" key="about-us"> */}
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
    {/* </ScrollableAnchor> */}
    {/* <ScrollableAnchor id="services" key="services"> */}
    <Section>
      <Heading>Services</Heading>
      <Services>
        {services.map((service, id) => <Service key={id} {...service} />)}
      </Services>
    </Section>
    {/* </ScrollableAnchor> */}
    {/* <ScrollableAnchor id="team" key="team"> */}
    <Section>
      <Heading>Team</Heading>
      <TeamContainer>
        {team.map((member, id) => <TeamMember key={id} {...member} />)}
      </TeamContainer>
    </Section>
    {/* </ScrollableAnchor> */}
    {/* <ScrollableAnchor id="contacts" key="contacts"> */}
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
      <CenterContainer>
        <EmailLink target="_blank" href="mailto:info@abit.company">
          info@abit.company
        </EmailLink>
      </CenterContainer>
      <SubscriptionContainer>
        <SubscriptionForm />
      </SubscriptionContainer>
    </Section>
    {/* </ScrollableAnchor> */}
  </Layout>
);

const CenterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SubscriptionContainer = styled(CenterContainer)`
  margin: 40px 0;
`;

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

const TeamContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const EmailLink = styled.a`
  text-align: center;
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
