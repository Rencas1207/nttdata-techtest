import {
  Stack,
  Input,
  Button,
  useToast,
  FormLabel,
  FormControl,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import React, { ChangeEvent, useId, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const id = useId();
  const { userData, setUserData, login, setAuth } = useAuthContext();
  const { usuario, password } = userData;
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

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
    alert(data.msg);

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
        Iniciar Sesión
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
          type={showPassword ? 'text' : 'password'}
          name="password"
          id={`${id}--password`}
          value={password}
          onChange={handleInputChange}
          placeholder="Contraseña"
        />
        <IconButton
          position="absolute"
          right="4px"
          bg="transparent"
          zIndex="5"
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          _focusVisible={{ boxShadow: 'none' }}
          boxShadow="none"
          aria-label="show/hide password"
          icon={
            showPassword ? (
              <AiFillEye width="60px" height="60px" />
            ) : (
              <AiFillEyeInvisible width="60px" height="60px" />
            )
          }
          onClick={togglePassword}
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
