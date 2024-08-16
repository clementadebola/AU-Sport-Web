import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const PlayerOfMatchSection = styled.section`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
`;

const PlayerCard = styled(motion.div)`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const PlayerImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const PlayerInfo = styled.div`
  flex: 1;
`;

const TrophyIcon = styled(FaTrophy)`
  color: gold;
  margin-right: 0.5rem;
`;

const PlayerOfMatch: React.FC = () => {
  const players = [
    { id: 1, name: 'John Smith', sport: 'Football', performance: 'Scored 3 goals in the final match' },
    { id: 2, name: 'Emma Johnson', sport: 'Basketball', performance: 'Made 15 assists, leading the team to victory' },
    { id: 3, name: 'Mike Brown', sport: 'Baseball', performance: 'Pitched a no-hitter in the championship game' },
  ];

  return (
    <PlayerOfMatchSection>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Players of the Match
      </motion.h2>
      {players.map((player, index) => (
        <PlayerCard
          key={player.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PlayerImage src={`/path-to-${player.name.toLowerCase().replace(' ', '-')}.jpg`} alt={player.name} />
          <PlayerInfo>
            <h3><TrophyIcon /> {player.name}</h3>
            <p>{player.sport}</p>
            <p>{player.performance}</p>
          </PlayerInfo>
        </PlayerCard>
      ))}
    </PlayerOfMatchSection>
  );
};

export default PlayerOfMatch;