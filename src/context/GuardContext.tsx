import React, { ChangeEvent, createContext, useEffect, useState } from 'react';
import addGuards from '../services/addGuards';
import { FilterDate, Guard } from '../libs/type';
import getGuards from '../services/getGuards';

type GuardContextType = {
  dateGuard: string;
  setDateGuard: React.Dispatch<React.SetStateAction<string>>;
  addGuard: Function;
  handleInputChange: any; // todo refactoe
  guards: Guard[];
  setGuards: React.Dispatch<React.SetStateAction<any>>;
  filterDate: FilterDate;
  setFilterDate: React.Dispatch<React.SetStateAction<FilterDate>>;
  isFiltering: boolean;
  setIsFiltering: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type GuardContextProps = {
  children: React.ReactNode;
};

export const GuardContext = createContext<GuardContextType | null>(null);

export const GuardProvider = ({ children }: GuardContextProps) => {
  const [dateGuard, setDateGuard] = useState('');
  const [guards, setGuards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(true);
  const [filterDate, setFilterDate] = useState<FilterDate>({
    startDate: '2023-11-01',
    endDate: '2023-11-30',
  });

  useEffect(() => {
    async function result() {
      let results: any = [];
      if (isFiltering) {
        results = await getGuards(filterDate);
        setGuards(results);
        setIsFiltering(false);
        setIsLoading(false);
      }
    }
    result();
  }, [isFiltering]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilterDate((prevState) => ({ ...prevState, [name]: value }));
  };

  const addGuard = async (guard: string) => {
    return await addGuards(guard);
  };

  return (
    <GuardContext.Provider
      value={{
        addGuard,
        dateGuard,
        setDateGuard,
        guards,
        setGuards,
        filterDate,
        setFilterDate,
        isFiltering,
        setIsFiltering,
        handleInputChange,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </GuardContext.Provider>
  );
};
