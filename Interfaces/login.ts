
export interface loginSend {
   usuario:string,
   correo:string, 
}

export interface loginResponse {
    usuario:[
        rol:string,
        estado:boolean,
        nombre:string,
        correo:string,
        id:string
    ],
    token:string
}

export interface registerResponse {
    usuario:[
        rol:string,
        estado:boolean,
        nombre:string,
        correo:string,
        id:string
        
    ],
}