import { createContext } from 'react';
import { receiptResponse, receiptResponseById, userResponse, userResponseAll, userResponseReceipt } from '../../Interfaces/users';


interface contextProps {
    user: Array<[]>
    allUsers: userResponseAll[]
    userByMail: userResponse[]
    userById: userResponse[]  
    userWithReceipt:userResponseReceipt[]
    receiptById:receiptResponseById[]
    receiptAll:receiptResponse[]
    searchUser: () => Promise<void>,
    searchUserReceipt: () => Promise<void>
    getResults: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
    getResultsReceipt: (searchinput?: string, searchinputcategoria?: string) => Promise<void>
    getUserAll: () => Promise<boolean>
    getUserById: (id: string) => Promise<boolean>
    getUserByMail: (correo: string) => Promise<void>
    getReceipts: () => Promise<void>
    getReceiptById: (receiptId: string) => Promise<void>
    addReceipt: (titulo: string, fechayhora: string, precio: string, aprobado: string, usuario: string) => Promise<boolean>
    putReceipt: (titulo: string, fechayhora: string, precio: number, pago: string, usuario: string, comprobanteId: string) => Promise<boolean>
    deleteReceipt: (receiptId: string) => Promise<boolean>
}
export const ReceiptContext = createContext({} as contextProps);