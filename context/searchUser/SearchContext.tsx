import { createContext } from 'react';
import { userResponseEmail, userResponseSearch } from '../../Interfaces/users';


interface contextProps {
   user: userResponseSearch[]
   userByMail: userResponseEmail
   getResults: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
   getUserByMail: (correo: string) => Promise<void>
   changeRole: (rol: string, idUsuario: string) => Promise<boolean>
   deleteUser: (idUsuario: string) => Promise<boolean>
}
export const SearchContext = createContext({} as contextProps);