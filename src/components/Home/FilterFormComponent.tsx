import React, { useRef } from 'react';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import useGuardContext from '../../hooks/useGuardContext';
import getGuards from '../../services/getGuards';

const FilterFormComponent: React.FC = () => {
  const { filterDate, setIsFiltering, handleInputChange, setIsLoading } =
    useGuardContext();
  const { startDate, endDate } = filterDate;
  const previousStartDate = useRef(startDate);
  const previousEndDate = useRef(endDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      previousStartDate.current === startDate &&
      previousEndDate.current === endDate
    ) {
      return;
    }
    getGuards({ startDate, endDate });
    previousStartDate.current = startDate;
    previousEndDate.current = endDate;
    setIsFiltering(true);
    setIsLoading(true);
  };

  return (
    <>
      <Heading as="h2" size="lg">
        Filtrar los guardias por rangos de fechas
      </Heading>
      <Stack
        as="form"
        onSubmit={handleSubmit}
        flexDirection={{ base: 'column', lg: 'row' }}
        alignItems="end"
        spacing={5}
        padding={3}
      >
        <FormControl>
          <FormLabel>Fecha de inicio:</FormLabel>
          <Input
            type="date"
            autoComplete="off"
            name="startDate"
            value={startDate}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Fecha de fin:</FormLabel>
          <Input
            type="date"
            autoComplete="off"
            name="endDate"
            value={endDate}
            onChange={handleInputChange}
          />
        </FormControl>
        <Button
          type="submit"
          w={{ base: '100%', md: '60%', lg: '80%' }}
          colorScheme="primary"
          marginX={{ base: 'auto', lg: '0' }}
          padding={5}
        >
          Filtrar
        </Button>
      </Stack>
    </>
  );
};

export default FilterFormComponent;
