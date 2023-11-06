import {
  Stack,
  Input,
  Button,
  useToast,
  FormLabel,
  FormControl,
  Heading,
} from '@chakra-ui/react';
import React, { ChangeEvent, useId } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const id = useId();
  const { userData, setUserData, login, setAuth } = useAuthContext();
  const { usuario, password } = userData;
  const navigate = useNavigate();
  const toast = useToast();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(userData).includes('')) {
      toast({
        title: 'Ingresar un usuario y/o contraseña',
        status: 'error',
        isClosable: true,
      });
      return;
    }

    let data: any;
    data = await login(usuario, password);
    if (!data.id_rol) {
      toast({
        title: data.msg,
        status: 'error',
        isClosable: true,
      });
      setUserData({ usuario: '', password: '' });
      return;
    }

    setAuth({
      token: data.owl,
      user: data.nom_agente,
      authenticated: true,
    });
    setUserData({ usuario: '', password: '' });
    let authStorage = {
      token: data.owl,
      user: data.nom_agente,
      authenticated: true,
    };
    localStorage.setItem('auth', JSON.stringify(authStorage));
    navigate('/guards');
  };

  return (
    <Stack
      as="form"
      flexDirection="column"
      background="whiteAlpha.900"
      borderRadius="3xl"
      padding={8}
      maxWidth="500px"
      width="90%"
      spacing="6"
      onSubmit={handleSubmit}
    >
      <Heading as="h1" size={'lg'} textAlign="center">
        Login
      </Heading>
      <FormControl>
        <FormLabel htmlFor={`${id}--usuario`}>Usuario</FormLabel>
        <Input
          type="text"
          name="usuario"
          id={`${id}--usuario`}
          value={usuario}
          onChange={handleInputChange}
          placeholder="Usuario"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor={`${id}--password`}>Contraseña</FormLabel>
        <Input
          type="password"
          name="password"
          id={`${id}--password`}
          value={password}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
      </FormControl>
      <Button
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
