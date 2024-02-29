import  { useState } from 'react'

import PutReceiptPayment from './PutReceiptPayment';
import DeleteReceiptPayment from './DeleteReceiptPayment';
import { Grid, Typography, Button } from '@mui/material'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



const ReceiptPayment = () => {
    const [action, setAction] = useState("")

    return (
      <Grid container height="100vh" direction="column" alignItems="center">
         <Typography marginTop="80px" marginBottom="20px">Comprobantes</Typography>
        <Grid container direction="row" justifyContent="center" alignItems="center" >
       
          
          <Button sx={{height:'60px'}} onClick={()=>{setAction("putService")}}><ModeEditIcon/></Button>
          <Button sx={{height:'60px'}} onClick={()=>{setAction("deleteService")}}><DeleteForeverIcon/></Button>
          </Grid>
        <Grid container direction="column" alignItems="center">
          
          {action==="putService"?<PutReceiptPayment/>:""}
          {action==="deleteService"?<DeleteReceiptPayment/>:""}
          </Grid>
      </Grid>
    )
}

export default ReceiptPayment