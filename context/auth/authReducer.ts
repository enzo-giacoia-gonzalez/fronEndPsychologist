import { loginResponse, registerResponse } from '../../Interfaces/login';
import { Authstate } from './index';

type AuthActionType =
    | { type: 'Auth - login', payload: loginResponse }
    | { type: 'Auth - register', payload: registerResponse }

export const Authreducer = (state: Authstate, action: AuthActionType): Authstate => {
    switch (action.type) {
        case 'Auth - login':
            return {
                ...state,
                AuthLogin: action.payload
            }

        case 'Auth - register':
            return {
                ...state,
                AuthRegister: action.payload
            }

        default:
            return state;
    }
}