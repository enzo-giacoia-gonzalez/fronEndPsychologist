import { Grid, Card, Typography, Button, Input, Box, Select, FormControl, MenuItem, InputLabel, SelectChangeEvent } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles';
import { useContext, useState } from 'react';
import { ServiceContext } from '../../context/services';
import React from 'react';


const PayItemAddService = () => {

  const { getResults, user, getUserByMail, userByMail, addService } = useContext(ServiceContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })

  const [postInput, setPostInput] = useState({ titulo: '', fileImg: '', fechayhora: '', linksesion: '', precio: 0, moneda:'', usuario: '' })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearch = (e: any) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };

  const handleTitle = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      titulo: e.target.value,
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImg = (e: any) => {
    setPostInput({
      ...postInput,
      fileImg: e.target.files[0],
    });
  }

  const handleTime = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      fechayhora: e.target.value,
    });
  }

  const handleLinkSesion = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      linksesion: e.target.value,
    });
  }

  const handlePagoSesion = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      precio: e.target.value as unknown as number,
    });
  }


  
  const handleUsuario = (e: SelectChangeEvent<unknown>) => {

    const email = e.target.value as unknown as string 
    getUserByMail (email)
  }


  postInput.usuario = userByMail?.uid
  console.log(postInput.usuario)



  

  const handleMoneda = (e: SelectChangeEvent) => {
    setPostInput({
      ...postInput,
      moneda: e.target.value,
    });
  };

  




  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
    
  });




  


  return (
    <Grid item xs>
      <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
        <Typography variant='h5' sx={{ marginBottom: 3 }}>Asignar una nueva sesion</Typography>
        <Input onChange={(e) => { handleTitle(e) }} placeholder='Titulo' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='titulo' type='text'></Input>
        <Button onChange={(e)=>{handleImg(e)}} sx={{bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }, width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Upload file <VisuallyHiddenInput type="file" /></Button>
        <Input onChange={(e) => { handleTime(e) }} placeholder='Hora y dia de la sesion' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='fechayhora' type='datetime-local'></Input>
        <Input onChange={(e) => { handleLinkSesion(e) }} placeholder='Link de la sesion' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='linksesion' type='text'></Input>
        <Input onChange={(e) => { handlePagoSesion(e) }} placeholder='Precio de la sesion' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='precio' type='text'></Input>
        <FormControl fullWidth sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}>
        <InputLabel id="demo-simple-select-label">MONEDA</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postInput.moneda}
          label="MONEDA"
          onChange={handleMoneda}
        >
          <MenuItem value={"ARG"}>ARG</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
        </Select>
      </FormControl>
        <Box display="flex" marginBottom="15px">
          <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Nombre del usuario' sx={{ marginRight: '8px', width: '60%' }}></Input><Button onClick={() => { getResults(searchInput.search) }} sx={{ width: '40%', borderRadius: "4px", border: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar usuario</Button>
        </Box>
        <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>

          <Select

            onChange={(e) => { handleUsuario(e) }}
            displayEmpty
          >
            {user.map((users, index) => {
              return (<MenuItem key={index} value={users?.correo}>{users?.nombre + " " + users?.apellido + " " + users?.dni}</MenuItem>)
            })}
          </Select>
        </FormControl>

        <Button onClick={() => { addService(postInput.titulo, postInput.fileImg, postInput.fechayhora, postInput.linksesion, postInput.precio, postInput.moneda, postInput.usuario) }} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Agregar servicio</Button>
      </Card>
    </Grid>
  )
}

export default PayItemAddService