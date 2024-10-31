import { Grid, Card, Typography, Button, Input} from '@mui/material'
import  { useContext, useState } from 'react'
import { AuthContext } from '../../context/auth'
import { useParams } from 'react-router-dom'








type tokenId = `${string}-${string}-${string}-${string}-${string}`

const ResetPasswordParams = () => {

    


const {token}  = useParams<tokenId>()

    



    


    const {changePassword} = useContext(AuthContext)

    const [forgetPasswordInput, setForgetPasswordInput] = useState({nuevacontraseña:'', repetircontraseña:''})

    const handleNuevaContraseña = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForgetPasswordInput({
            ...forgetPasswordInput,
            nuevacontraseña: e.target.value
        })
    }


    const handleRepetirContraseña = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForgetPasswordInput({
            ...forgetPasswordInput,
            repetircontraseña: e.target.value
        })
    }


  return (
    <Grid container bgcolor="#F3D5F7" height="100vh">
    <Grid item xs={12}>
        <Grid item xs={12} display="flex" justifyContent="center" py={15}>
            <Card sx={{maxWidth:{xs:'80%', sm:'50'}, width:'450px', height:{xs:'350px', sm:'350px'}, borderRadius:2 , boxShadow:1, paddingX:3, paddingY:1}}>
                
               <Typography variant="h5" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }}>Recuperar contraseña</Typography>
               <Input onChange={(e)=>(handleNuevaContraseña(e))} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} placeholder='Nueva contraseña' type='password' name='password'></Input>
               <Input onChange={(e)=>(handleRepetirContraseña(e))} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} placeholder='Repetir contraseña' type='password' name='repetircontrasena'></Input>
               <Button onClick={()=>{changePassword(forgetPasswordInput.nuevacontraseña, forgetPasswordInput.repetircontraseña, token)}} fullWidth sx={{marginTop:'18px', marginBottom:'18px',paddingY:2 , bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}} type="submit">Recuperar contraseña</Button>
            </Card>
        </Grid>
    </Grid>
</Grid>
  )
}

export default ResetPasswordParams