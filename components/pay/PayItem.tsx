import { Button, Card, CardActions, CardContent, CardMedia, ListItem, Typography } from '@mui/material';


const PayItem = () => {
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
        Sesion de psicologia de una hora
      </Typography>
      <Typography variant="body2" color="text.secondary">
       15$
      </Typography>
    </CardContent>
    <CardActions>
      <Button href='/PaySessionPaypal' sx={{color:'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}} size="small">Pagar via paypal</Button>
      <Button href='PaySessionCv' sx={{color:'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}} size="small">Pagar via transferencia bancaria</Button>
    </CardActions>
  </Card>
   </ListItem>
  )
}

export default PayItem