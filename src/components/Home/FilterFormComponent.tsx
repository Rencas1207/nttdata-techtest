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

const FilterFormComponent = () => {
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
    <Stack>
      <Heading as="h2" size="lg">
        Filtrar los guardias por rangos de fechas
      </Heading>
      <Stack
        as="form"
        onSubmit={handleSubmit}
        flexDirection="row"
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
          w="80%"
          // mx="auto"
          colorScheme="primary"
          padding={5}
        >
          Filtrar
        </Button>
      </Stack>
    </Stack>
  );
};

export default FilterFormComponent;
