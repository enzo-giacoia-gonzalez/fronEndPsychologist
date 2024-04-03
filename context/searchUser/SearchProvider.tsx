import { FC,useEffect,useReducer } from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';
import { SearchContext } from './SearchContext';
import { searchReducer } from './searchReducer';
import { userResponseEmail } from '../../Interfaces/users';
import apiInstance from '../../interceptors/interceptor';
import Swal from 'sweetalert2';

export interface Searchstate {
    user: Array<[]>
    userByMail: userResponseEmail[]
   
}

const Search_INITIAL_STATE:Searchstate = {
    user:[],
    userByMail: []
}

interface Props{
    children: JSX.Element | JSX.Element[]
}


export const SearchProvider:FC<Props> = ({children}) => {
const [state, dispatch] = useReducer(searchReducer, Search_INITIAL_STATE)


const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const token: string | null = localStorage.getItem("token")


    useEffect(() => {

        searchUser()
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


        navigate({ pathname: "UserList", search: `?${createSearchParams(params)}` })

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


    const changeRole = async (rol: string, idUsuario:string):Promise<boolean> => {

        try {

            
            Swal.fire({
                
                title: "¿Estás segura?",
                text: "Estas a punto de darle acceso a distintos puntos de la pagina",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, cambialo!",
              }).then(async (result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: "Rol cambiado!",
                    text: ".",
                    icon: "success"
                  });

                  await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_CAMBIARESTADO_USUARIO_APP + idUsuario,{rol},{ 
                    headers: {
                        "x-token": token,
                    },
                })
    
                localStorage.removeItem("token")
                localStorage.removeItem("rol")
                localStorage.removeItem("usuario")
                location.replace('/login')
                }
              });

           
            

            return true
        } catch (error) {
            error
            return false
            
        }

        

    }

    const deleteUser = async (idUsuario:string):Promise<boolean> => {

        Swal.fire({
            title: "¿Estas segura?",
            text: "Esta accion no se puede revertir",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "si, borralo!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "borrado!",
                text: "El usuario ha sido eliminado.",
                icon: "success"
              });
            }
          });

        try {
            await apiInstance.delete(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_BORRAR_USUARIO_APP + idUsuario, { 
                headers: {
                    "x-token": token,
                },
            })

            location.replace('/UserList')
            return true
        } catch (error) {
            error
            return false
            
        }

        

    }


  return (
    <SearchContext.Provider value={{
        ...state,
        getResults,
        getUserByMail,
        changeRole,
        deleteUser
    }}>
        {children}
    </SearchContext.Provider>
  )
}