import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Arial', sans-serif;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #117BF6;
  margin-bottom: 20px;
  text-align: center;
`;

const TestimonialList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards horizontally */
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const TestimonialCard = styled.div`
  border: 1px solid #ddd;
 background-color: ${(props) => (props.theme === 'dark' ? '#ccd9ff' : 'white')};
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 90%; /* Full width on small screens */
  }
`;

const Name = styled.h2`
  font-size: 1.5em;
 color:${(props) => (props.theme === 'dark' ? '#000066' : '#333')};
  margin-bottom: 10px;
`;

const Feedback = styled.p`
  font-size: 1em;
  color: #555;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
`;

const Star = styled.span`
  color: ${(props) => (props.filled ? '#f39c12' : '#ddd')};
  font-size: 1.5em;
  margin-right: 5px;
`;

const TestimonialPage = ({ theme, language }) => {
  // Testimonials array with both English and Amharic feedback
  const testimonials = [
    {
      name: {
        English: 'Gemechu Feyisa',
        Amharic: 'ግምቹ ፍይሳ'
      },
      feedback: {
        English: 'Great service and fantastic results. Highly recommended!',
        Amharic: 'ታላቅ አገልግሎት እና አስደናቂ ውጤቶች. በጣም የሚመከር ሥራ!።'
      },
      rating: 5
    },
    {
      name: {
        English: 'Nahom Ayele',
        Amharic: 'ናሆም አየሌ'
      },
      feedback: {
        English: 'Good experience but there is room for improvement. and nice motivation',
        Amharic: 'ጥሩ ተሞክሮ ቢኖረንም ማሻሻያ ማድረግ ያስፈልጋል ። እና ጥሩ ውስጣዊ ግፊት::'
      },
      rating: 4
    },
    {
      name: {
        English: 'Natinael Seifu',
        Amharic: 'ናቲናኤል ሴይፉ'
      },
      feedback: {
        English: 'Average service, expected more based on the reviews.',
        Amharic: 'አማካይ አገልግሎት, በክለሳዎቹ ላይ ተመስርቶ የበለጠ ይጠበቃል።'
      },
      rating: 3
    }
  ];
  

  return (
    <Container>
      <Title>{language === "English" ? "What Our Clients Say" : "ደንበኞቻችን ምን ይላሉ?"}</Title>
      <TestimonialList>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} theme={theme}>
            <Name theme={theme}>{testimonial.name[language]}</Name>
            <Feedback>{testimonial.feedback[language]}</Feedback>
            <Rating>
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < testimonial.rating}>★</Star>
              ))}
            </Rating>
          </TestimonialCard>
        ))}
      </TestimonialList>
    </Container>
  );
};

export default TestimonialPage;