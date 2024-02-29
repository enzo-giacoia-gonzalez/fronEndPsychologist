import { useContext, useEffect, useState } from 'react';
import { Grid, Card, Typography, Box, Button, FormControl, Select, MenuItem, Input} from '@mui/material';
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
  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShift= (e: React.ChangeEvent<{ value: unknown }>) => {
    const receiptId = e.target.value as string
    getReceiptById(receiptId)
}














  return (
    <Grid item xs>
    <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
    <Typography variant='h5' sx={{marginBottom:3}}>Borrar comprobante</Typography>
    <Box display="flex">
    <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Buscar comprobante' sx={{width:'100%', border:1, marginBottom:1, borderRadius:"4px", marginRight:'5px'}}></Input><Button onClick={() => { getResultsReceipt(searchInput.search) }} sx={{borderRadius:"4px", border:1, marginBottom:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Buscar</Button>
    </Box>
    <FormControl sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} fullWidth>
          
          <Select
            
            placeholder='seleccionar comprobante a borrar'
            onChange={(e)=>{handleShift(e)}}
            displayEmpty
          >
            {userWithReceipt.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.titulo}</MenuItem>)
            })}
          </Select>
        </FormControl>
        
    
        
      <Button onClick={()=>{deleteReceipt(receiptById?._id)}} sx={{borderRadius:"4px", border:1, marginBottom:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Eliminar comprobante</Button>
    </Card>
    </Grid>
  )
}

export default DeleteReceiptPayment