import { createContext } from 'react';
import {addVideo, responseVideo } from '../../Interfaces/video';


interface contextProps {
   addFiles:addVideo;
   files:string
   responseVideos:responseVideo[]
   responseVideo:responseVideo
   removeFile:boolean
   videoForEdit:responseVideo
   addVideo: (nombre: string, fileimg?: string, filevideo?: string) => Promise<void>
   getIdVideo: (videoId: string) => void
   getVideos: () => Promise<void>
   goToEdit: (videoId: string) => Promise<boolean>
   editVideo: (title: string, img?: string, video?: string) => Promise<void>
   removeVideo: (videoId: string) => Promise<boolean>
}
export const VideoContext = createContext({} as contextProps);