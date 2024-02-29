export interface userResponse {
    usuario:[
        rol:string,
        estado:boolean,
        nombre:string,
        correo:string,
        _id:string,
        uid:string,
    ],
}

export interface userResponseAll {

        rol:string,
        estado:boolean,
        nombre:string,
        correo:string,
        uid:string

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
    pago:string
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
    estado:boolean,
    fechayhora:string,
    usuario:string,
    _id:string
}

export interface receiptResponse {
    titulo:string,
    pago:string,
    precio:number,
    estado:boolean,
    fechayhora:string,
    usuario:string,
    _id:string
}

