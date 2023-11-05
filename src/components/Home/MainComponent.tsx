import HeaderComponent from './HeaderComponent';
import FilterFormComponent from './FilterFormComponent';
import ModalComponent from './ModalComponent';
import TableComponent from './TableComponent';
import { Stack, StackDivider, useDisclosure } from '@chakra-ui/react';

const MainComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Stack
      as="main"
      w={'80%'}
      divider={<StackDivider borderColor="gray.200" />}
      spacing={8}
      padding={3}
    >
      <HeaderComponent onOpen={onOpen} />
      <FilterFormComponent />
      <TableComponent />
      <ModalComponent isOpen={isOpen} onClose={onClose} />
    </Stack>
  );
};

export default MainComponent;
