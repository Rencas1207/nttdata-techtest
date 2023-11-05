import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (context === null) {
    throw new Error(
      'useAuthContext must be used within an AuthContextProvider'
    );
  }

  return context;
}

export default useAuthContext;
