import { Button, Card, Grid, Input, Link, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'


const Register = () => {


    const {registerUser} = useContext(AuthContext)

    const [handleInput, setHandleInput] = useState({nombre:'', correo:'', dni:'', password:'', repeatpassword:'', recordartucontrasena:''})


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

    const handleDni = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           dni:e.target.value,
        })
    }

    const handlePassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           password:e.target.value,
        })
    }

    const handleRepeatPassword = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           repeatpassword:e.target.value,
        })
    }

    const handleRecordar= (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setHandleInput({
            ...handleInput,
           recordartucontrasena:e.target.value,
        })
    }



  return (
    <Grid container bgcolor="#F3D5F7" height="100vh">
            <Grid item xs={12}>
                <Grid item xs={12} display="flex" justifyContent="center" py={15}>
                    <Card sx={{maxWidth:{xs:'90%', sm:'50'}, width:'450px', height:{xs:'500px', sm:'500px'},  boxShadow:1, paddingX:3, borderRadius:2}}>
                        <Typography variant="h5" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} >Registrar alumno</Typography>

                        <Input onChange={(e)=>{handleUsuario(e)}} type='text' name='nombre' placeholder='Nombre'  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input>
                     
                        <Input onChange={(e)=>{handleCorreo(e)}} type='text' name='correo' placeholder='Correo'  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input>

                        <Input onChange={(e)=>{handleDni(e)}} type='text' name='dni' placeholder='Dni'  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input>

                        <Input onChange={(e)=>{handlePassword(e)}} type='password' name='password' placeholder='Contraseña'  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input>
                      

                        <Input sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} onChange={(e)=>{handleRepeatPassword(e)}} type='password' name='repetircontraseña' placeholder='Repetir contraseña' fullWidth></Input>

                        <Input sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} onChange={(e)=>{handleRecordar(e)}} type='password' name='recordartucontrasena' placeholder='Recordar tu contraseña' fullWidth></Input>
                        <Button onClick={()=>{registerUser(handleInput.nombre, handleInput.correo, handleInput.dni,handleInput.password, handleInput.repeatpassword, handleInput.recordartucontrasena)}} fullWidth sx={{marginTop:'18px', marginBottom:'18px',paddingY:2 , bgcolor:'#BAA0C8', color:'black',  ":hover":{bgcolor:'#6C2273', color:'white'}}} type='submit'>Registrar</Button>
                        <Link underline="hover" color="#6C2273" href={"/login"}>Si ya tienes una cuenta has click</Link>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
  )
}

export default Register