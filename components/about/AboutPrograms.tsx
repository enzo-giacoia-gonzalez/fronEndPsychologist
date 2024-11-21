import { Button, Card, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import img from "../../img/sanamente.png"



const AboutPrograms = () => {
    const rol = localStorage.getItem("rol")
    const token = localStorage.getItem("token")

    return (
        <Grid color="white" container display="flex" sx={{flexDirection:{xs:'column', md:'row'}}}  py="90px" bgcolor="#BAA0C8" px={5}>
            <Grid item xs={12} md={7} display="flex"  alignItems="center" sx={{justifyContent:{xs:'center', md:'end'},flexDirection:{xs:'column', md:'row'}}} >
                <Card sx={{ maxWidth: 745, marginRight:{md:'35px'}, borderRadius:"15px" }}>
                        <CardMedia
                            component="img"
                            height="180"
                            image={img}
                        />      
                </Card>
            </Grid>

            <Grid item xs={12} md={3} display="flex" alignItems="start" justifyContent="start" sx={{flexDirection:{xs:'column', md:'row'}}} >
                <Grid item display="flex" alignItems="start" flexWrap="wrap" sx={{flexDirection:{xs:'column', md:'row'}}} >
                    <Typography textAlign="start" marginLeft="5px" marginBottom="15px" variant="h2">Sobre mis herramientas</Typography>
                    <Typography textAlign="justify" marginLeft="5px" marginBottom="15px">Desde muy chiquita me di cuenta de que amaba ayudar a las personas y ahí nació mi amor por la psicología.</Typography>
                    <Typography textAlign="justify" marginLeft="5px" marginBottom="15px">Durante años trabajé en escuelas e institutos, en los que el centro eran los niños, niñas y adolescente. ¿Y las personas adultas?</Typography>
                    <Typography textAlign="justify" marginLeft="5px"marginBottom="15px">Así, empezó a surgir esta loca idea de dar sesiones online con el fin de ayudar a las personas adultas a superar sus dificultades.</Typography>
                    {token && rol=="PATIENT_ROLE" || rol=="ADMIN_ROLE"?<Link to={'/CourseProgram'}><Button sx={{ borderRadius:"8px", bgcolor: 'white', color: 'black', pb: "10px", mt: "15px", marginLeft:'5px', ":hover": { border:1 , color:'black', bgcolor: 'white' } }}>Herramientas de autoayuda</Button></Link>:""}

                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutPrograms