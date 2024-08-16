import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaCalendar, FaUser, FaTag } from 'react-icons/fa';

const BlogWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background-color: #f5f5f5;
  border-radius: 25px;
  padding: 0.5rem 1rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
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

const CategoryFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled(motion.button)`
  background-color: #f0f0f0;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
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

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1rem;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const BlogTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

const BlogExcerpt = styled.p`
  font-size: 0.9rem;
  color: #444;
  margin-bottom: 1rem;
`;

const ReadMoreButton = styled(motion.button)`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const blogPosts = [
  { id: 1, title: 'Top 10 Training Tips for Young Athletes', date: '2024-08-15', author: 'Coach Smith', category: 'Training', excerpt: 'Discover the best training tips to help young athletes reach their full potential...', image: '/path-to-training-image.jpg' },
  { id: 2, title: 'The Importance of Mental Health in Sports', date: '2024-08-12', author: 'Dr. Johnson', category: 'Health', excerpt: 'Learn why mental health is crucial for athletes and how to maintain it...', image: '/path-to-mental-health-image.jpg' },
  { id: 3, title: "Celebrating Our School's Latest Championship Win", date: '2024-08-10', author: 'Sarah Davis', category: 'News', excerpt: "Relive the excitement of our school's recent championship victory...", image: '/path-to-championship-image.jpg' },
  { id: 4, title: 'Nutrition Guide for Student Athletes', date: '2024-08-08', author: 'Nutritionist Jane', category: 'Health', excerpt: 'Get expert advice on the best nutrition practices for student athletes...', image: '/path-to-nutrition-image.jpg' },
  { id: 5, title: "Building Team Spirit: A Coach's Perspective", date: '2024-08-05', author: 'Coach Anderson', category: 'Coaching', excerpt: 'Discover effective strategies for fostering team spirit and unity...', image: '/path-to-team-spirit-image.jpg' },
];

const BlogSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post =>
    (activeCategory === 'All' || post.category === activeCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <BlogWrapper>
      <BlogHeader>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Blog
        </motion.h1>
        <SearchBar>
          <FaSearch />
          <SearchInput
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBar>
      </BlogHeader>

      <CategoryFilter>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => setActiveCategory(category)}
            className={activeCategory === category ? 'active' : ''}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilter>

      <BlogGrid>
        <AnimatePresence>
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogContent>
                <BlogMeta>
                  <span><FaCalendar /> {post.date}</span>
                  <span><FaUser /> {post.author}</span>
                </BlogMeta>
                <BlogTitle>{post.title}</BlogTitle>
                <BlogMeta>
                  <span><FaTag /> {post.category}</span>
                </BlogMeta>
                <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                <ReadMoreButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                </ReadMoreButton>
              </BlogContent>
            </BlogCard>
          ))}
        </AnimatePresence>
      </BlogGrid>
    </BlogWrapper>
  );
};

export default BlogSection;