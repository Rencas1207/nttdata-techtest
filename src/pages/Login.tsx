import Form from '../components/Login/Form';
import { Stack } from '@chakra-ui/react';

const Login = () => {
  return (
    <Stack
      background="red.500"
      height="100vh"
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Form />
    </Stack>
  );
};

export default Login;
