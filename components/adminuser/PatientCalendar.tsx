import {  useContext, useEffect, useState } from 'react'
import { Card, FormControl, Grid, Input, MenuItem, Select, Typography, Button, Box, SelectChangeEvent } from '@mui/material';

import { CalendarContext } from '../../context/patientCalendar';






const PatientCalendar = () => {

  const { getResultsReceipt, userWithReceipt, getReceiptById, receiptById, getUserById, userByMail, userById} = useContext(CalendarContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })
  
  const [postInput, setPostInput] = useState({ titulo: '', fechayhora:'', linksesion:'', precio:0, pago:'',usuario:'', idUsuario: ''})


  console.log(userById)

  console.log(receiptById?._id)

  useEffect(() => {
    
    setPostInput({
      ...postInput,
      usuario:'',
      idUsuario:'',
      pago:'',
      precio:0,
      fechayhora:'',
    })
    getUserById(receiptById?.usuario)
    

}, [receiptById])


if(postInput.pago==='' || postInput.precio===0 || postInput.titulo==='' || postInput.fechayhora==='' || postInput.linksesion==='' ){
      postInput.pago=receiptById?.pago
      postInput.precio=receiptById?.precio
      postInput.titulo=receiptById?.titulo
      postInput.fechayhora=receiptById?.fechayhora
      postInput.linksesion=receiptById?.linksesion
}


  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };
  



  const handleLink = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      linksesion:e.target.value
    })
    
  }





  const handlePrecio = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      precio:e.target.value as unknown as number
    })
  }



  
  



  const handleReceipt= (e: SelectChangeEvent<unknown>) => {
    const receiptId = e.target.value as unknown as string
    setPostInput({
      ...postInput,
      titulo:'',
    })
    getReceiptById(receiptId)
}


console.log(postInput.precio)



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
            <Input readOnly placeholder='Nombre de la persona' value={postInput.usuario===''?userById?.nombre + " " + userById?.apellido + " " + userById?.dni :userByMail.nombre +" " + userByMail.apellido+ " " + userByMail?.dni  } sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text'></Input>
            <Input readOnly onChange={(e)=>{handlePrecio(e)}} value={postInput.precio===0?receiptById?.precio + " " + receiptById.moneda :postInput.precio + " " +receiptById.moneda} placeholder='Precio que pago' sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='precio'></Input>
            <Input readOnly onChange={(e)=>{handleLink(e)}} value={postInput.linksesion===''?receiptById?.linksesion:postInput.linksesion} placeholder='Link de la sesion' sx={{ width:'100%', border:1, borderColor:'white', marginBottom:"15px", borderRadius:"4px", marginRight:'5px'}} type='text' name='precio'></Input>
            
            </Card>
        </Grid>
    </Grid>
  )
}

export default PatientCalendar