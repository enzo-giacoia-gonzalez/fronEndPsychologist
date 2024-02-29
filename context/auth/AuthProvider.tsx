import { FC,useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { Authreducer } from './authReducer';
import { loginResponse, registerResponse } from '../../Interfaces/login';
import axios from 'axios';



export interface Authstate {
    AuthLogin?:loginResponse
    AuthRegister?:registerResponse
}

const Auth_INITIAL_STATE:Authstate = {
    AuthLogin:undefined,
    AuthRegister:undefined
}

interface Props{
    children: JSX.Element | JSX.Element[]
}


export const AuthProvider:FC<Props> = ({children}) => {
const [state, dispatch] = useReducer(Authreducer, Auth_INITIAL_STATE)

const loginUser = async (correo:string, password:string):Promise<boolean> => {
  try {
    const {data} = await axios.post(import.meta.env.VITE_LOCAL_HOST! + import.meta.env.VITE_LOGIN_APP!,{correo, password})
    const {token, usuario} = data
    localStorage.setItem('token', token)
    localStorage.setItem('rol', usuario.rol)
    localStorage.setItem('usuario', usuario.uid)
    dispatch({ type:'Auth - login', payload: usuario })
    console.log(data)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


const registerUser = async (nombre:string,correo:string,password:string, recordartucontrasena:string):Promise<boolean> => {
  try {
    const {data} = await axios.post(import.meta.env.VITE_LOCAL_HOST! + import.meta.env.VITE_REGISTER_APP!,{nombre,correo, password, recordartucontrasena})
    dispatch({ type:'Auth - register', payload: data.usuario })
    console.log(data)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const logout = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("rol")
  location.replace('/')
}



  return (
    <AuthContext.Provider value={{
      ...state,
      loginUser,
      registerUser,
      logout
    }}>
        {children}
    </AuthContext.Provider>
  )
}