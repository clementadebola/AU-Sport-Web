import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFutbol, FaBasketballBall, FaVolleyballBall, FaRunning } from 'react-icons/fa';

const MatchesPageWrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const FilterButton = styled(motion.button)`
  background-color: #f0f0f0;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }

  &.active {
    background-color: #4CAF50;
    color: white;
  }
`;

const MatchCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

const matches = [
  { id: 1, sport: 'football', team1: 'Lions', team2: 'Tigers', date: '2024-08-20', time: '15:00' },
  { id: 2, sport: 'basketball', team1: 'Eagles', team2: 'Hawks', date: '2024-08-22', time: '18:30' },
  { id: 3, sport: 'volleyball', team1: 'Sharks', team2: 'Dolphins', date: '2024-08-25', time: '14:00' },
  { id: 4, sport: 'athletics', team1: 'Cheetahs', team2: 'Gazelles', date: '2024-08-27', time: '10:00' },
  { id: 5, sport: 'football', team1: 'Bears', team2: 'Wolves', date: '2024-08-29', time: '16:00' },
];

const Matches: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const getSportIcon = (sport: string) => {
    switch (sport) {
      case 'football':
        return <FaFutbol />;
      case 'basketball':
        return <FaBasketballBall />;
      case 'volleyball':
        return <FaVolleyballBall />;
      case 'athletics':
        return <FaRunning />;
      default:
        return null;
    }
  };

  const filteredMatches = filter === 'all' ? matches : matches.filter(match => match.sport === filter);

  return (
    <MatchesPageWrapper>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Upcoming Matches
      </motion.h1>
      <FilterButtons>
        {['all', 'football', 'basketball', 'volleyball', 'athletics'].map((sport) => (
          <FilterButton
            key={sport}
            onClick={() => setFilter(sport)}
            className={filter === sport ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {sport.charAt(0).toUpperCase() + sport.slice(1)}
          </FilterButton>
        ))}
      </FilterButtons>
      <AnimatePresence>
        {filteredMatches.map((match) => (
          <MatchCard
            key={match.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
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
      </AnimatePresence>
    </MatchesPageWrapper>
  );
};

export default Matches;