import { FC, useContext, useEffect } from "react"
import { Grid, Card, Typography, Chip } from "@mui/material"
import { receiptResponse, userResponseAll } from "../../Interfaces/users"
import { ReceiptContext } from "../../context/receipts"

interface Props {
  comprobantes: receiptResponse
}


const HistorialPaymentAdminItem:FC<Props> = ({comprobantes}) => {

  

    const {getUserAll, allUsers} = useContext(ReceiptContext)

    useEffect(() => {
      getUserAll()
    }, [])
    

    const findUserReceipt = allUsers.filter((usuario:userResponseAll)=>usuario.uid==comprobantes.usuario)
    console.log(findUserReceipt)

  return (
    <Grid spacing={2} item xs={4} md={2} lg={2} sx={{ marginX:{xs:2, md:2, lg:2}, marginBottom:{xs:1, md:'0px'}}}>
    <Card sx={{p:1}}>
        <Typography marginBottom={1} variant="subtitle1">{comprobantes?.titulo}</Typography>
        <Typography marginBottom={1} variant="subtitle2">{comprobantes?.fechayhora}</Typography>
        <Typography marginBottom={1} variant="subtitle2">{comprobantes?.precio + " " + comprobantes?.moneda}</Typography>
        <Typography marginBottom={1} variant="subtitle2">{findUserReceipt[0]?.nombre}</Typography>
        {comprobantes?.pago=="APROBADO"?<Chip sx={{marginBottom:1}} label='Pago realizado' color="success"></Chip>:  <Chip sx={{marginBottom:1}} label='Pago rechazado' color="error"></Chip>}
    </Card>
</Grid>
  )
}

export default HistorialPaymentAdminItem