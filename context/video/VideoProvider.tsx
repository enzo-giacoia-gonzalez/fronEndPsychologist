/* eslint-disable prefer-const */
import { FC, useEffect, useReducer } from 'react';
import { VideoContext } from './VideoContext';
import { videoReducer } from './videoReducer';
import { addVideo, responseVideo } from '../../Interfaces/video';
import apiInstance from '../../interceptors/interceptor';
import Swal from 'sweetalert2';



export interface Videostate {
  addFiles: addVideo[]
  files: string
  videoForEdit: responseVideo[]
  responseVideos: responseVideo[]
  responseVideo: responseVideo[]
  removeFile: boolean
}

const Video_INITIAL_STATE: Videostate = {
  addFiles: [],
  files: '',
  videoForEdit: [],
  responseVideos: [],
  responseVideo: [],
  removeFile: false,
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let img: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let video: any
let usuario = localStorage.getItem("usuario")
let token = localStorage.getItem("token")

export const VideoProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, Video_INITIAL_STATE)



  useEffect(() => {
    getVideos()
  }, [])






  const getVideos = async () => {
    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_VIDEOS_APP)
    dispatch({ type: 'Videos - get', payload: data.videos })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addVideo = async (nombre: string, fileimg?: any, filevideo?: any): Promise<boolean> => {
    try {

      if (filevideo) {

        const files = new FormData();

        files.append("archivo", filevideo);

        const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEO_APP + "videos", files)

        video = data.video

        dispatch({ type: 'Video - Add', payload: video })
      }

      if (fileimg) {

        const files = new FormData();

        files.append("archivo", fileimg);

        const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_IMAGEN_APP + "videos", files)

        img = data.img

        dispatch({ type: 'Img - Add', payload: img })

      }

      const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEOS_APP, { nombre, usuario, img, video }, {
        headers: {
          "x-token": token,
        },
      })



      dispatch({ type: 'Videostate - Add', payload: data.video })

      if (data) {
        location.replace("/CourseProgram")
      }

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const removeVideo = async (videoId: string): Promise<boolean> => {



    try {


      Swal.fire({
        title: "¿Estás segura?",
        text: "No se puede revertir",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, estoy segura"
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Borrado!",
            text: "Tu video ha sido eliminado",
            icon: "success"
          });

          const { data } = await apiInstance.delete(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_ELIMINAR_VIDEOS_APP + "/" + videoId, {
            headers: {
              "x-token": token,
            },
          })

          if (data.msg === "Video eliminado Exitosamente") {
            dispatch({ type: 'Videostate - remove', payload: true })
          }

          if (data.msg === "Video eliminado Exitosamente") {
            location.replace("/CourseProgram")
          }

        } else {
          location.replace("/CourseProgram")
        }


      });















      return true

    } catch (error) {

      console.log(error)
      return false
    }

  }


  const getIdVideo = (videoId: string) => {
    localStorage.setItem("videoId", videoId)
    location.replace("/Classes/ModifyClasses")
  }


  const goToEdit = async (videoId: string): Promise<boolean> => {
    try {

      const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_VIDEOS_APP + "/" + videoId)

      dispatch({ type: 'OneVideo - get', payload: data.videos })

      console.log(data.videos)


      return true


    } catch (error) {
      return false
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editVideo = async (nombre: string, fileimg?: any, filevideo?: any): Promise<boolean> => {
    try {
      const videoId = localStorage.getItem("videoId")


      if (fileimg) {

        const formImg = new FormData();

        formImg.append("archivo", fileimg);

        const { data } = await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_IMAGEN_APP + "videos" + "/" + videoId, formImg)

        img = data.img

      }



      if (filevideo) {
        const formVideo = new FormData();

        formVideo.append("archivo", filevideo);

        const { data } = await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEO_APP + "videos" + "/" + videoId, formVideo)

        video = data.video

      }

      if (nombre) {
        await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEOS_APP + "/" + videoId, { nombre }, {
          headers: {
            "x-token": token,
          },
        })
        location.replace("/CourseProgram")

        return true
      }

      if (nombre && fileimg) {

        await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEOS_APP + "/" + videoId, { nombre, img }, {
          headers: {
            "x-token": token,
          },
        })
        location.replace("/CourseProgram")
      }

      if (nombre && filevideo) {

        await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEOS_APP + "/" + videoId, { nombre, img }, {
          headers: {
            "x-token": token,
          },
        })
        location.replace("/CourseProgram")
      }


      if (nombre && fileimg && filevideo) {

        await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_VIDEOS_APP + "/" + videoId, { nombre, video, img }, {
          headers: {
            "x-token": token,
          },
        })
        location.replace("/CourseProgram")
      }





      return true

    } catch (error) {
      console.log(error)
      return false
    }

  }



  return (
    <VideoContext.Provider value={{
      ...state,
      addVideo,
      getIdVideo,
      getVideos,
      goToEdit,
      editVideo,
      removeVideo
    }}>
      {children}
    </VideoContext.Provider>
  )
}