import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import MatchesAndResults from '../components/MatchesAndResults';
import PlayerOfTheMatch from '../components/PlayerOfTheMatch';
import PlayerTestimonials from '../components/PlayerTestimonials';
import BlogSection from '../components/BlogSection';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <AboutUs />
      <MatchesAndResults />
      <PlayerOfTheMatch />
      <PlayerTestimonials />
      <BlogSection />
    </HomeContainer>
  );
};

export default Home;