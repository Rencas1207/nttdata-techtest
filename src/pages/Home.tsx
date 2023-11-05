import { Container, Stack } from '@chakra-ui/react';
import AsideComponent from '../components/Home/AsideComponent';
import MainComponent from '../components/Home/MainComponent';

const Home = () => {
  return (
    <Container maxW="100%" padding={0}>
      <Stack bg="whiteAlpha.900" minH="100vh" flexDirection="row" spacing="3">
        <AsideComponent />
        <MainComponent />
      </Stack>
    </Container>
  );
};

export default Home;
