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
        {findUserReceipt.length===0?<Typography sx={{borderBottom:1, width:'100%', borderColor:'#6F2279', paddingX:2}} textAlign="center" paddingBottom={4} variant="h5">No hay compras realizadas hasta el momento</Typography>:
        <Typography sx={{borderBottom:1, width:'100%', borderColor:'#6F2279', paddingX:2}} textAlign="center" paddingBottom={4} variant="h5">Lista de mis compras</Typography>}
        <Grid container xs={12} paddingTop={10}  direction={{xs:'column', md:'row'}} justifyContent="center" alignItems="center">
       
        {findUserReceipt?.map((comprobantes, index)  => (
            <HistorialPaymentUserItem key={index} comprobantes={comprobantes}></HistorialPaymentUserItem>
        ))}
        </Grid>
        </Grid>
    
  )
}

export default HistorialPaymentUser