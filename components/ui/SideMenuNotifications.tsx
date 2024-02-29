import { Card, Grid, Typography, Box, Button } from '@mui/material';
import { UiContext } from '../../context/ui/UiContext';
import { useContext } from 'react';

const SideMenuNotifications = () => {
    const {SideNotificationsOpen} = useContext(UiContext)
  return (
    <Grid container position="absolute">
      <Grid item xs direction="column" alignItems="center" position="absolute" right="0px" top="0px" overflow={'hidden'} marginX={3} padding={7}>
      <Grid marginLeft={1.5} item xs position="relative" direction="column" right={SideNotificationsOpen===false?'-700px':'15px'} top={SideNotificationsOpen===false?'-100px':'5px'}  sx={{transition:'ease-in', transitionDuration:'300ms', width:{xs:'285px' , sm:'600px'}}} zIndex={99}>
      {/*Mapear notificaciones de los usuarios*/}
            <Card sx={{ display:'flex', flexDirection:'column', alignItems:'start', padding:2, borderRadius:1}} >
                <Typography marginBottom={0.3}>Hola Ricardo buenos dias aca tienes los datos para poder ingresar a la sesion</Typography>
                <Typography marginBottom={0.3}>Link del meet</Typography>
                <Typography marginBottom={2}>Hora y dia de la sesion</Typography>
                <Box display="flex" justifyContent="space-between" width="100%">
                  <Box>
                  <Button href='/MoreNotifications' sx={{borderWidth:1,borderColor:'black',border:1 ,color:'black', width:{xs:'80px',sm:'200px'} }}>Ver todo</Button>
                  </Box>
                  <Box >
                  <Button sx={{borderWidth:1,borderColor:'black',border:1 ,color:'black', width:{xs:'155px',sm:'200px'} }}>Marcar como leido</Button>
                  </Box>
                </Box>
            </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SideMenuNotifications