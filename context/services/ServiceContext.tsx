import { createContext } from 'react';
import { shiftResponseById, userResponse, userResponseShift } from '../../Interfaces/users';


interface contextProps {
    user:Array<[]>
    userWithShift:userResponseShift[]
    userById:userResponse[]
    userByMail:userResponse[]
    shiftById: shiftResponseById[]
    dataShift:shiftResponseById[]
    searchUser: () => Promise<void>
    searchUserShifts: () => Promise<void>
    getResults: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
    getResultsShift: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
    getUserByMail: (correo: string) => Promise<void>
    getUserById: (id: string) => Promise<boolean>
    getShiftById: (shiftId: string) => Promise<void>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    addService: (titulo: string, fileImg: any, fechayhora: string, linksesion: string, precio: string, usuario: any) => Promise<boolean>
    putService: (titulo: string, fileImg: any, fechayhora: string, linksesion: string, precio: string, pago:string, usuario: string, turnoId: string) => Promise<boolean>
    deleteService: (turnoId: string) => Promise<boolean>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
}
export const ServiceContext = createContext({} as contextProps);