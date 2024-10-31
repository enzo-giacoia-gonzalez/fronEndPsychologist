import { FC, useReducer, useEffect } from 'react';
import { ReceiptContext } from './ReceiptContext';
import { receiptReducer } from './receiptReducer';
import { receiptById, receiptResponse, receiptResponseById, userResponse, userResponseAll, userResponseReceipt } from '../../Interfaces/users';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';
import apiInstance from '../../interceptors/interceptor';
import Swal from 'sweetalert2';

export interface Receiptstate {
    user: Array<[]>
    allUsers: userResponseAll[]
    userByMail: userResponse[]
    userById: userResponse[]
    userWithReceipt: userResponseReceipt[]
    receiptById: receiptResponseById
    receiptAll: receiptResponse[]
}

const Receipt_INITIAL_STATE: Receiptstate = {
    user: [],
    allUsers: [],
    userByMail: [],
    userById: [],
    userWithReceipt: [],
    receiptById: receiptById,
    receiptAll: []
}

interface Props {
    children: JSX.Element | JSX.Element[]
}


export const ReceiptProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(receiptReducer, Receipt_INITIAL_STATE)

    const [searchParams] = useSearchParams()

    const navigate = useNavigate()

    const token: string | null = localStorage.getItem("token")


    useEffect(() => {

        searchUser()
        searchUserReceipt()
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


        navigate({ pathname: "ReceiptPayment", search: `?${createSearchParams(params)}` })

    }



    const searchUserReceipt = async () => {

        const { data } = await apiInstance.get(
            import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_BUSCAR_USUARIOS_APP + "comprobantes" + '/' + searchParams.get("search")
        );

        dispatch({ type: 'findUserReceipt', payload: data.results })



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


        navigate({ pathname: "ReceiptPayment", search: `?${createSearchParams(params)}` })

    }


    const getUserAll = async (): Promise<boolean> => {

        try {

            const { data } = await apiInstance.get(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_OBTENER_USUARIOS_APP, {
                headers: {
                    "x-token": token,
                },
            })

            dispatch({ type: 'findUserAll', payload: data.usuarios })
            console.log(data)

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
                console.log(data)
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
        console.log(data)

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




    const addReceipt = async (titulo: string, fechayhora: string, linksesion: string, precio: number, pago: string, moneda: string, usuario: string): Promise<boolean> => {
        try {

            await apiInstance.post(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_CREAR_COMPROBANTES_APP, { titulo, fechayhora, linksesion, precio, pago, moneda, usuario },
                {
                    headers: {
                        "x-token": token,
                    },
                }
            )


            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }



    const putReceipt = async (titulo: string, fechayhora: string, precio: number, pago: string, moneda: string, usuario: string, comprobanteId: string): Promise<boolean> => {

        try {
            const { data } = await apiInstance.put(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_EDITAR_COMPROBANTES_APP + comprobanteId, { titulo, fechayhora, precio, pago, moneda, usuario },
                {
                    headers: {
                        "x-token": token,
                    },
                }
            )


            if (data.comprobante) {
                location.replace('/ReceiptPayment')
            }

            return true
        } catch (error) {
            return false
        }

    }



    const deleteReceipt = async (receiptId: string) => {

        try {

            Swal.fire({
                title: "¿Estás segura?",
                text: "No se puede revertir",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Si, borralo"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Borrado!",
                        text: "Tu comprobante ha sido eliminado",
                        icon: "success"
                    });

                    const { data } = await apiInstance.delete(import.meta.env.VITE_LOCAL_HOST + import.meta.env.VITE_ELIMINAR_COMPROBANTES_APP + receiptId,
                        {
                            headers: {
                                "x-token": token,
                            },
                        }
                    )

                    if (data.comprobanteBorrado) {
                        location.replace('/ReceiptPayment')
                    }
                }
            });




            return true
        } catch (error) {
            return false
        }
    }







    return (
        <ReceiptContext.Provider value={{
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
            addReceipt,
            putReceipt,
            deleteReceipt
        }}>
            {children}
        </ReceiptContext.Provider>
    )
}