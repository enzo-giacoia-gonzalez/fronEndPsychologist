import { createContext } from 'react';


interface contextProps {
   SideMenuOpen: boolean;
   SideNotificationsOpen: boolean;
   ShowBorderOn:boolean;
   ShowModalUser:boolean;
   showCourseProgram:boolean;
   ShowFiles:boolean;
   ShowVideoOpen: boolean;
   ShowVideoOpenExchange: boolean;
   ShowVideoOpenSrc:string;
   ShowImageOpenSrc:string;
   classes: string;
   ShowModalComments:boolean;
   toogleSideMenu: () => void; 
   toogleShowBorderOn: (param: boolean) => void;
   toogleModalUser: (param:boolean) => void;
   toogleClasses: (param:string) => void;
   toogleShowVideo: () => void;
   toogleShowVideoExchange: () => void
   toogleShowCourseProgram: (param:boolean) => void;
   toogleShowVideoSrc: (param: string) => void
   toogleShowImageSrc: (param: string) => void
   toogleChangeVideoImg: () => void
   toogleSideNotifications: (param:boolean) => void;
   toogleModalComments: (param:boolean) => void;
}
export const UiContext = createContext({} as contextProps);