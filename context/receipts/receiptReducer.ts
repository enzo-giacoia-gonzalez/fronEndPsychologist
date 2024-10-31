import { receiptResponse, receiptResponseById, userResponse, userResponseAll, userResponseReceipt } from '../../Interfaces/users';
import { Receiptstate } from './index';

type ReceiptstateActionType =
    | { type: 'findUser', payload: Array<[]> }
    | { type: 'findUserAll', payload: userResponseAll[] }
    | { type: 'findUserByMail', payload: userResponse[] }
    | { type: 'findUserById', payload: userResponse[] }
    | { type: 'findUserReceipt', payload: userResponseReceipt[] }
    | { type: 'findReceiptById', payload: receiptResponseById }
    | { type: 'findReceipt', payload: receiptResponse[] }


export const receiptReducer = (state: Receiptstate, action: ReceiptstateActionType): Receiptstate => {
    switch (action.type) {
        case 'findUser':
            return {
                ...state,
                user: action.payload
            }
        case 'findUserAll':
            return {
                ...state,
                allUsers: action.payload
            }

        case 'findUserById':
            return {
                ...state,
                userById: action.payload
            }

        case 'findUserByMail':
            return {
                ...state,
                userByMail: action.payload
            }

        case 'findUserReceipt':
            return {
                ...state,
                userWithReceipt: action.payload
            }
        case 'findReceiptById':
            return {
                ...state,
                receiptById: action.payload
            }
        case 'findReceipt':
            return {
                ...state,
                receiptAll: action.payload
            }



        default:
            return state;
    }
}