import { Stack, Input, Button } from '@chakra-ui/react';
import React, { useState, ChangeEvent, useId } from 'react';
import { useNavigate } from 'react-router-dom';

const Form: React.FC = () => {
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: '',
  });

  const id = useId();
  const navigate = useNavigate();

  const { username, password } = dataLogin;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataLogin((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(dataLogin).includes('')) return;

    navigate('/');
    setDataLogin({ username: '', password: '' });
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
        <label htmlFor={`${id}--username`}>Username</label>
        <Input
          type="text"
          name="username"
          id={`${id}--username`}
          value={username}
          onChange={handleInputChange}
          placeholder="Username"
        />
      </Stack>
      <Stack>
        <label htmlFor={`${id}--password`}>Password</label>
        <Input
          type="password"
          name="password"
          id={`${id}--password`}
          value={password}
          onChange={handleInputChange}
          placeholder="Password"
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
