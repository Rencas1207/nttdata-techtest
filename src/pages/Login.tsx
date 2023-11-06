import { useEffect } from 'react';
import Form from '../components/Login/Form';
import { Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';

const Login = () => {
  const { auth } = useAuthContext();
  const { authenticated } = auth;

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/guards');
    }
  }, [authenticated, navigate]);

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
        <Form />
      </Stack>
    </Stack>
  );
};

export default Login;
