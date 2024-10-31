import { Button, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const About = () => {

    const rol = localStorage.getItem("rol")
    const token = localStorage.getItem("token")

    return (
        <Grid container display="flex" py="100px" color="white" bgcolor="#B2D4CB" alignItems="center" flexDirection="column">
            <Grid item xs={12} mb="10px" display="flex" alignItems="center" flexDirection="column">

                <strong><Typography mb={1} textAlign="center" variant="h2">Hi welcome</Typography></strong>
            

            
                <Typography mb={1} textAlign="center">Soy romi profe de ingles y speaking coach</Typography>
            

           
                <Typography mb={1} textAlign="center">Mi propósito es que aprendas a comunicarte en inglés efectivamente y con confianza</Typography>
           

            
                {token && rol=="PATIENT_ROLE" || rol=="ADMIN_ROLE"?<Link to={'/CourseProgram'}><Button sx={{ borderRadius:"8px", bgcolor: 'white', color: 'black', pb: "10px", mt: "15px", marginLeft:'5px', ":hover": { border:1 , color:'black', bgcolor: 'white' } }}>Herramientas de autoayuda</Button></Link>:""}
            </Grid>
        </Grid>
    )
}

export default About