import { Button, Card, Grid, Input, Link, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'


const Register = () => {


    const {registerUser} = useContext(AuthContext)

    const [handleInput, setHandleInput] = useState({nombre:'', correo:'', password:'', recordartucontrasena:''})


    const handleUsuario = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           nombre:e.target.value,
        })
    }

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

    const handleRecordar= (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           recordartucontrasena:e.target.value,
        })
    }



  return (
    <Grid container bgcolor="#BAA0C8" height="100vh">
            <Grid item xs={12}>
                <Grid item xs={12} display="flex" justifyContent="center" py={10}>
                    <Card sx={{maxWidth:{xs:'90%', sm:'50'}, width:'450px', height:{xs:'500px', sm:'350'},  boxShadow:1, paddingX:3}}>
                        <Typography variant="h5" sx={{borderBottomWidth:'2px', marginTop:'18px'}}>Registrar alumno</Typography>
                        <Typography marginTop="18px">Nombre</Typography>
                        <Input onChange={(e)=>{handleUsuario(e)}} type='text' name='nombre' placeholder='Nombre' sx={{borderWidth:'2px'}} fullWidth></Input>
                        <Typography marginTop="18px">Correo</Typography>
                        <Input onChange={(e)=>{handleCorreo(e)}} type='text' name='correo' placeholder='Correo' sx={{borderWidth:'2px'}} fullWidth></Input>
                        <Typography marginTop="18px">Contraseña</Typography>
                        <Input onChange={(e)=>{handlePassword(e)}} type='password' name='password' placeholder='Contraseña' sx={{borderWidth:'2px'}} fullWidth></Input>
                        <Typography marginTop="18px">Recordar contraseña</Typography>
                        <Input onChange={(e)=>{handleRecordar(e)}} type='password' name='recordartucontrasena' placeholder='Repetir contraseña' sx={{borderWidth:'2px'}} fullWidth></Input>
                        <Button onClick={()=>{registerUser(handleInput.nombre, handleInput.correo,handleInput.password, handleInput.recordartucontrasena)}} fullWidth sx={{marginTop:'18px', marginBottom:'18px',paddingY:2 , bgcolor:'#BAA0C8', color:'black',  ":hover":{bgcolor:'#6C2273', color:'white'}}} type='submit'>Registrar</Button>
                        <Link underline="hover" color="#6C2273" href={"/login"}>Si ya tienes una cuenta has click</Link>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
  )
}

export default Register