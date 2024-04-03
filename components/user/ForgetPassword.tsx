import { useContext, useState } from 'react'
import { Button, Card, Grid, Input, Typography } from '@mui/material'
import { AuthContext } from '../../context/auth'


const ForgetPassword = () => {

    const {SubmitCorreo} = useContext(AuthContext)

    const [forgetPasswordInput, setForgetPasswordInput] = useState({correo:'', recordartucontrasena:''})

    const handleCorreo = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForgetPasswordInput({
            ...forgetPasswordInput,
            correo: e.target.value
        })
    }


    const handlePalabraClave = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForgetPasswordInput({
            ...forgetPasswordInput,
            recordartucontrasena: e.target.value
        })
    }


    return (
        <Grid container bgcolor="#F3D5F7" height="100vh">
            <Grid item xs={12}>
                <Grid item xs={12} display="flex" justifyContent="center" py={15}>
                    <Card sx={{maxWidth:{xs:'80%', sm:'50'}, width:'450px', height:{xs:'350px', sm:'350px'}, borderRadius:2 , boxShadow:1, paddingX:3, paddingY:1}}>
                        
                        <Typography variant="h5" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }}>Recuperar contraseña</Typography>
                        <Input onChange={(e)=>{handleCorreo(e)}} placeholder="Correo" type="text" name="correo" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>Correo</Input>
                        <Input onChange={(e)=>{handlePalabraClave(e)}} placeholder="Palabra clave" type="password" name="password" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>Palabra clave</Input>
                        <Button onClick={()=>{SubmitCorreo(forgetPasswordInput.correo, forgetPasswordInput.recordartucontrasena)}} fullWidth sx={{marginTop:'18px', marginBottom:'18px',paddingY:2 , bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}} type="submit">Recuperar contraseña</Button>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ForgetPassword