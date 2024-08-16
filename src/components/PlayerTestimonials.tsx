import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #ffffff;
`;

const TestimonialCard = styled(motion.div)`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

const PlayerImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const TestimonialContent = styled.div`
  flex: 1;
`;

const QuoteIcon = styled.span`
  color: #4CAF50;
  margin-right: 0.5rem;
`;

const PlayerTestimonials: React.FC = () => {
  const testimonials = [
    { id: 1, name: 'Sarah Davis', sport: 'Volleyball', quote: 'The sports program has helped me grow both as an athlete and as a person.' },
    { id: 2, name: 'Alex Turner', sport: 'Swimming', quote: 'I\'ve made lifelong friends and unforgettable memories through our school sports.' },
    { id: 3, name: 'Olivia Chen', sport: 'Tennis', quote: 'The coaches here are amazing. They\'ve helped me improve my skills and boost my confidence.' },
  ];

  return (
    <TestimonialsSection>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Player Testimonials
      </motion.h2>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={testimonial.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <PlayerImage src={`/path-to-${testimonial.name.toLowerCase().replace(' ', '-')}.jpg`} alt={testimonial.name} />
          <TestimonialContent>
            <p><QuoteIcon><FaQuoteLeft /></QuoteIcon>{testimonial.quote}<QuoteIcon><FaQuoteRight /></QuoteIcon></p>
            <p><strong>{testimonial.name}</strong> - {testimonial.sport}</p>
          </TestimonialContent>
        </TestimonialCard>
      ))}
    </TestimonialsSection>
  );
};

export default PlayerTestimonials;