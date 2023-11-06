import React from 'react';
import { Container, Stack } from '@chakra-ui/react';
import AsideComponent from '../components/Home/AsideComponent';
import MainComponent from '../components/Home/MainComponent';

const Home = () => {
  return (
    <Container maxW="100%" padding={0}>
      <Stack
        bg="whiteAlpha"
        minH="100vh"
        flexDirection={{ base: 'column', lg: 'row' }}
        spacing="3"
      >
        <AsideComponent />
        <MainComponent />
      </Stack>
    </Container>
  );
};

export default Home;
