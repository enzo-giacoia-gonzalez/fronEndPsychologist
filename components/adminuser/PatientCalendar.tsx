import {  useContext, useEffect, useState } from 'react'
import { Card, FormControl, Grid, Input, MenuItem, Select, Typography, Button, Box } from '@mui/material';

import { CalendarContext } from '../../context/patientCalendar';






const PatientCalendar = () => {

  const { getResultsReceipt, userWithReceipt, getReceiptById, receiptById, getUserById, userByMail, userById} = useContext(CalendarContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })
  
  const [postInput, setPostInput] = useState({ titulo: undefined, fechayhora:undefined, linksesion:undefined, precio:undefined, pago:undefined,usuario:undefined, idUsuario: undefined})


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


if(postInput.pago===undefined || postInput.precio===undefined || postInput.titulo===undefined || postInput.fechayhora===undefined || postInput.linksesion===undefined ){
      postInput.pago=receiptById?.pago
      postInput.precio=receiptById?.precio
      postInput.titulo=receiptById?.titulo
      postInput.fechayhora=receiptById?.fechayhora
      postInput.linksesion=receiptById?.linksesion
}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any


  const handleLink = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      linksesion:e.target.value
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


console.log(postInput.precio)
// eslint-disable-next-line @typescript-eslint/no-explicit-any


// eslint-disable-next-line @typescript-eslint/no-explicit-any


  return (
    <Grid container direction={{xs:'column'}} justifyContent="center" alignItems="center" height="100vh">
        <Grid item xs direction={{xs:'column'}} justifyContent="center" alignItems="center">
            <Card sx={{padding:3, boxShadow:1}}>
            <Typography marginBottom={3} variant='h5'>Calendario de turnos</Typography>
            <Box display="flex" marginBottom="15px">
            <Input onChange={(e)=>{handleSearch(e)}} placeholder='Hora de la sesion' sx={{marginRight:'8px', width:'60%'}} type='datetime-local'></Input>
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
            <Input readOnly placeholder='Nombre de la persona' value={postInput.usuario===undefined?userById?.nombre:userByMail.nombre} sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text'></Input>
            <Input readOnly onChange={(e)=>{handlePrecio(e)}} value={postInput.precio===undefined?receiptById?.precio:postInput.precio} placeholder='Precio que pago' sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='precio'></Input>
            <Input readOnly onChange={(e)=>{handleLink(e)}} value={postInput.linksesion===undefined?receiptById?.linksesion:postInput.linksesion} placeholder='Link de la sesion' sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='precio'></Input>
            
            </Card>
        </Grid>
    </Grid>
  )
}

export default PatientCalendar