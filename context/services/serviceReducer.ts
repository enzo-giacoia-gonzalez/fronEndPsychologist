import { shiftResponseById, userResponse, userResponseShift } from '../../Interfaces/users';
import { Servicestate } from './index';

type ServicestateActionType =
    | { type: 'findUser', payload: Array<[]> }
    | { type: 'findUserShift', payload: userResponseShift[] }
    | { type: 'findUserById', payload: userResponse[] }
    | { type: 'findUserByMail', payload: userResponse[] }
    | { type: 'findShiftById', payload: shiftResponseById[] }
    | { type: 'dataResult', payload: shiftResponseById[] }

export const serviceReducer = (state: Servicestate, action: ServicestateActionType): Servicestate => {
    switch (action.type) {
        case 'findUser':
            return {
                ...state,
                user: action.payload
            }

        case 'findUserShift':
            return {
                ...state,
                userWithShift: action.payload
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
        case 'findShiftById':
            return {
                ...state,
                shiftById: action.payload
            }
        case 'dataResult':
            return {
                ...state,
                dataShift: action.payload
            }

        default:
            return state;
    }
}