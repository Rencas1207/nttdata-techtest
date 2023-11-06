import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Stack
      style={{
        background: "url('/bg-login.jpg') no-repeat center / cover",
      }}
      h="100vh"
      w="100%"
    >
      <Stack
        w="inherit"
        h="inherit"
        bg="whiteAlpha.300"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          flexDirection="column"
          background="whiteAlpha.900"
          borderRadius="3xl"
          padding={8}
          maxWidth="500px"
          width="90%"
          textAlign="center"
        >
          <Heading as="h2" size="lg">
            Page Not Found 404
          </Heading>
          <Text mt={5}>
            Lo sentimos, la página que estás buscando no existe.
          </Text>
          <Button mt={5} variant="solid" colorScheme="primary">
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default NotFound;
