
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
        <Grid container bgcolor="#F3D5F7" height="100vh">
            <Grid item xs={12}>
                <Grid item xs={12} display="flex" justifyContent="center" py={15}>
                    <Card sx={{maxWidth:{xs:'80%', sm:'50'}, width:'450px', height:{xs:'400px', sm:'400px'}, borderRadius:2 , boxShadow:1, paddingX:3, paddingY:1}}>
                        
                        <Typography variant="h5" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }}>Iniciar Sesion</Typography>
                        <Input onChange={(e)=>{handleCorreo(e)}} placeholder="Correo" type="text" name="correo" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input>
                        <Input onChange={(e)=>{handlePassword(e)}} placeholder="Contraseña" type="password" name="password" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input>
                        <Button onClick={()=>{loginUser(handleInput.correo, handleInput.password)}} fullWidth sx={{marginTop:'18px', marginBottom:'18px',paddingY:2 , bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}} type="submit">Ingresar</Button>
                        <Box marginBottom="18px"><Link underline="hover" color="#6C2273" href={"/ForgetPassword"}>Recuperar contraseña</Link></Box>
                        <Link underline="hover" color="#6C2273" href={"/register"}>Si quieres registrarte has click</Link>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Login