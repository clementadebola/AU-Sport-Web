import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTrophy, FaChartLine, FaRunning } from 'react-icons/fa';

const ProfileWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProfileImage = styled(motion.img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 2rem;
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled(motion.div)`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

const AchievementList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AchievementItem = styled(motion.li)`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const PlayerProfile: React.FC = () => {
  const playerInfo = {
    name: 'Sarah Johnson',
    sport: 'Basketball',
    position: 'Point Guard',
    number: 10,
    year: 'Senior',
    height: "5'9\"",
    weight: '145 lbs',
  };

  const playerStats = [
    { label: 'Points per Game', value: 18.5, icon: <FaChartLine /> },
    { label: 'Assists per Game', value: 7.2, icon: <FaChartLine /> },
    { label: 'Rebounds per Game', value: 4.3, icon: <FaChartLine /> },
    { label: 'Steals per Game', value: 2.1, icon: <FaRunning /> },
  ];

  const playerAchievements = [
    { year: 2023, achievement: 'Team MVP' },
    { year: 2022, achievement: 'All-State First Team' },
    { year: 2021, achievement: 'Conference Rookie of the Year' },
  ];

  return (
    <ProfileWrapper>
      <ProfileHeader>
        <ProfileImage
          src="/path-to-sarah-johnson.jpg"
          alt={playerInfo.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <ProfileInfo>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {playerInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {playerInfo.sport} - {playerInfo.position}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            #{playerInfo.number} | {playerInfo.year}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {playerInfo.height} | {playerInfo.weight}
          </motion.p>
        </ProfileInfo>
      </ProfileHeader>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Player Statistics
      </motion.h2>
      <StatGrid>
        {playerStats.map((stat, index) => (
          <StatCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          >
            {stat.icon}
            <h3>{stat.label}</h3>
            <p>{stat.value}</p>
          </StatCard>
        ))}
      </StatGrid>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Achievements
      </motion.h2>
      <AchievementList>
        {playerAchievements.map((achievement, index) => (
          <AchievementItem
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          >
            <FaTrophy style={{ marginRight: '1rem' }} />
            <div>
              <strong>{achievement.year}</strong>: {achievement.achievement}
            </div>
          </AchievementItem>
        ))}
      </AchievementList>
    </ProfileWrapper>
  );
};

export default PlayerProfile;