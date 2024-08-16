import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaTag, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const BlogPageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FeaturedImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
`;

const MetaItem = styled.span`
  margin: 0 1rem;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;

const BlogContent = styled.div`
  line-height: 1.6;
  font-size: 1.1rem;
  color: #333;
`;

const AuthorSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const AuthorImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const AuthorInfo = styled.div`
  flex: 1;
`;

const SocialShare = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: #333;
  font-size: 1.5rem;
  margin: 0 1rem;
  cursor: pointer;
`;

const RelatedPosts = styled.div`
  margin-top: 3rem;
`;

const RelatedPostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const RelatedPostCard = styled(motion.div)`
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const RelatedPostImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const RelatedPostTitle = styled.h4`
  padding: 0.5rem;
  margin: 0;
  font-size: 0.9rem;
`;

const CommentSection = styled.div`
  margin-top: 3rem;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CommentInput = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled(motion.button)`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;

const Blog: React.FC = () => {
  // This would typically come from your data source or API
  const blogPost = {
    id: 1,
    title: 'The Importance of Mental Health in Sports',
    date: '2024-08-12',
    author: 'Dr. Johnson',
    category: 'Health',
    image: '/path-to-mental-health-image.jpg',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <h2>Understanding Mental Health in Sports</h2>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
    `,
    authorBio: 'Dr. Johnson is a sports psychologist with over 15 years of experience working with athletes at all levels.',
    authorImage: '/path-to-dr-johnson-image.jpg',
  };

  const relatedPosts = [
    { id: 2, title: 'Nutrition Guide for Student Athletes', image: '/path-to-nutrition-image.jpg' },
    { id: 3, title: "Building Team Spirit: A Coach's Perspective", image: '/path-to-team-spirit-image.jpg' },
    { id: 4, title: 'Top 10 Training Tips for Young Athletes', image: '/path-to-training-image.jpg' },
  ];

  return (
    <BlogPageWrapper>
      <BlogHeader>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {blogPost.title}
        </motion.h1>
        <BlogMeta>
          <MetaItem><FaCalendar /> {blogPost.date}</MetaItem>
          <MetaItem><FaUser /> {blogPost.author}</MetaItem>
          <MetaItem><FaTag /> {blogPost.category}</MetaItem>
        </BlogMeta>
      </BlogHeader>

      <FeaturedImage
        src={blogPost.image}
        alt={blogPost.title}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <BlogContent dangerouslySetInnerHTML={{ __html: blogPost.content }} />

      <AuthorSection>
        <AuthorImage src={blogPost.authorImage} alt={blogPost.author} />
        <AuthorInfo>
          <h3>{blogPost.author}</h3>
          <p>{blogPost.authorBio}</p>
        </AuthorInfo>
      </AuthorSection>

      <SocialShare>
        <SocialIcon href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaFacebook />
        </SocialIcon>
        <SocialIcon href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <FaLinkedin />
        </SocialIcon>
      </SocialShare>

      <RelatedPosts>
        <h2>Related Posts</h2>
        <RelatedPostGrid>
          {relatedPosts.map((post) => (
            <RelatedPostCard
              key={post.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RelatedPostImage src={post.image} alt={post.title} />
              <RelatedPostTitle>{post.title}</RelatedPostTitle>
            </RelatedPostCard>
          ))}
        </RelatedPostGrid>
      </RelatedPosts>

      <CommentSection>
        <h2>Leave a Comment</h2>
        <CommentForm>
          <CommentInput placeholder="Write your comment here..." rows={4} />
          <SubmitButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Comment
          </SubmitButton>
        </CommentForm>
        {/* You can add a list of existing comments here */}
      </CommentSection>
    </BlogPageWrapper>
  );
};

export default Blog;