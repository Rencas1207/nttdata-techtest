import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Skeleton,
  Stack,
  StackDivider,
} from '@chakra-ui/react';
import useGuardContext from '../../hooks/useGuardContext';

const TableComponent: React.FC = () => {
  const { guards, isLoading } = useGuardContext();
  return (
    <>
      {isLoading && (
        <Stack divider={<StackDivider borderColor="gray.200" />}>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      )}
      {!isLoading && guards.length === 0 && (
        <Text textAlign="center">
          No hay registro de guardias. Intentar nuevamente
        </Text>
      )}
      {!isLoading && guards.length > 0 && (
        <Table variant="striped" colorScheme="primary">
          <Thead position="sticky" top="60px" bg="white">
            <Tr>
              <Th>Id</Th>
              <Th>Estado</Th>
              <Th>Fecha</Th>
              <Th>Fecha Registro</Th>
              <Th>Agente</Th>
              <Th>Estado Agente</Th>
              <Th>Proyecto</Th>
              <Th>Rol</Th>
            </Tr>
          </Thead>
          <Tbody>
            {guards?.map(
              ({
                id_guardia,
                estado_guardia,
                fecha_guardia,
                agente,
                fecha_registro_guardia,
              }) => (
                <Tr key={id_guardia}>
                  <Td>{id_guardia}</Td>
                  <Td>{estado_guardia}</Td>
                  <Td>{fecha_registro_guardia}</Td>
                  <Td>{fecha_guardia}</Td>
                  <Td>{agente.nom_agente}</Td>
                  <Td>{agente.estado_agente}</Td>
                  <Td>{agente.proyecto.nom_proy}</Td>
                  <Td>{agente.rol.nom_rol}</Td>
                </Tr>
              )
            )}
          </Tbody>
        </Table>
      )}
    </>
  );
};

export default TableComponent;
