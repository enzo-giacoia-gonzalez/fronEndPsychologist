import { addVideo, responseVideo } from '../../Interfaces/video';
import { Videostate } from './index';

type VideostateActionType =
    | { type: 'Videos - get', payload: responseVideo[]}
    | { type: 'OneVideo - get', payload: responseVideo[] }
    | { type: 'Videostate - remove', payload: boolean }
    | { type: 'Videostate - Add', payload: addVideo[] }
    | { type: 'Img - Add', payload: string }
    | { type: 'Video - Add', payload: string }

export const videoReducer = (state: Videostate, action: VideostateActionType): Videostate => {
    switch (action.type) {

        case 'Img - Add':
            return {
                ...state,
                files: action.payload
            }

        case 'Video - Add':
            return {
                ...state,
                files: action.payload
            }
        case 'Videos - get':
            return {
                ...state,
                responseVideos: action.payload
            }

        case 'OneVideo - get':
            return {
                ...state,
                responseVideo: action.payload
            }
        case 'Videostate - remove':
            return {
                ...state,
                removeFile: action.payload
            }

        case 'Videostate - Add':
            return {
                ...state,
                addFiles: action.payload
            }
        default:
            return state;
    }
}