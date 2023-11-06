import {
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Modal,
  useToast,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import useGuardContext from '../../hooks/useGuardContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent = ({ isOpen, onClose }: Props) => {
  const { addGuard, dateGuard, setDateGuard } = useGuardContext();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateGuard) return;
    const result = await addGuard(dateGuard);
    if (result !== 'Listo') {
      toast({
        title:
          'El usuario ya cuenta con una guardia registrada en la fecha indicada.',
        status: 'error',
        isClosable: true,
      });
      setDateGuard('');
      return;
    }
    toast({
      title: 'Registro añadido exitosamente',
      status: 'success',
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      {!isOpen ? null : (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="none"
            backdropFilter="auto"
            backdropInvert="30%"
            backdropBlur="2px"
          />
          <ModalContent>
            <ModalHeader as="h3" color="primary">
              Agregar Nuevo Guardia
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack
                as="form"
                onSubmit={handleSubmit}
                flexDirection="column"
                spacing={5}
                padding={3}
              >
                <FormControl>
                  <FormLabel>Fecha</FormLabel>
                  <Input
                    type="date"
                    autoComplete="off"
                    onChange={(e) => {
                      setDateGuard(e.target.value);
                    }}
                  />
                </FormControl>
                <Button
                  type="submit"
                  w="50%"
                  mx="auto"
                  colorScheme="primary"
                  padding={5}
                >
                  Registrar
                </Button>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default ModalComponent;
