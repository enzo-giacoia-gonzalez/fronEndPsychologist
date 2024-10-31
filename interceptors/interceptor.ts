import axios, { AxiosResponse } from "axios";

import Swal from 'sweetalert2'

const BASE_URL = "http://localhost:8080";

const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.response.use(
  (response:AxiosResponse) => {
    if (response.data.msg) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: response.data.msg,
        timer:3000
      });
    }
    return response
  },
  (err) => { 
    if(!err.response) {
      return Promise.reject({
        status: 999,
        timestamp: new Date(),
        message: "Se ha producido un error inesperado",
        error: err
      });
    }

    if (!err.response) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err,
        showConfirmButton: false,
        timer:3000
      });
  
    }

   
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.response.data.msg,
        showConfirmButton: false,
        timer:3000
      });
    if(err.response.status === 401) {
      console.log(err)
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: err.response.data.msg,
        showConfirmButton: false,
        timer:3000
      });
        localStorage.clear()
        location.replace('/login')
    } else {
        return false
    }
    return Promise.reject(err.response.data);
    
  }
);



export default apiInstance;