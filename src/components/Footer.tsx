import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 3rem 2rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterSection = styled(motion.div)`
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
`;

const FooterTitle = styled.h3`
  color: #4CAF50;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FooterListItem = styled(motion.li)`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const SocialIcon = styled(motion.a)`
  color: #fff;
  font-size: 1.5rem;
  margin-right: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #4CAF50;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #555;
`;

const Footer: React.FC = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection
          variants={footerVariants}
          initial="hidden"
          animate="visible"
        >
          <FooterTitle>Contact Us</FooterTitle>
          <FooterList>
            <FooterListItem variants={itemVariants}>
              <FaEnvelope style={{ marginRight: '0.5rem' }} /> info@schoolsports.com
            </FooterListItem>
            <FooterListItem variants={itemVariants}>
              <FaPhone style={{ marginRight: '0.5rem' }} /> (123) 456-7890
            </FooterListItem>
            <FooterListItem variants={itemVariants}>
              <FaMapMarkerAlt style={{ marginRight: '0.5rem' }} /> 123 School St, City, State 12345
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection
          variants={footerVariants}
          initial="hidden"
          animate="visible"
        >
          <FooterTitle>Quick Links</FooterTitle>
          <FooterList>
            <FooterListItem variants={itemVariants}>
              <a href="/about">About Us</a>
            </FooterListItem>
            <FooterListItem variants={itemVariants}>
              <a href="/teams">Our Teams</a>
            </FooterListItem>
            <FooterListItem variants={itemVariants}>
              <a href="/schedule">Match Schedule</a>
            </FooterListItem>
            <FooterListItem variants={itemVariants}>
              <a href="/news">Latest News</a>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection
          variants={footerVariants}
          initial="hidden"
          animate="visible"
        >
          <FooterTitle>Follow Us</FooterTitle>
          <div>
            <SocialIcon href="#" variants={itemVariants}>
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" variants={itemVariants}>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="#" variants={itemVariants}>
              <FaInstagram />
            </SocialIcon>
          </div>
        </FooterSection>
      </FooterContent>
      <Copyright>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © 2024 School Sports. All rights reserved.
        </motion.p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;