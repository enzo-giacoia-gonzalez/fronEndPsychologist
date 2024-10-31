export interface userResponse {
    usuario:[
        rol:string,
        estado:boolean,
        nombre:string,
        apellido:string,
        dni:string,
        correo:string,
        _id:string,
        uid:string,
    ],
}

export interface userResponseCalendar {
        rol:string,
        estado:boolean,
        nombre:string,
        apellido:string,
        dni:string,
        correo:string,
        _id:string,
        uid:string,
}

export const userResponseCalendar: userResponseCalendar = {
    rol:'',
    estado:false,
    nombre:'',
    apellido:'',
    dni:'',
    correo:'',
    _id:'',
    uid:'',
}



export interface userResponseByEmail {
    
        rol:string,
        estado:boolean,
        nombre:string,
        apellido:string,
        dni:string,
        correo:string,
        _id:string,
        uid:string,
 
}



export const userByMail:userResponseByEmail = {
        rol:'',
        estado:false,
        nombre:'',
        apellido:'',
        dni:'',
        correo:'',
        _id:'',
        uid:'',
  }

  export interface userResponseById {
    
    rol:string,
    estado:boolean,
    nombre:string,
    apellido:string,
    dni:string,
    correo:string,
    _id:string,
    uid:string,

}

export const userById:userResponseById = {
    rol:'',
    estado:false,
    nombre:'',
    apellido:'',
    dni:'',
    correo:'',
    _id:'',
    uid:'',
}



export interface userResponseAll {

        rol:string,
        estado:boolean,
        nombre:string,
        apellido:string,
        dni:string,
        correo:string,
        uid:string

}

export interface userResponseSearch {

    rol:string,
    estado:boolean,
    nombre:string,
    apellido:string,
    dni:string,
    correo:string,
    uid:string

}

export const user = {
    rol:"",
    estado:false,
    nombre:"",
    apellido:"",
    dni:"",
    correo:"",
    uid:""

}









export interface userResponseShift {
        titulo:string,
        estado:boolean,
        fechayhora:string,
        usuario:string,
        _id:string
}

export interface shiftResponseById {
    titulo:string,
    img:string,
    linksesion:string,
    precio:number,
    pago:string,
    moneda:string,
    estado:boolean,
    fechayhora:string,
    usuario:string,
    _id:string
}

export const shiftById: shiftResponseById = {
    titulo: "",
    img: "",
    linksesion: "",
    precio: 0,
    pago:"",
    moneda: "",
    estado: false,
    fechayhora:"",
    usuario:"",
    _id:""
  }

export interface shiftResponseAll{
    titulo:string,
    img:string,
    linksesion:string,
    precio:number,
    pago:string,
    moneda:string,
    estado:boolean,
    fechayhora:string,
    usuario:string,
    _id:string
}

export interface userResponseEmail {

        rol:string,
        estado:boolean,
        nombre:string,
        correo:string,
        _id:string,
        uid:string,

}




export interface userResponseReceipt {
        titulo:string,
        estado:boolean,
        fechayhora:string,
        usuario:string,
        _id:string
}


export interface receiptResponseById {
    titulo:string,
    pago:string,
    precio:number,
    moneda:string,
    linksesion:string,
    estado:boolean,
    fechayhora:string,
    usuario:string,
    _id:string
}

export const receiptById:receiptResponseById = {
    titulo:'',
    pago:'',
    precio:0,
    moneda:'',
    linksesion:'',
    estado:false,
    fechayhora:'',
    usuario:'',
    _id:''
}

export interface receiptResponse {
    titulo:string,
    pago:string,
    precio:number,
    moneda:string,
    estado:boolean,
    fechayhora:string,
    usuario:string,
    _id:string
}


