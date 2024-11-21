import { Grid, Typography } from "@mui/material"
import { useContext, useEffect } from "react"
import { ReceiptContext } from "../../context/receipts"
import HistorialPaymentAdminItem from './HistorialPaymentAdminItem';



const HistorialPaymentAdmin = () => {

    const {receiptAll, getReceipts} = useContext(ReceiptContext)
    

    useEffect(() => {
        getReceipts()
    }, [])
    
    



  return (
    <Grid height="100vh">
         {receiptAll.length===0?<Typography sx={{ width:'100%',paddingX:2}} textAlign="center" paddingBottom={4} variant="h5">No hay compras realizadas hasta el</Typography>:
        <Typography textAlign="center" sx={{width:'100%'}} paddingBottom={4} variant="h5">Lista de mis compras</Typography>}
        <Grid container xs={12} paddingTop={8} direction={{xs:'column', md:'row'}} justifyContent="center" alignItems="center">
       
        {receiptAll?.map((comprobantes, index)  => (
            <HistorialPaymentAdminItem key={index} comprobantes={comprobantes}></HistorialPaymentAdminItem>
        ))}
      
        </Grid>
        </Grid>
  )
}

export default HistorialPaymentAdmin