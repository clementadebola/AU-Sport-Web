import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaUserTie } from 'react-icons/fa';

const AboutUsSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

const DirectorImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const NameTag = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
`;

const Particle = styled(motion.div)`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #4CAF50;
  border-radius: 50%;
`;

const AboutUs: React.FC = () => {
  return (
    <AboutUsSection>
      <ContentWrapper>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our school sports program is dedicated to fostering athletic excellence and personal growth. We believe in the power of sports to build character, teamwork, and leadership skills.
        </motion.p>
      </ContentWrapper>
      <ImageWrapper>
        <DirectorImage
          src="/path-to-director-image.jpg"
          alt="Sports Director"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <NameTag>
          <FaUserTie /> John Doe, Sports Director
        </NameTag>
        {[...Array(5)].map((_, index) => (
          <Particle
            key={index}
            initial={{ x: 0, y: 0 }}
            animate={{
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100,
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </ImageWrapper>
    </AboutUsSection>
  );
};

export default AboutUs;