import { FC,useReducer } from 'react';
import { UiContext } from './UiContext';
import { uiReducer } from './uiReducer';


export interface Uistate {
    SideMenuOpen:boolean
    SideNotificationsOpen:boolean
    ShowBorderOn:boolean
    ShowModalUser:boolean
    ShowFiles:boolean
    classes : string
    showCourseProgram:boolean
    ShowVideoOpen: boolean 
    ShowVideoOpenExchange: boolean 
    ShowVideoOpenSrc: string
    ShowImageOpenSrc:string
    ShowModalComments:boolean
}

const Ui_INITIAL_STATE:Uistate = {
    SideMenuOpen:false,
    SideNotificationsOpen:false,
    ShowBorderOn:false,
    ShowModalUser:false,
    ShowFiles:false,
    classes : '',
    showCourseProgram:true,
    ShowVideoOpen: false,
    ShowVideoOpenExchange: true, 
    ShowVideoOpenSrc:'',
    ShowImageOpenSrc:'',
    ShowModalComments:false
}

interface Props{
    children: JSX.Element | JSX.Element[]
}


export const UiProvider:FC<Props> = ({children}) => {
const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE)

const toogleSideMenu = () => {
    dispatch({type:'UI - ToogleMenu'})
}

const toogleSideNotifications = (param: boolean) => {
    dispatch({type:'UI - ToogleNotifications', payload:param})
}

const toogleShowBorderOn = (param:boolean) => {
    dispatch({type:'UI - ToogleBorder',payload:param })
}

const toogleModalUser = (param:boolean) => {
    dispatch({type:'UI - ToogleModal', payload:param})
    
}

const toogleClasses = (param:string) => {
    dispatch({type:'UI - ToogleClasses', payload:param})
}

const toogleShowCourseProgram = (param:boolean) => {
    dispatch({type:'UI - ToogleShowCourseProgram', payload: param})
}

const toogleShowVideo = () => {
    dispatch({type:'UI - ToogleVideo'})
}

const toogleShowVideoExchange = () => {
    dispatch({type:'UI - ToogleVideoExchange'})
}

const toogleShowVideoSrc = (param:string) => {
    dispatch({type:'UI - ToogleVideoSrc',payload:param })
}

const toogleShowImageSrc = (param:string) => {
    dispatch({type:'UI - ToogleImageSrc',payload:param })
}

const toogleChangeVideoImg = () => {
    dispatch({type:'UI - ToogleImgVideo' })
}

const toogleModalComments = (param:boolean) => {
    dispatch({type:'UI - ToogleModalComments',payload:param })
}


  return (
    <UiContext.Provider value={{
        ...state,
        toogleSideMenu,
        toogleSideNotifications,
        toogleShowBorderOn,
        toogleModalUser,
        toogleClasses,
        toogleShowCourseProgram,
        toogleShowVideo,
        toogleShowVideoExchange,
        toogleShowVideoSrc,
        toogleShowImageSrc,
        toogleChangeVideoImg,
        toogleModalComments
    }}>
        {children}
    </UiContext.Provider>
  )
}