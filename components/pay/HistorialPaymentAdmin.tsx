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
        <Typography textAlign="center" marginX={2} paddingBottom={4} variant="h5">Lista de los pacientes</Typography>
        <Grid container xs={12}  direction={{xs:'column', md:'row'}} justifyContent="center" alignItems="center">
       
        {receiptAll?.map((comprobantes, index)  => (
            <HistorialPaymentAdminItem key={index} comprobantes={comprobantes}></HistorialPaymentAdminItem>
        ))}
      
        </Grid>
        </Grid>
  )
}

export default HistorialPaymentAdmin