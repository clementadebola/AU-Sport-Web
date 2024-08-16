// src/components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

const HeroContent = styled(motion.div)`
  flex: 1;
  padding-right: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HeroButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
`;

const HeroImage = styled(motion.img)`
  flex: 1;
  max-width: 50%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroTitle>Welcome to School Sports</HeroTitle>
        <HeroDescription>
          Discover the exciting world of our school's sports teams, matches, and player achievements.
        </HeroDescription>
        <HeroButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Teams
        </HeroButton>
      </HeroContent>
      <HeroImage
        src="https://source.unsplash.com/random/800x600?sports"
        alt="School Sports"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </HeroContainer>
  );
};

export default HeroSection;