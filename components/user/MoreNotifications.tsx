import { Card, Grid, Typography } from '@mui/material'


const MoreNotifications = () => {
  return (
    <Grid container direction="column" alignItems="start" paddingY={2} sx={{paddingX:{xs:4, sm:15}}} height="100vh">
      <Grid item xs direction="column" alignItems="start">
      {/*Mapear notificaciones de los usuarios*/}
      <Typography marginBottom={3} variant='h4'>Notificaciones</Typography>
            <Card sx={{ display:'flex', flexDirection:'column', alignItems:'start', padding:2, borderRadius:1, width:{xs:"300px",sm:'300px', md:'600px'}}}>
                <Typography marginBottom={0.3}>Hola Ricardo buenos dias aca tienes los datos para poder ingresar a la sesion</Typography>
                <Typography marginBottom={0.3}>Link del meet</Typography>
                <Typography marginBottom={2}>Hora y dia de la sesion</Typography>
            </Card>
        </Grid>
    </Grid>
  )
}

export default MoreNotifications