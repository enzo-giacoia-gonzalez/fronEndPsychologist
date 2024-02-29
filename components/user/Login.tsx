
import { Box, Button, Card, Grid, Input, Link, Typography } from "@mui/material"
import { useContext, useState } from "react"
import { AuthContext } from '../../context/auth/AuthContext';







const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const [handleInput, setHandleInput] = useState({correo:'', password:''})

    const handleCorreo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           correo:e.target.value,
        })
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           password:e.target.value,
        })
    }

    
    
    
    

    return (
        <Grid container bgcolor="#BAA0C8" height="100vh">
            <Grid item xs={12}>
                <Grid item xs={12} display="flex" justifyContent="center" py={10}>
                    <Card sx={{maxWidth:{xs:'80%', sm:'50'}, width:'450px', height:{xs:'400px', sm:'350'},  boxShadow:1, paddingX:3}}>
                        
                        <Typography variant="h5" sx={{borderBottomWidth:'2px', marginTop:'18px'}}>Iniciar Sesion</Typography>
                        <Input onChange={(e)=>{handleCorreo(e)}} type="text" name="correo" sx={{borderWidth:'2px', marginTop:'18px'}} fullWidth>Correo</Input>
                        <Input onChange={(e)=>{handlePassword(e)}} type="password" name="password" sx={{borderWidth:'2px', marginTop:"18px"}} fullWidth>Contraseña</Input>
                        <Button onClick={()=>{loginUser(handleInput.correo, handleInput.password)}} fullWidth sx={{marginTop:'18px', marginBottom:'18px',paddingY:2 , bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}} type="submit">Ingresar</Button>
                        <Box marginBottom="18px"><Link underline="hover" color="#6C2273" href={"/"}>Recuperar contraseña</Link></Box>
                        <Box><Link underline="hover" color="#6C2273" href={"/register"}>Si quieres registrarte has click</Link></Box>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login