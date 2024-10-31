import { useContext, useEffect, useState } from 'react';
import { Grid, Card, Typography, Box, Button, FormControl, Select, MenuItem, Input, SelectChangeEvent} from '@mui/material';
import { ReceiptContext } from '../../context/receipts';




const DeleteReceiptPayment = () => {


  const { getResultsReceipt, userWithReceipt, getReceiptById, receiptById, getUserById, deleteReceipt} = useContext(ReceiptContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })
  

  useEffect(() => {
    
   
    getUserById(receiptById?.usuario)

}, [receiptById])



 
  const handleSearch = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };
  


  const handleShift= (e: SelectChangeEvent<unknown>) => {
    const receiptId = e.target.value as unknown as string
    getReceiptById(receiptId)
}














  return (
    <Grid item xs>
    <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
    <Typography variant='h5' sx={{marginBottom:3}}>Borrar comprobante</Typography>
    <Box display="flex">
    <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Buscar comprobante' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResultsReceipt(searchInput.search) }} sx={{borderRadius:"4px", border:1, marginBottom:"15px" ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Buscar</Button>
    </Box>
    <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>
          
          <Select
            
            placeholder='seleccionar comprobante a borrar'
            onChange={(e)=>{handleShift(e)}}
            displayEmpty
          >
            {userWithReceipt.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.titulo + " " + users?.fechayhora}</MenuItem>)
            })}
          </Select>
        </FormControl>
        
    
        
      <Button onClick={()=>{deleteReceipt(receiptById?._id)}} sx={{borderRadius:"4px", border:1, marginBottom:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Eliminar comprobante</Button>
    </Card>
    </Grid>
  )
}

export default DeleteReceiptPayment