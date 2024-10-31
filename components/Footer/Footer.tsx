import { Box, Button, Typography } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (

    <Box display="flex" paddingY={5} bgcolor="#F5F5F5" sx={{flexDirection:{xs:'column', sm:'row'}, justifyContent:{xs:'unset', sm:'space-around'}, alignItems:{xs:'center', sm:'unset'}}}>
      <Box>
        <Button href='https://wa.link/gcknrt' target="_blank" sx={{color:'black'}}><WhatsAppIcon sx={{fontSize:'60px'}}></WhatsAppIcon></Button>
        <Button href='https://www.instagram.com/sanamentelp/' target="_blank" sx={{color:'black'}}><InstagramIcon sx={{fontSize:'60px'}}></InstagramIcon></Button>
      </Box>
      <Box height="60px" display="flex" alignItems="center">
        <Typography textAlign="center" variant='subtitle1'>Enzo giacoia 2023 todos los derechos reservados</Typography>
      </Box>
    </Box>
  )
}

export default Footer