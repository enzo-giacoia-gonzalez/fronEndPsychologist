import { useContext, useEffect, useState } from 'react'
import { Card, FormControl, Grid, Input, MenuItem, Select, Typography, Button, Box } from '@mui/material';
import { ReceiptContext } from '../../context/receipts'

const PatientCalendar = () => {

  const { getResultsReceipt, userWithReceipt, getReceiptById, receiptById, getUserByMail, getUserById, userByMail, userById,} = useContext(ReceiptContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })
  
  const [postInput, setPostInput] = useState({ titulo: undefined, fechayhora:undefined, precio:undefined, pago:undefined,usuario:undefined, idUsuario: undefined})


  console.log(receiptById?._id)

  useEffect(() => {
    
    setPostInput({
      ...postInput,
      usuario:undefined,
      idUsuario:undefined,
      pago:undefined,
      precio:undefined,
      fechayhora:undefined,
    })
    getUserById(receiptById?.usuario)

}, [receiptById])


if(postInput.pago===undefined || postInput.precio===undefined || postInput.titulo===undefined || postInput.fechayhora===undefined ){
      postInput.pago=receiptById?.pago
      postInput.precio=receiptById?.precio
      postInput.titulo=receiptById?.titulo
      postInput.fechayhora=receiptById?.fechayhora
}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any


  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      titulo:e.target.value
    })
    
  }


  const handleTime = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      fechayhora:e.target.value
    })
  }


  const handlePrecio = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      precio:e.target.value
    })
  }
  


// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleReceipt= (e:any) => {
    const receiptId = e.target.value
    setPostInput({
      ...postInput,
      titulo:undefined,
    })
    getReceiptById(receiptId)
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any


// eslint-disable-next-line @typescript-eslint/no-explicit-any


  return (
    <Grid container direction={{xs:'column'}} justifyContent="center" alignItems="center" height="100vh">
        <Grid item xs direction={{xs:'column'}} justifyContent="center" alignItems="center">
            <Card sx={{padding:3, boxShadow:1}}>
            <Typography marginBottom={3} variant='h5'>Calendario de turnos</Typography>
            <Box display="flex" marginBottom="15px">
            <Input onChange={(e)=>{handleSearch(e)}} placeholder='Nombre del usuario' sx={{marginRight:'8px', width:'60%'}} type='datetime-local'></Input>
            <Button onClick={() => { getResultsReceipt(searchInput.search) }} sx={{ width:'40%', borderRadius:"4px", border:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Buscar</Button>
            </Box>
            <FormControl sx={{ border: 1, marginBottom: "15px", borderRadius: "4px" }} fullWidth>
          
          <Select
            onChange={(e)=>{handleReceipt(e)}}
            displayEmpty
            type='datetime-local'
          >
            {userWithReceipt.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.fechayhora}</MenuItem>)
            })}
          </Select>
        </FormControl>
            <Input onChange={(e)=>{handleTime(e)}} placeholder='Hora de la sesion'  sx={{ width:'100%', borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='datetime-local' name='fechayhora'></Input>
            <Input onChange={(e)=>{handleTitle(e)}} placeholder='Nombre de la persona'  sx={{ width:'100%', borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='titulo'></Input>
            <Input onChange={(e)=>{handlePrecio(e)}} placeholder='Precio que pago' sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='precio'></Input>
            <Input onChange={(e)=>{(e)}} placeholder='Precio que pago' sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='precio'></Input>
            
            </Card>
        </Grid>
    </Grid>
  )
}

export default PatientCalendar