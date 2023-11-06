import { Button, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';
import useAuthContext from '../../hooks/useAuthContext';

const AsideComponent = () => {
  const { setAuth } = useAuthContext();
  const navigate = useNavigate();
  const { auth } = useAuthContext();
  const { user } = auth;

  const handleSignOut = () => {
    navigate('/');
    setAuth({
      token: '',
      authenticated: false,
      user: '',
    });
    localStorage.removeItem('auth');
  };

  return (
    <Stack
      bgColor="red.900"
      color="white"
      as="aside"
      width={{ base: '100%', lg: '20%' }}
      padding={3}
    >
      <Stack
        position={{ base: 'fixed', lg: 'sticky' }}
        zIndex={10}
        bgColor="red.900"
        w="full"
        padding={3}
        top="0"
        left="0"
        flexDirection={{ base: 'row', lg: 'column' }}
        justifyContent={{ base: 'space-between', lg: 'center' }}
        alignItems={{ base: 'center', lg: 'center' }}
        spacing={8}
      >
        <Stack
          flexDirection={{ base: 'row', lg: 'column' }}
          alignItems={{ base: 'center', lg: 'center' }}
          spacing={{ base: '3', lg: '6' }}
          justifyContent={{ base: 'start', lg: 'center' }}
        >
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 21V19.5C4 16.4624 6.46243 14 9.5 14H14.5C17.5376 14 20 16.4624 20 19.5V21M8 21V18.5M16 21V18.3333M8.5 6.5C10.514 8.22631 13.486 8.22631 15.5 6.5M16 7V4.92755L17.4657 2.78205C17.6925 2.45018 17.4548 2 17.0529 2H6.94712C6.5452 2 6.30755 2.45018 6.53427 2.78205L8 4.92755V7M16 8C16 10.2091 14.2091 12 12 12C9.79086 12 8 10.2091 8 8V5.5H16V8Z"
              stroke="#FFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.4"
            />
          </svg>
          <Text>Hola 👋 {user}</Text>
        </Stack>

        <Button
          variant="solid"
          colorScheme="primary"
          onClick={handleSignOut}
          w="fit-content"
          leftIcon={<FaPowerOff />}
        >
          Sign Out
        </Button>
      </Stack>
    </Stack>
  );
};

export default AsideComponent;
