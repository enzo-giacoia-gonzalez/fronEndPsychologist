/* eslint-disable react-hooks/exhaustive-deps */
import { FC,useEffect,useReducer } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { CalendarContext } from './CalendarContext';
import { calendarReducer } from './calendarReducer';
import { receiptResponse, receiptResponseById, userResponse, userResponseAll, userResponseReceipt } from '../../Interfaces/users';
import apiInstance from '../../interceptors/interceptor';






export interface Calendarstate {
    user: Array<[]>
    allUsers: userResponseAll[]
    userByMail: userResponse[]
    userById: userResponse[]
    userWithReceipt: userResponseReceipt[]
    receiptById: receiptResponseById[]
    receiptAll: receiptResponse[]
}

const Calendar_INITIAL_STATE:Calendarstate = {
    user: [],
    allUsers: [],
    userByMail: [],
    userById: [],
    userWithReceipt: [],
    receiptById: [],
    receiptAll: []
}

interface Props{
    children: JSX.Element | JSX.Element[]
}


export const CalendarProvider:FC<Props> = ({children}) => {
const [state, dispatch] = useReducer(calendarReducer, Calendar_INITIAL_STATE)

const [searchParams] = useSearchParams()

const navigate = useNavigate()

const token: string | null = localStorage.getItem("token")


useEffect(() => {

    searchUser()
    searchUserReceipt()
}, [searchParams])





const searchUser = async () => {


    const {data} = await apiInstance.get(
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


    navigate({ pathname: "PatientCalendar", search: `?${createSearchParams(params)}` })

}



const searchUserReceipt = async () => {

    const { data } = await apiInstance.get(
        import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_BUSCAR_USUARIOS_APP + "comprobantes" + '/' + searchParams.get("search")
    );

    dispatch({ type: 'findUserReceipt', payload: data.results })

    console.log(data)


}

const getResultsReceipt = async (searchinput?: string, searchinputcategoria?: string) => {

    const params = {
        search: searchinput || "",
        categoria: searchinputcategoria || ""
    }


    if (!params.search) {
        params.search = ""
    }

    if (!params.categoria) {
        params.categoria = "comprobantes"
    }


    navigate({ pathname: "PatientCalendar", search: `?${createSearchParams(params)}` })

}


const getUserAll = async (): Promise<boolean> => {

    try {

        const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP, {
            headers: {
                "x-token": token,
            },
        })

        dispatch({ type: 'findUserAll', payload: data.usuarios })
        

        return true
    } catch (error) {
        return false
    }







}



const getUserById = async (id: string): Promise<boolean> => {



    try {
        if (id != undefined) {
            const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP + id, {
                headers: {
                    "x-token": token,
                },
            })
            dispatch({ type: 'findUserById', payload: data.usuario })
            
        }
        return true
    } catch (error) {
        return false
    }







}


const getUserByMail = async (correo: string) => {

    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP + "correo" + "/" + correo, {
        headers: {
            "x-token": token,
        },
    })
    dispatch({ type: 'findUserByMail', payload: data.usuario })
    

}


const getReceipts = async () => {

    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_COMPROBANTES_APP, {
        headers: {
            "x-token": token,
        },
    })
    dispatch({ type: 'findReceipt', payload: data.comprobantes })

}



const getReceiptById = async (receiptId: string) => {






    const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_COMPROBANTES_APP + "/" + receiptId, {
        headers: {
            "x-token": token,
        },
    })
    dispatch({ type: 'findReceiptById', payload: data.comprobantes })




}

  return (
    <CalendarContext.Provider value={{
        ...state,
        searchUser,
        searchUserReceipt,
        getResultsReceipt,
        getResults,
        getUserAll,
        getUserById,
        getReceiptById,
        getReceipts,
         getUserByMail,

    
    }}>
        {children}
    </CalendarContext.Provider>
  )
}