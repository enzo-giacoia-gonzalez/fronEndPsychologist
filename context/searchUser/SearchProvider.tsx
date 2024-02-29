import { FC,useEffect,useReducer } from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';
import axios from 'axios';

import { SearchContext } from './SearchContext';
import { searchReducer } from './searchReducer';
import { userResponseEmail } from '../../Interfaces/users';

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


        const { data } = await axios.get(
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

        const { data } = await axios.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP + "correo" + "/" + correo, {
            headers: {
                "x-token": token,
            },
        })
        dispatch({ type: 'findUserByMail', payload: data.usuario })
        console.log(data)

    }


    const changeRole = async (rol: string, idUsuario:string):Promise<boolean> => {

        try {
            await axios.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_CAMBIARESTADO_USUARIO_APP + idUsuario,{rol},{ 
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

    const deleteUser = async (idUsuario:string):Promise<boolean> => {

        try {
            await axios.delete(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_BORRAR_USUARIO_APP + idUsuario, { 
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