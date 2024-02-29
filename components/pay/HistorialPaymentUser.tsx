import { useContext, useEffect } from "react"
import { Grid, Typography } from "@mui/material"
import { ReceiptContext } from "../../context/receipts"
import { receiptResponse } from "../../Interfaces/users"
import HistorialPaymentUserItem from './HistorialPaymentUserItem';





const HistorialPaymentUser = () => {

    const {receiptAll, getReceipts} = useContext(ReceiptContext)
    
    const usuarioById = localStorage.getItem("usuario")

    useEffect(() => {
        getReceipts()
    }, [])

    const findUserReceipt = receiptAll.filter((userReceipt:receiptResponse)=>userReceipt.usuario==usuarioById)
    console.log(findUserReceipt)


  return (
    <Grid height="100vh">
        <Typography textAlign="center" marginX={2} paddingBottom={4} variant="h5">Lista de mis compras</Typography>
        <Grid container xs={12}  direction={{xs:'column', md:'row'}} justifyContent="center" alignItems="center">
       
        {findUserReceipt?.map((comprobantes, index)  => (
            <HistorialPaymentUserItem key={index} comprobantes={comprobantes}></HistorialPaymentUserItem>
        ))}
        </Grid>
        </Grid>
    
  )
}

export default HistorialPaymentUser