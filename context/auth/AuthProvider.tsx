import { FC, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { Authreducer } from './authReducer';
import { loginResponse, registerResponse } from '../../Interfaces/login';
import apiInstance from '../../interceptors/interceptor';
import Swal from 'sweetalert2';





export interface Authstate {
  AuthLogin: loginResponse[]
  AuthRegister: registerResponse[]
}

const Auth_INITIAL_STATE: Authstate = {
  AuthLogin: [],
  AuthRegister: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}


export const AuthProvider: FC<Props> = ({ children }) => {

  
  
  const [state, dispatch] = useReducer(Authreducer, Auth_INITIAL_STATE)

  
  

  const loginUser = async (correo: string, password: string): Promise<boolean> => {
    try {
      const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST! + import.meta.env.VITE_LOGIN_APP!, { correo, password })
      const { token, usuario } = data
      localStorage.setItem('token', token)
      localStorage.setItem('rol', usuario.rol)
      localStorage.setItem('usuario', usuario.uid)
      dispatch({ type: 'Auth - login', payload: usuario })
      location.replace('/')
      return true
    } catch (error) {
      return false
    }
  }


  const registerUser = async (nombre: string, correo: string, dni: string, password: string, repeatpassword: string, recordartucontrasena: string): Promise<boolean> => {
    try {
      const { data } = await apiInstance.post(import.meta.env.VITE_LOCAL_HOST! + import.meta.env.VITE_REGISTER_APP!, { nombre, correo, dni, password, repeatpassword, recordartucontrasena })
      dispatch({ type: 'Auth - register', payload: data.usuario })
      location.replace('/login')
      return true
    } catch (error) {
      return false
    }
  }

  const SubmitCorreo = async (correo: string, recordartucontrasena: string): Promise<boolean> => {

    try {
      await apiInstance.put(
        import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_FORGOTPASSWORD_APP ,
        { correo, recordartucontrasena }
      )
      return true
    } catch (error) {
      return false
    }

  }


  
  const changePassword = async (password: string, repeatpassword: string, token:string): Promise<boolean> => {
    

    try {
      await apiInstance.put(
        import.meta.env.VITE_LOCAL_HOST! + import.meta.env.VITE_CHANGED_PASSWORD_TOKEN_APP! + token,
        { password, repeatpassword }
      )

      location.replace('/login')
      return true
    } catch (error) {
      return false
    }


  }



  const logout = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: 'Sesion cerrada',
      showConfirmButton: false,
      timer: 3000
    });
    localStorage.removeItem("token")
    localStorage.removeItem("rol")
    localStorage.removeItem("usuario")
    location.replace('/login')
  }



  return (
    <AuthContext.Provider value={{
      ...state,
      loginUser,
      registerUser,
      SubmitCorreo,
      changePassword,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}