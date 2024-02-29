import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"



const AboutPrograms = () => {
    return (
        <Grid color="white" container display="flex" sx={{flexDirection:{xs:'column', md:'row'}}}  py="20px" bgcolor="#BAA0C8" px={5}>
            <Grid item xs={12} md={7} display="flex"  alignItems="center" sx={{justifyContent:{xs:'center', md:'end'},flexDirection:{xs:'column', md:'row'}}} >
                <Card sx={{ maxWidth: 745, marginRight:{md:'35px'} }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image="../../img/sanamente.png"
                        />
                        <CardContent>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={12} md={3} display="flex" alignItems="center" justifyContent="start" sx={{flexDirection:{xs:'column', md:'row'}}} >
                <Grid item display="flex" alignItems="start" flexWrap="wrap" sx={{flexDirection:{xs:'column', md:'row'}}} >
                    <Typography textAlign="start" marginLeft="5px" marginBottom="15px" variant="h2">Sobre mis programas</Typography>
                    <Typography textAlign="justify" marginLeft="5px" marginBottom="15px">Aprendí inglés desde muy chica, y siempre tuve muy claro que quería dedicarme a enseñar inglés. </Typography>
                    <Typography textAlign="justify" marginLeft="5px" marginBottom="15px">Durante años trabajé en escuelas e institutos, en los que el centro eran los niños, niñas y adolescente. ¿Y las personas adultas?</Typography>
                    <Typography textAlign="justify" marginLeft="5px"marginBottom="15px">Así, empezó a surgir esta loca idea de enseñar inglés a adultos, con sus tiempos, sus desafíos y sus ganas constantes de superarse. </Typography>
                    <Link to={'/CourseProgram'}><Button sx={{ bgcolor: 'white', color: 'black', pb: "10px", marginLeft:'5px', ":hover": { bgcolor: "#B2D4CB", color:'white' } }}>Programas</Button></Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutPrograms