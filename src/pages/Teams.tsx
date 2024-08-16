// src/pages/Teams.tsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const TeamInfo = styled.div`
  padding: 1rem;
`;

const TeamName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TeamDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const ViewTeamButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
  }
`;

const teamData = [
  {
    id: 1,
    name: 'Basketball',
    description: 'Our fierce basketball team, known for their teamwork and agility.',
    image: 'https://source.unsplash.com/random/800x600?basketball',
  },
  {
    id: 2,
    name: 'Football',
    description: 'The powerhouse football team that dominates the field.',
    image: 'https://source.unsplash.com/random/800x600?football',
  },
  {
    id: 3,
    name: 'Soccer',
    description: 'Our skilled soccer team with a passion for the beautiful game.',
    image: 'https://source.unsplash.com/random/800x600?soccer',
  },
  {
    id: 4,
    name: 'Volleyball',
    description: 'The dynamic volleyball team that aims high and spikes hard.',
    image: 'https://source.unsplash.com/random/800x600?volleyball',
  },
];

const Teams: React.FC = () => {
  return (
    <TeamsContainer>
      <Title>Our Sports Teams</Title>
      <TeamGrid>
        {teamData.map((team) => (
          <TeamCard
            key={team.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TeamImage src={team.image} alt={team.name} />
            <TeamInfo>
              <TeamName>{team.name}</TeamName>
              <TeamDescription>{team.description}</TeamDescription>
              <ViewTeamButton to={`/teams/${team.id}`}>View Team</ViewTeamButton>
            </TeamInfo>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamsContainer>
  );
};

export default Teams;