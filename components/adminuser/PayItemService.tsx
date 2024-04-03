import { useState } from 'react'
import PayItemAddService from './PayItemAddService';
import PayItemPutService from './PayItemPutService';
import { Grid, Button, Typography,} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PayItemDeleteService from './PayItemDeleteService';

const PayItemService = () => {

  const [action, setAction] = useState("")

  return (
    <Grid container minHeight="100vh" direction="column" alignItems="center">
       <Typography marginTop="80px" marginBottom="20px">Turnos</Typography>
      <Grid container direction="row" justifyContent="center" alignItems="center" >
     
        <Button sx={{height:'60px', marginBottom:5}} onClick={()=>{setAction("postService")}}><AddIcon/></Button>
        <Button sx={{height:'60px', marginBottom:5}} onClick={()=>{setAction("putService")}}><ModeEditIcon/></Button>
        <Button sx={{height:'60px', marginBottom:5}} onClick={()=>{setAction("deleteService")}}><DeleteForeverIcon/></Button>
        </Grid>
      <Grid container direction="column" alignItems="center">
        {action==="postService"?<PayItemAddService/>:""}
        {action==="putService"?<PayItemPutService/>:""}
        {action==="deleteService"?<PayItemDeleteService/>:""}
        </Grid>
    </Grid>
  )
}

export default PayItemService