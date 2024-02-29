import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <Grid container display="flex" py="100px" color="white" bgcolor="#B2D4CB" alignItems="center" flexDirection="column">
            <Grid item xs={12} mb="10px" display="flex" alignItems="center" flexDirection="column">

                <strong><Typography mb={1} textAlign="center" variant="h2">Hi welcome</Typography></strong>
            

            
                <Typography mb={1} textAlign="center">Soy romi profe de ingles y speaking coach</Typography>
            

           
                <Typography mb={1} textAlign="center">Mi propósito es que aprendas a comunicarte en inglés efectivamente y con confianza</Typography>
           

            
                <Link to={'/CourseProgram'}><Button sx={{ bgcolor: 'white', color: 'black', pb: "10px", ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Programas</Button></Link>
            </Grid>
        </Grid>
    )
}

export default About