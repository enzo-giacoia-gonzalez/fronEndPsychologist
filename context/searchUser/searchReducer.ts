import { userResponseEmail } from '../../Interfaces/users';
import { Searchstate } from './index';

type SearchstateActionType =
    | { type: 'findUser', payload: Array<[]> }
    | { type: 'findUserByMail', payload:userResponseEmail[] }

export const searchReducer = (state: Searchstate, action: SearchstateActionType): Searchstate => {
    switch (action.type) {
        case 'findUser':
            return {
                ...state,
                user: action.payload
            }
        case 'findUserByMail':
            return {
                ...state,
                userByMail: action.payload
            }

        default:
            return state;
    }
}