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

  console.log(shiftFind[0]?.img)

  return (
   <ListItem>
    <Card sx={{ maxWidth: 445 }}>
    <CardMedia
      component="img"
      height="140"
      image="../../img/sanamente.png"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {shiftFind[0]?.titulo}
      </Typography>
      <Typography variant="body2" color="text.secondary">
      {shiftFind[0]?.precio}
      </Typography>
    </CardContent>
    <CardActions>
      <Box justifyContent="center" display="flex" flexDirection="column" alignItems="center">
      {shiftFind[0].moneda==="USD"?<ButtonPaypal shiftFind={shiftFind}/>: <Button href='PaySessionCv' sx={{color:'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}} size="small">Pagar via transferencia bancaria</Button>}
      </Box>
    </CardActions>
  </Card>
   </ListItem>
  )
}

export default PayItem