import { Uistate } from './index';


type UiActionType =
    | { type: 'UI - ToogleMenu' }
    | { type: 'UI - ToogleNotifications', payload: boolean }
    | { type: 'UI - ToogleBorder', payload: boolean }
    | { type: 'UI - ToogleModal', payload: boolean }
    | { type: 'UI - ToogleClasses', payload: string }
    | { type: 'UI - ToogleShowCourseProgram', payload: boolean }
    | { type: 'UI - ToogleVideo' }
    | { type: 'UI - ToogleVideoExchange' }
    | { type: 'UI - ToogleVideoSrc', payload: string }
    | { type: 'UI - ToogleModalComments', payload: boolean }

export const uiReducer = (state: Uistate, action: UiActionType): Uistate => {
    switch (action.type) {
        case 'UI - ToogleMenu':
            return {
                ...state,
                SideMenuOpen: !state.SideMenuOpen
            }

        case 'UI - ToogleNotifications':
            return {
                ...state,
                SideNotificationsOpen: action.payload
            }

        case 'UI - ToogleBorder':
            return {
                ...state,
                ShowBorderOn: action.payload
            }

        case 'UI - ToogleModal':
            return {
                ...state,
                ShowModalUser: action.payload
            }

        case 'UI - ToogleClasses':
            return {
                ...state,
                classes: action.payload
            }

        case 'UI - ToogleShowCourseProgram':
            return {
                ...state,
                showCourseProgram: action.payload
            }
        case 'UI - ToogleVideo':
            return {
                ...state,
                ShowVideoOpen: !state.ShowVideoOpen
            }

        case 'UI - ToogleVideoExchange':
            return {
                ...state,
                ShowVideoOpenExchange: !state.ShowVideoOpenExchange
            }
        case 'UI - ToogleVideoSrc':
            return {
                ...state,
                ShowVideoOpenSrc: action.payload
            }

        case 'UI - ToogleModalComments':
            return {
                ...state,
                ShowModalComments: action.payload
            }

        default:
            return state;
    }
}