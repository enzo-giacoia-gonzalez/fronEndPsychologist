import { FC, useEffect, useReducer } from 'react';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { ServiceContext } from './ServiceContext';
import { serviceReducer } from './serviceReducer';
import { shiftResponseAll, shiftResponseById, userResponse, userResponseAll, userResponseShift } from '../../Interfaces/users';
import apiInstance from '../../interceptors/interceptor';
import Swal from 'sweetalert2';





export interface Servicestate {
  user: userResponseAll[]
  userWithShift: userResponseShift[]
  userByMail: userResponse[]
  userById: userResponse[]
  shiftById: shiftResponseById[]
  shiftAll:shiftResponseAll[]
  dataShift: shiftResponseById[]
  
}

const Service_INITIAL_STATE: Servicestate = {
  user: [],
  userWithShift: [],
  userByMail: [],
  userById: [],
  shiftById: [],
  shiftAll:[],
  dataShift:[],
  
}

interface Props {
  children: JSX.Element | JSX.Element[]
}


export const ServiceProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(serviceReducer, Service_INITIAL_STATE)

  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const token: string | null = localStorage.getItem("token")

  let img: AxiosRequestConfig<string> | undefined

  useEffect(() => {

    searchUser()
    searchUserShifts()
    

  }, [searchParams])





  const searchUser = async () => {

    const { data } = await apiInstance.get(
      import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_BUSCAR_USUARIOS_APP + "usuarios" + '/' + searchParams.get("search")
    );

    dispatch({ type: 'findUser', payload: data.results })



  }

  const getResults = async (searchinput?: string, searchinputcategoria?: string) => {

    const params = {
      search: searchinput || "",
      categoria: searchinputcategoria || ""
    }


    if (!params.search) {
      params.search = ""
    }

    if (!params.categoria) {
      params.categoria = "usuarios"
    }


    
    navigate({ pathname: "PayItemService", search: `?${createSearchParams(params)}` })

    
  }


  const searchUserShifts = async () => {

    const { data } = await apiInstance.get(
      import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_BUSCAR_USUARIOS_APP + "turnos" + '/' + searchParams.get("search")
    );

    dispatch({ type: 'findUserShift', payload: data.results })

    console.log(data.results)

   
    
    

  
   


  }

  const getResultsShift = async (searchinput?: string, searchinputcategoria?: string) => {

    const params = {
      search: searchinput || "",
      categoria: searchinputcategoria || ""
    }


    if (!params.search) {
      params.search = ""
    }

    if (!params.categoria) {
      params.categoria = "turnos"
    }



    navigate({ pathname: "PayItemService", search: `?${createSearchParams(params)}` })

    

  }

  



  const getUserByMail = async (correo: string) => {

    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP + "correo" + "/" + correo, {
      headers: {
        "x-token": token,
      },
    })
    dispatch({ type: 'findUserByMail', payload: data.usuario })
    console.log(data)

  }


  const getUserById = async (id: string):Promise<boolean> => {




    try {
      if (id != undefined) {
        const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP + id, {
          headers: {
            "x-token": token,
          },
        })
        dispatch({ type: 'findUserById', payload: data.usuario })
        console.log(data)
      }


      return true
    } catch (error) {
      return false
    }




  }


  const getShiftById = async (shiftId: string) => {






    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_TURNOS_APP + "/" + shiftId, {
      headers: {
        "x-token": token,
      },
    })
    dispatch({ type: 'findShiftById', payload: data.turnos })
    



  }

  const getShift = async () => {






    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_TURNOS_APP, {
      headers: {
        "x-token": token,
      },
    })
    dispatch({ type: 'findShiftAll', payload: data.turnos })




  }




  const addService = async (titulo: string, fileImg: string, fechayhora: string, linksesion: string, precio: string, moneda:string, usuario: string): Promise<boolean> => {
    try {
      if (fileImg) {

        const files = new FormData();

        files.append("archivo", fileImg);

        const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_IMAGEN_APP + "turnos", files)

        img = data.img
      }


      const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_CREAR_TURNOS_APP, { titulo, img, fechayhora, linksesion, precio,moneda, usuario },
        {
          headers: {
            "x-token": token,
          },
        }
      )


      if (data){
        location.replace('/PayItemService')
      }
      
      return true
    } catch (error) {
      error
      return false
    }
  }



 
  const putService = async (titulo: string, fileImg: string, fechayhora: string, linksesion: string, precio: string, pago:string, moneda:string, usuario: string, turnoId: string): Promise<boolean> => {
    try {
      if (fileImg) {

        const files = new FormData();

        files.append("archivo", fileImg);

        const { data } = await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_AGREGAR_IMAGEN_APP + "turnos" + "/" + turnoId, files)

        img = data.img
      }

      const { data } = await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_EDITAR_TURNOS_APP + turnoId, { titulo, img, fechayhora, linksesion, precio, pago, moneda, usuario },
        {
          headers: {
            "x-token": token,
          },
        }
      )

      dispatch({type:'dataResult', payload:data.TurnoActualizado})

      if(data.TurnoActualizado.pago=="RECHAZADO"){
        location.replace('PayItemService')
      }
      

      if (fileImg === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data} = await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_EDITAR_TURNOS_APP + turnoId, { titulo, fechayhora, linksesion, precio,pago,moneda, usuario },
          {
            headers: {
              "x-token": token,
            },
          }
        )

        dispatch({type:'dataResult', payload:data.TurnoActualizado})


        if(data.TurnoActualizado.pago=="RECHAZADO"){
          location.replace('PayItemService')
        }
      }


     

      return true
    } catch (error) {
      return false
    }
  }

  


  const deleteService = async (turnoId: string):Promise<boolean> => {

    try {


      Swal.fire({
        title: "¿Estás seguro?",
        text: "No se pueden revertir los cambios!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Borrado!",
            text: "Su turno ha sido eliminado.",
            icon: "success"
          });
          
          await apiInstance.delete(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_ELIMINAR_TURNOS_APP + turnoId,
            {
              headers: {
                "x-token": token,
              },
            }
          )
    
         location.replace("/PayItemService")
          
        }
      });
    

      return true
    } catch (error) {
      return false
    }
  }


  return (
    <ServiceContext.Provider value={{
      ...state,
      searchUser,
      searchUserShifts,
      getResults,
      getResultsShift,
      getUserById,
      getUserByMail,
      getShiftById,
      getShift,
      addService,
      putService,
      deleteService,
      


    }}>
      {children}
    </ServiceContext.Provider>
  )
}