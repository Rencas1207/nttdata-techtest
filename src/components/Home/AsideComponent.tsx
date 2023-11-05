import { Button, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaPowerOff } from 'react-icons/fa';

const AsideComponent = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate('/login');
  };

  return (
    <Stack bgColor="red.900" color="white" as="aside" w={'20%'} padding={3}>
      <Stack position="sticky" top="0" left="0">
        <Text>Renzo</Text>
        <Button
          variant="solid"
          colorScheme="red"
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
