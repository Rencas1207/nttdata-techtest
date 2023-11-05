import { Stack, Input, Button } from '@chakra-ui/react';

import React, { ChangeEvent, useId } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const id = useId();
  const { userData, setUserData, login } = useAuthContext();
  const { usuario, password } = userData;
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(userData).includes('')) return;

    login(usuario, password);
    // navigate('/');
  };

  return (
    <Stack
      as="form"
      flexDirection="column"
      background="whiteAlpha.900"
      borderRadius="3xl"
      padding={4}
      maxWidth="500px"
      width="full"
      spacing="6"
      onSubmit={handleSubmit}
    >
      <Stack>
        <label htmlFor={`${id}--usuario`}>Usuario</label>
        <Input
          type="text"
          name="usuario"
          id={`${id}--usuario`}
          value={usuario}
          onChange={handleInputChange}
          placeholder="Usuario"
        />
      </Stack>
      <Stack>
        <label htmlFor={`${id}--password`}>Contraseña</label>
        <Input
          type="password"
          name="password"
          id={`${id}--password`}
          value={password}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
      </Stack>
      <Button
        // isLoading
        loadingText="Submitting"
        colorScheme="primary"
        variant="solid"
        type="submit"
        spinnerPlacement="start"
      >
        Sign In
      </Button>
    </Stack>
  );
};

export default Form;
