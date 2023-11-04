import { Button, Container, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import getGuards from '../services/getGuards';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [guards, setGuards] = useState([]);
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login');
  };

  useEffect(() => {
    async function result() {
      let results: any = [];
      results = await getGuards();
      setGuards(results);
    }
    result();
  }, []);

  return (
    <Stack bg="whitesmoke" height="full" flexDirection="row" spacing="5">
      <Stack as="aside" w={'25%'} padding={3}>
        <Text>Renzo</Text>
        <Button colorScheme="primary" onClick={handleSignOut} w="fit-content">
          Sign Out
        </Button>
      </Stack>
      <Container maxW="container.xl" w={'75%'} padding={3}>
        <Text>Home</Text>
        {guards.length === 0 && <Text>No hay registros de guardias</Text>}
        {guards?.map(({ id_guardia, estado_guardia }) => (
          <li key={id_guardia}>{estado_guardia}</li>
        ))}
      </Container>
    </Stack>
  );
};

export default Home;
