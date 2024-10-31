import { createContext } from 'react';
import { loginResponse, registerResponse } from '../../Interfaces/login';


interface contextProps {
   AuthLogin:loginResponse[];
   AuthRegister:registerResponse[];
   loginUser: (correo: string, password: string) => Promise<boolean>;
   registerUser: (nombre: string,apellido:string, correo: string, dni:string, password: string, repeatpassword:string, recordartucontrasena: string) => Promise<boolean>;
   SubmitCorreo: (correo: string, recordartucontrasena: string) => Promise<boolean>
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   changePassword: (password: string, repeatpassword: string, token:any) => Promise<boolean>
   logout: () => void
}
export const AuthContext = createContext({} as contextProps);