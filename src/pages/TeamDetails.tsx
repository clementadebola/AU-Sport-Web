// src/pages/TeamDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TeamDetailsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const TeamHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const TeamLogo = styled(motion.img)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 2rem;
`;

const TeamInfo = styled.div``;

const TeamName = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const TeamDescription = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const PlayerCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PlayerInfo = styled.div`
  padding: 1rem;
`;

const PlayerName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const PlayerPosition = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const Schedule = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ScheduleItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const teamData = {
  id: 1,
  name: 'Basketball',
  description: 'Our fierce basketball team, known for their teamwork and agility.',
  logo: 'https://source.unsplash.com/random/200x200?basketball',
  players: [
    { id: 1, name: 'John Doe', position: 'Point Guard', image: 'https://source.unsplash.com/random/400x400?man' },
    { id: 2, name: 'Jane Smith', position: 'Shooting Guard', image: 'https://source.unsplash.com/random/400x400?woman' },
    { id: 3, name: 'Mike Johnson', position: 'Small Forward', image: 'https://source.unsplash.com/random/400x400?person' },
  ],
  schedule: [
    { date: '2023-09-15', opponent: 'Rival High School', location: 'Home' },
    { date: '2023-09-22', opponent: 'City Academy', location: 'Away' },
    { date: '2023-09-29', opponent: 'Sports Institute', location: 'Home' },
  ],
};

const TeamDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // In a real application, you would fetch the team data based on the id
  // For this example, we'll use the mock data

  return (
    <TeamDetailsContainer>
      <TeamHeader>
        <TeamLogo
          src={teamData.logo}
          alt={teamData.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <TeamInfo>
          <TeamName>{teamData.name}</TeamName>
          <TeamDescription>{teamData.description}</TeamDescription>
        </TeamInfo>
      </TeamHeader>

      <SectionTitle>Players</SectionTitle>
      <PlayerGrid>
        {teamData.players.map((player) => (
          <PlayerCard
            key={player.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PlayerImage src={player.image} alt={player.name} />
            <PlayerInfo>
              <PlayerName>{player.name}</PlayerName>
              <PlayerPosition>{player.position}</PlayerPosition>
            </PlayerInfo>
          </PlayerCard>
        ))}
      </PlayerGrid>

      <SectionTitle>Upcoming Matches</SectionTitle>
      <Schedule>
        {teamData.schedule.map((match, index) => (
          <ScheduleItem key={index}>
            {match.date} - {match.opponent} ({match.location})
          </ScheduleItem>
        ))}
      </Schedule>
    </TeamDetailsContainer>
  );
};

export default TeamDetails;