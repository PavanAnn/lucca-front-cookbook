// Example usage in Home.tsx

import React from 'react';
import { Container, WelcomeMessage, Introduction } from './styles';
import CategoryContainer from './Components/CategoryList';

const Home: React.FC = () => {
  return (
    <Container>
      <WelcomeMessage>Welcome to my fun way to build a portifolio!</WelcomeMessage>
      <Introduction>
        It's pretty messy for now, because my impatient self couldnt wait to try deploying this thing 
      </Introduction>
      <Introduction>
        My main idea is make it like a frontend tutoriaal website, with a lot of different things and everything that i want to try  
      </Introduction>
      <CategoryContainer />
    </Container>
  );
};

export default Home;