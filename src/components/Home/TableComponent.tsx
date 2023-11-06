import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';
import useGuardContext from '../../hooks/useGuardContext';
import { formatDate } from '../../libs/formatDate';
import LoadingComponent from './LoadingComponent';

const TableComponent: React.FC = () => {
  const { guards, isLoading } = useGuardContext();

  return (
    <>
      {isLoading && <LoadingComponent />}
      {!isLoading && guards?.length === 0 && (
        <Text textAlign="center">No hay registro de guardias 😔</Text>
      )}
      {!isLoading && guards?.length > 0 && (
        <Table
          variant="striped"
          colorScheme="primary"
          display={{ base: 'block', lg: 'table' }}
          overflowX={{ base: 'scroll', lg: 'unset' }}
          css={{
            '&::-webkit-scrollbar': {
              width: '1px',
            },
            '&::-webkit-scrollbar-track': {
              width: '1px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#E53E3E',
              borderRadius: '10px',
            },
          }}
        >
          <Thead
            position={{ base: 'static', lg: 'sticky' }}
            top="60px"
            bg="white"
          >
            <Tr>
              <Th>Id</Th>
              <Th>Estado</Th>
              <Th>Fecha</Th>
              <Th>Agente</Th>
              <Th>Estado Agente</Th>
              <Th>Proyecto</Th>
              <Th>Rol</Th>
            </Tr>
          </Thead>
          <Tbody>
            {guards?.map(
              ({ id_guardia, estado_guardia, fecha_guardia, agente }) => (
                <Tr key={id_guardia}>
                  <Td>{id_guardia}</Td>
                  <Td>{estado_guardia}</Td>
                  <Td>{formatDate(fecha_guardia)}</Td>
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
