import { Grid, Card, Typography, Chip } from '@mui/material'
import { receiptResponse } from '../../Interfaces/users'
import { FC } from 'react'

interface Props {
    comprobantes: receiptResponse
  }

const HistorialPaymentUserItem:FC<Props> = ({comprobantes}) => {
  return (
    <Grid spacing={2} item xs={4} md={2} lg={2} sx={{ marginX:{xs:2, md:2, lg:2}, marginBottom:{xs:1, md:'0px'}}}>
    <Card sx={{p:1}}>
        <Typography marginBottom={1} variant="subtitle1">{comprobantes.titulo}</Typography>
        <Typography marginBottom={1} variant="subtitle2">{comprobantes.fechayhora}</Typography>
        <Typography marginBottom={1} variant="subtitle2">Maria liz icasatti</Typography>
        {comprobantes?.pago=="APROBADO"?<Chip sx={{marginBottom:1}} label='Pago realizado' color="success"></Chip>:  <Chip sx={{marginBottom:1}} label='Pago rechazado' color="error"></Chip>}
    </Card>
</Grid>
  )
}

export default HistorialPaymentUserItem