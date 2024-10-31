import { receiptResponse, receiptResponseById, userResponseAll, userResponseByEmail, userResponseCalendar, userResponseReceipt } from '../../Interfaces/users';
import { Calendarstate } from './index';

type CalendarstateActionType =
| { type: 'findUser', payload: Array<[]> }
| { type: 'findUserAll', payload: userResponseAll[] }
| { type: 'findUserByMail', payload: userResponseByEmail }
| { type: 'findUserById', payload: userResponseCalendar }
| { type: 'findUserReceipt', payload: userResponseReceipt[] }
| { type: 'findReceiptById', payload: receiptResponseById }
| { type: 'findReceipt', payload: receiptResponse[] }

export const calendarReducer = (state: Calendarstate, action: CalendarstateActionType): Calendarstate => {
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