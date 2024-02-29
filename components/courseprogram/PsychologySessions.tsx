import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid, Link } from "@mui/material"
import img from "../../img/sanamente.png"


const PsychologySessions = () => {
  return (
    <Grid container py={8}>
      <Grid item xs={12} display="flex" justifyContent="space-between" sx={{flexDirection:{xs:'column', md:'row'}, alignItems:{xs:'center', md:'unset'}}} >
      <Grid item xs={12} md={4} sx={{marginLeft:{xs:'15px',md:8}, marginRight:{xs:'15px',md:'0px'}, marginBottom:{xs:'30px', md:'0px'}}}>
      <Card sx={{ maxWidth: 445 }}>
    <CardMedia
      component="img"
      height="140"
      image={img}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Informacion de la sesion
      </Typography>
      <Typography variant="body2" color="text.secondary">
       Las sesiones tienen una duracion de una hora, son via zoom o meet y el valor dependera del pais en donde te encuentres. En los siguientes enlaces 
       te podras comunicar con el psicologo que te dira el valor de la sesion y podras pagarle via transferencia o paypal por la pagina
      </Typography>
    </CardContent>
    <CardActions>
      <Button sx={{color:'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}} size="small">WhatsApp</Button>
      <Button sx={{color:'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}} size="small">Instagram</Button>
    </CardActions>
  </Card>
      </Grid>
      <Grid item xs={12} md={4} sx={{marginLeft:{xs:'15px',md:8}, marginRight:{xs:'15px',md:'0px'}}}>
        <Typography mb={1} variant="h5">Sí ya te comunicaste con el psicólogo</Typography>
        <Link href="/PayItem" color="#712277">Puede realizar tu pago por aquí</Link>
      </Grid>
      </Grid>
     
    </Grid>
    
  )
}

export default PsychologySessions