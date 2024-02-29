import { Grid, Card, Typography, Button, Input, Box, Select, FormControl, MenuItem } from '@mui/material'
import { useContext, useState } from 'react';
import { ServiceContext } from '../../context/services';


const PayItemAddService = () => {

  const { getResults, user, getUserByMail, userByMail, addService } = useContext(ServiceContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })

  const [postInput, setPostInput] = useState({ titulo: '', fileImg: '', fechayhora:'', linksesion:'', precio:'', usuario:'' })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };

  const handleTitle = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      titulo: e.target.value,
    });
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImg = (e:any) => {
    setPostInput({
      ...postInput,
      fileImg: e.target.files[0],
    });
  }

  const handleTime = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      fechayhora: e.target.value,
    });
  }

  const handleLinkSesion = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      linksesion: e.target.value,
    });
  }

  const handlePagoSesion = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      precio: e.target.value,
    });
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUsuario = (e:any) => {
      getUserByMail(e.target.value)
  }

  postInput.usuario=userByMail.uid
  console.log(postInput.usuario)
  
    
  



  
  





  return (
    <Grid item xs>
      <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
        <Typography variant='h5' sx={{ marginBottom: 3 }}>Asignar una nueva sesion</Typography>
        <Input onChange={(e)=>{handleTitle(e)}} placeholder='Titulo' sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='titulo' type='text'></Input>
        <Input onChange={(e)=>{handleImg(e)}} placeholder='Imagen' sx={{ marginBottom: 1, borderRadius: "4px" }} name='fileImg' type='file'></Input>
        <Input onChange={(e)=>{handleTime(e)}} placeholder='Hora y dia de la sesion' sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='fechayhora' type='datetime-local'></Input>
        <Input onChange={(e)=>{handleLinkSesion(e)}} placeholder='Link de la sesion' sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='linksesion' type='text'></Input>
        <Input onChange={(e)=>{handlePagoSesion(e)}}  placeholder='Precio de la sesion' sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='precio' type='text'></Input>
        <Box display="flex">
          <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Nombre del usuario' sx={{ width: 'auto', border: 1, marginBottom: 1, borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResults(searchInput.search) }} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar usuario</Button>
        </Box>
        <FormControl sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} fullWidth>
          
          <Select
            
            onChange={(e)=>{handleUsuario(e)}}
            displayEmpty
          >
            {user.map((users, index) => {
              return (<MenuItem key={index} value={users?.correo}>{users?.nombre}</MenuItem>)
            })}
          </Select>
        </FormControl>

        <Button onClick={()=>{addService(postInput.titulo, postInput.fileImg, postInput.fechayhora, postInput.linksesion, postInput.precio, postInput.usuario)}} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Agregar servicio</Button>
      </Card>
    </Grid>
  )
}

export default PayItemAddService