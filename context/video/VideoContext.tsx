import { createContext } from 'react';
import {addVideo, responseVideo } from '../../Interfaces/video';


interface contextProps {
   addFiles:addVideo[];
   files:string
   responseVideos:responseVideo[]
   responseVideo:responseVideo[]
   removeFile:boolean
   videoForEdit:responseVideo[]
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   addVideo: (nombre: string, fileimg?: any, filevideo?: any) => Promise<boolean>
   getIdVideo: (videoId: string) => void
   getVideos: () => Promise<void>
   goToEdit: (videoId: string) => Promise<boolean>
   editVideo: (title: string, img?: string, video?: string) => Promise<boolean>
   removeVideo: (videoId: string) => Promise<boolean>
}
export const VideoContext = createContext({} as contextProps);