import { useContext } from 'react';
import { GuardContext } from '../context/GuardContext';

export function useGuardContext() {
  const context = useContext(GuardContext);

  if (context === null) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }

  return context;
}

export default useGuardContext;
