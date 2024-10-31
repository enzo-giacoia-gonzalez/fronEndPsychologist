
import { Button, Grid, } from '@mui/material';
import { UiContext } from '../../context/ui';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';





const Navbar = () => {

    
    const rol = localStorage.getItem("rol")
    

    const { toogleSideMenu} = useContext(UiContext)


    return (
        <Grid display="flex" justifyContent="space-between" container py="30px">
            <Grid item xs={6} display="flex">
                <Grid item xs={3}>
                    <Link to={'/'}><Button sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white', }, display: { xs: 'none', md: 'flex' }, marginLeft: '60px' }}>Inicio</Button></Link>
                </Grid>
                {rol=="USER_ROLE" || rol=="PATIENT_ROLE"?
                    <Grid item xs={3}>
                        <Link to={'/PsychologySessions'}><Button sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' }, display: { xs: 'none', md: 'flex' } }}>Sesiones</Button></Link>
                    </Grid>:""}
            </Grid>
            <Grid item xs={6} display="flex">
                { /* Acordarme de hacer la condicion de si no hay notificaciones o ya estan leidas poner el icono inactivo */}
                <Grid item xs={5} sx={{ px: { xs: '0px', md: '0px' } }}>
                    <Button sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }} onClick={() => toogleSideMenu()}>Perfil</Button>
                </Grid>
                <Grid item xs={1} sx={{ px: { xs: '0px', md: '180px' }, marginRight: { xs: '40px', lg: '0px' } }} >
                    <Button href='https://wa.link/gcknrt' target="_blank" sx={{color: 'black',":hover": { bgcolor: "#BAA0C8", color: 'white' }}} ><WhatsAppIcon sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}  /></Button>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Navbar