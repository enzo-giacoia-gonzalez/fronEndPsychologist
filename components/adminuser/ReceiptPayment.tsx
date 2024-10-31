import  { useState } from 'react'
import DeleteReceiptPayment from './DeleteReceiptPayment';
import { Grid, Typography, Button } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const ReceiptPayment = () => {
    const [action, setAction] = useState("")

    return (
      <Grid container height="100vh" direction="column" alignItems="center">
         <Typography marginTop="80px" marginBottom="20px">Eliminar comprobantes</Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
       

          <Button sx={{height:'50px', marginRight:'8px', marginBottom:5, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }}} onClick={()=>{setAction("deleteService")}}><DeleteForeverIcon/></Button>
          </Grid>
        <Grid container direction="column" alignItems="center">
          
          
          {action==="deleteService"?<DeleteReceiptPayment/>:""}
          </Grid>
      </Grid>
    )
}

export default ReceiptPayment