import React, { createContext, useState } from 'react';
import { UserData } from '../libs/type';

import clientAxios from '../config/axios';
import axios from 'axios';

type AuthContextType = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  login: (usuario: string, password: string) => void;
};

type AuthContextProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [userData, setUserData] = useState({
    usuario: '',
    password: '',
  });

  // const navigate = useNavigate();

  const login = async (user: string, pwd: string) => {
    console.log(user, pwd);

    try {
      const result = await clientAxios.post(
        `/pre/validar_usuario?usuario=${user}&password=${pwd}`,
        {}
      );
      console.log(result.data);
      return result.data;
    } catch (error: any) {
      console.log(error.response.data);
    }

    // console.log(results);
    // setUserData({ usuario: '', password: '' });
  };

  return (
    <AuthContext.Provider value={{ userData, setUserData, login }}>
      {children}
    </AuthContext.Provider>
  );
};
