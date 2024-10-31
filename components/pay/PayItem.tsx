import { Box, Button, Card, CardActions, CardContent, CardMedia, ListItem, Typography } from '@mui/material';
import ButtonPaypal from './ButtonPaypal';
import { ServiceContext } from '../../context/services';
import { useContext, useEffect } from 'react';





const PayItem = () => {
  
  const {getShift, shiftAll} = useContext(ServiceContext)
  const usuarioId = localStorage.getItem('usuario')
  

  useEffect(() => {
    getShift()
  }, [])

  console.log(shiftAll)

  const shiftFind = shiftAll.filter((shift)=>shift.usuario==usuarioId)
  
  console.log(shiftFind)



  return (
    <Box sx={{paddingBottom:'70px'}}>
   <ListItem>
    <Card sx={{ maxWidth: 445 }}>
    <CardMedia
      component="img"
      height="140"
      image="../../img/sanamente.png"
    />
    <CardContent sx={{flexDirection:'column', justifyItems:'center'}}>
      <Typography gutterBottom variant="h5" component="div">
        {shiftFind[0]?.titulo}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {shiftFind[0]?.precio + " " + shiftFind[0]?.moneda}
      </Typography>
    </CardContent>
    <CardActions sx={{width:'100%'}}>
      <Box justifyContent="center" display="flex" flexDirection="column" alignItems="center" width={"100%"}>
      {shiftFind[0]?.moneda==="USD"?<ButtonPaypal shiftFind={shiftFind}/>: <Button href='/PaySessionCv' sx={{color:'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}} size="large">Pagar via transferencia bancaria</Button>}
      </Box>
    </CardActions>
  </Card>
   </ListItem>
   </Box>
  )
}

export default PayItem