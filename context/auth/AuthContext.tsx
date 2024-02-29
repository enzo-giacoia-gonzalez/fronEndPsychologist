import { createContext } from 'react';
import { loginResponse, registerResponse } from '../../Interfaces/login';


interface contextProps {
   AuthLogin:loginResponse;
   AuthRegister:registerResponse;
   loginUser: (correo: string, password: string) => Promise<boolean>;
   registerUser: (nombre: string, correo: string, password: string, recordartucontrasena: string) => Promise<boolean>;
   logout: () => void
}
export const AuthContext = createContext({} as contextProps);