import { createContext } from 'react';
import { shiftResponseAll, shiftResponseById,  userResponseAll, userResponseByEmail, userResponseById, userResponseShift } from '../../Interfaces/users';


interface contextProps {
    user:userResponseAll[]
    userWithShift:userResponseShift[]
    userById:userResponseById
    userByMail:userResponseByEmail
    shiftById: shiftResponseById
    shiftAll:shiftResponseAll[]
    dataShift:shiftResponseById
    searchUser: () => Promise<void>
    searchUserShifts: () => Promise<void>
    getResults: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
    getResultsShift: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
    getUserByMail: (correo: string) => Promise<void>
    getUserById: (id: string) => Promise<boolean>
    getShiftById: (shiftId: string) => Promise<void>
    getShift: () => Promise<void>
    addService: (titulo: string, fileImg: string, fechayhora: string, linksesion: string, precio: number, moneda:string, usuario: string) => Promise<void>
    putService: (titulo: string, fileImg: string, fechayhora: string, linksesion: string, precio: number, pago:string, moneda:string, usuario: string, turnoId: string) => Promise<boolean>
    deleteService: (turnoId: string) => Promise<boolean>
    
}
export const ServiceContext = createContext({} as contextProps);