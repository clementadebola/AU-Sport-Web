import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const PlayersPageWrapper = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #f0f0f0;
  border-radius: 25px;
  padding: 0.5rem 1rem;
`;

const SearchInput = styled.input`
  border: none;
  background: none;
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const PlayerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const PlayerCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const PlayerImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const PlayerInfo = styled.div`
  padding: 1rem;
`;

const players = [
  { id: 1, name: 'John Doe', sport: 'Football', position: 'Forward', image: '/path-to-john-doe.jpg' },
  { id: 2, name: 'Jane Smith', sport: 'Basketball', position: 'Point Guard', image: '/path-to-jane-smith.jpg' },
  { id: 3, name: 'Mike Johnson', sport: 'Volleyball', position: 'Setter', image: '/path-to-mike-johnson.jpg' },
  { id: 4, name: 'Emily Brown', sport: 'Athletics', position: 'Sprinter', image: '/path-to-emily-brown.jpg' },
  { id: 5, name: 'Chris Lee', sport: 'Football', position: 'Goalkeeper', image: '/path-to-chris-lee.jpg' },
  // Add more players as needed
];

const Players: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.sport.toLowerCase().includes(searchTerm.toLowerCase()) ||
    player.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PlayersPageWrapper>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Players
      </motion.h1>
      <SearchBar>
        <FaSearch />
        <SearchInput
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchBar>
      <PlayerGrid>
        <AnimatePresence>
          {filteredPlayers.map((player) => (
            <PlayerCard
              key={player.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <PlayerImage src={player.image} alt={player.name} />
              <PlayerInfo>
                <h3>{player.name}</h3>
                <p>{player.sport} - {player.position}</p>
              </PlayerInfo>
            </PlayerCard>
          ))}
        </AnimatePresence>
      </PlayerGrid>
    </PlayersPageWrapper>
  );
};

export default Players;