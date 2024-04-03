import { useContext, useEffect, useState } from 'react';
import { ReceiptContext } from '../../context/receipts';
import { Box, Button, Card, FormControl, Grid, Input, MenuItem, Select, Typography } from '@mui/material';



const PutReceiptPayment = () => {

  const { getResultsReceipt, userWithReceipt, getReceiptById, receiptById, getUserById, userByMail, userById, putReceipt} = useContext(ReceiptContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })
  
  const [searchInputUser, setSearchInputUser] = useState({ categoriaUser: '', searchUser: '' })

  const [postInput, setPostInput] = useState({ titulo: undefined, fechayhora:undefined, precio:undefined,moneda:undefined, pago:undefined,usuario:undefined, idUsuario: undefined})


  console.log(receiptById?._id)

  useEffect(() => {
    
    setPostInput({
      ...postInput,
      usuario:undefined,
      idUsuario:undefined,
      pago:undefined,
      moneda:undefined,
      precio:undefined,
      fechayhora:undefined,
    })
    getUserById(receiptById?.usuario)

}, [receiptById])


if(postInput.pago===undefined || postInput.moneda===undefined || postInput.precio===undefined || postInput.titulo===undefined || postInput.fechayhora===undefined ){
      postInput.pago=receiptById?.pago
      postInput.moneda=receiptById?.moneda
      postInput.precio=receiptById?.precio
      postInput.titulo=receiptById?.titulo
      postInput.fechayhora=receiptById?.fechayhora
      postInput.idUsuario=receiptById?.usuario
}

console.log(receiptById)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchUser = (e: any) => {
    setSearchInputUser({
      ...searchInputUser,
      searchUser: e.target.value,
    });
  };

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

  const handlePago = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  
    
    setPostInput({
      ...postInput,
      pago:e.target.value
    })
  }

  const handleMoneda= (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
  
    
    setPostInput({
      ...postInput,
      moneda:e.target.value
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
const handleHiddenValue = (e:any) => {
  const id = e.target.value
  setPostInput({
    ...postInput,
    usuario: id
  })
}








  
  return (
    <Grid item xs>
    <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
    <Typography variant='h5' sx={{marginBottom:3}}>Editar un comprobante</Typography>
    <Box display="flex">
    <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Buscar comprobante' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResultsReceipt(searchInput.search) }} sx={{borderRadius:"4px", border:1, marginBottom:"15px" ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Buscar</Button>
    </Box>
    <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>
          
          <Select
            
            onChange={(e)=>{handleReceipt(e)}}
            displayEmpty
          >
            {userWithReceipt.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.titulo}</MenuItem>)
            })}
          </Select>
        </FormControl>
        
    <Input  onChange={(e)=>{handleTitle(e)}} placeholder='Titulo' value={postInput.titulo===undefined?receiptById?.titulo:postInput.titulo} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='titulo' type='text'></Input>
      <Input onChange={(e)=>{handleTime(e)}} placeholder='Hora y dia de la sesion' value={postInput.fechayhora===undefined?receiptById?.fechayhora:postInput.fechayhora} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='fechayhora' type='datetime-local'></Input>
      <Input readOnly onChange={(e)=>{handlePrecio(e)}}  placeholder='Precio de la sesion' value={postInput.precio===undefined?receiptById?.precio:postInput.precio}  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='precio' type='text'></Input>
      <Input readOnly onChange={(e)=>{handleMoneda(e)}}  placeholder='moneda' value={postInput.moneda===undefined?receiptById?.moneda:postInput.moneda}  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='moneda' type='text'></Input>
      <Input readOnly onChange={(e)=>{handlePago(e)}}  placeholder='pago' value={postInput.pago===undefined?receiptById?.pago:postInput.pago}  sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='aprobado' type='text'></Input>
      <Input readOnly placeholder='Nombre del usuario' value={postInput.usuario===undefined?userById?.nombre:userByMail.nombre} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} type='text'></Input>
      <Input onChange={(e)=>{handleHiddenValue(e)}} type="hidden" value={postInput.idUsuario===undefined?userById?.uid:userByMail.uid}  />
     

  
        
      <Button onClick={()=>{putReceipt(postInput.titulo, postInput.fechayhora,postInput.precio, postInput.pago,postInput.moneda, postInput.idUsuario,receiptById?._id)}} sx={{borderRadius:"4px", border:1, marginBottom:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Agregar servicio</Button>
    </Card>
    </Grid>
  )
}

export default PutReceiptPayment