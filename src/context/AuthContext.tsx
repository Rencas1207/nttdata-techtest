import React, { createContext, useState } from 'react';
import { UserData } from '../libs/type';

type AuthContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  login: Function;
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
};

type AuthContextProps = {
  children: React.ReactNode;
};

interface AuthState {
  token: string | null;
  user: string;
  authenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [userData, setUserData] = useState({
    usuario: '',
    password: '',
  });

  const dataAuth = JSON.parse(localStorage.getItem('auth') || '{}');
  const [auth, setAuth] = useState<AuthState>({
    token: dataAuth ? dataAuth.token : '',
    authenticated: dataAuth ? dataAuth.authenticated : false,
    user: dataAuth ? dataAuth.user : '',
  });

  const login = async (usuario: string, password: string) => {
    return await fetch(
      `https://opembpo.emeal.nttdata.com/pre/validar_usuario?usuario=${usuario}&password=${password}`,
      {
        method: 'POST',
      }
    )
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));
  };

  return (
    <AuthContext.Provider
      value={{ userData, setUserData, login, auth, setAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
