import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFutbol, FaBasketballBall, FaBaseballBall } from 'react-icons/fa';

const MatchesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

const MatchCard = styled(motion.div)`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 1rem;
`;

const MatchInfo = styled.div`
  text-align: center;
`;

const SportIcon = styled.span`
  margin-right: 0.5rem;
`;

const MatchesAndResults: React.FC = () => {
  const matches = [
    { id: 1, sport: 'football', team1: 'Lions', team2: 'Tigers', date: '2024-08-20', time: '15:00' },
    { id: 2, sport: 'basketball', team1: 'Eagles', team2: 'Hawks', date: '2024-08-22', time: '18:30' },
    { id: 3, sport: 'baseball', team1: 'Sharks', team2: 'Dolphins', date: '2024-08-25', time: '14:00' },
  ];

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case 'football':
        return <FaFutbol />;
      case 'basketball':
        return <FaBasketballBall />;
      case 'baseball':
        return <FaBaseballBall />;
      default:
        return null;
    }
  };

  return (
    <MatchesSection>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Matches
      </motion.h2>
      {matches.map((match, index) => (
        <MatchCard
          key={match.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TeamInfo>
            <TeamLogo src={`/path-to-${match.team1.toLowerCase()}-logo.png`} alt={match.team1} />
            <span>{match.team1}</span>
          </TeamInfo>
          <MatchInfo>
            <SportIcon>{getSportIcon(match.sport)}</SportIcon>
            <span>{`${match.date} ${match.time}`}</span>
          </MatchInfo>
          <TeamInfo>
            <span>{match.team2}</span>
            <TeamLogo src={`/path-to-${match.team2.toLowerCase()}-logo.png`} alt={match.team2} />
          </TeamInfo>
        </MatchCard>
      ))}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View All Matches
      </motion.button>
    </MatchesSection>
  );
};

export default MatchesAndResults;