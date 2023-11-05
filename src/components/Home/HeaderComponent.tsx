import { Button, Heading, Stack } from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

interface Props {
  onOpen: () => void;
}

const HeaderComponent = ({ onOpen }: Props) => {
  return (
    <Stack
      as="header"
      w="full"
      display="flex"
      justifyContent="space-between"
      flexDirection="row"
      paddingX={1}
      paddingY={3}
      position="sticky"
      top="0"
      bg="white"
      zIndex={5}
    >
      <Heading as="h1" w="fit-content">
        Guardias registrados
      </Heading>
      <Button
        colorScheme="primary"
        leftIcon={<FiPlus />}
        onClick={onOpen}
        w="fit-content"
      >
        Agregar Guardia
      </Button>
    </Stack>
  );
};

export default HeaderComponent;
