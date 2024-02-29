import { Grid, Card, Typography, Button, Input, Box, FormControl, MenuItem, Select, InputLabel, SelectChangeEvent } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../context/services';
import React from 'react';
import { ReceiptContext } from '../../context/receipts';




const PayItemPutService = () => {

  const { getResultsShift, userWithShift, getShiftById, shiftById, dataShift, getResults, getUserByMail, getUserById, userByMail, userById, user, putService, deleteService } = useContext(ServiceContext)

  const {addReceipt} = useContext(ReceiptContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })

  const [searchInputUser, setSearchInputUser] = useState({ categoriaUser: '', searchUser: '' })

  const [postInput, setPostInput] = useState({ titulo: undefined, fileImg: '', fechayhora: undefined, linksesion: undefined, precio: undefined, pago: "", usuario: "", idUsuario: undefined })


  console.log(shiftById?._id)

  useEffect(() => {

    setPostInput({
      ...postInput,
      usuario: "",
      idUsuario: undefined,
      linksesion: undefined,
      precio: undefined,
      pago: "",
      fechayhora: undefined,

    })
    getUserById(shiftById?.usuario)


    

  }, [shiftById])


  if (postInput.linksesion === undefined || postInput.precio === undefined || postInput.titulo === undefined || postInput.fechayhora === undefined || postInput.pago === "" || postInput.usuario === "") {
    postInput.linksesion = shiftById?.linksesion
    postInput.precio = shiftById?.precio
    postInput.pago = shiftById?.pago
    postInput.titulo = shiftById?.titulo
    postInput.fechayhora = shiftById?.fechayhora
    postInput.idUsuario = shiftById?.usuario
  }
    postInput.usuario = userById?.nombre


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
      titulo: e.target.value
    })

  }


  const handleTime = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      fechayhora: e.target.value
    })
  }

  const handleSesion = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {


    setPostInput({
      ...postInput,
      linksesion: e.target.value
    })
  }

  const handlePrecio = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setPostInput({
      ...postInput,
      precio: e.target.value
    })
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShift = (e: any) => {
    const shiftId = e.target.value
    setPostInput({
      ...postInput,
      titulo: undefined,
    })
    getShiftById(shiftId)
  }


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSearchUsuario = (e: SelectChangeEvent) => {

    setPostInput({
      ...postInput,
      usuario: e.target.value
    })
    getUserByMail(e.target.value)
  }

  console.log(userByMail)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleHiddenValue = (e: any) => {
    const id = e.target.value
    setPostInput({
      ...postInput,
      usuario: id
    })
  }



  const handleChange = (event: SelectChangeEvent) => {
    setPostInput({
      ...postInput,
      pago: event.target.value as string
    })
  };



  useEffect(() => {

    if (dataShift?.pago==="APROBADO") {
      addReceipt(postInput.titulo,postInput.fechayhora, postInput.precio, postInput.pago, postInput.idUsuario)
      deleteService(shiftById?._id)
      location.replace('/PayItemService')
    }
  }, [dataShift?.pago])
  



  return (
    <Grid item xs>
      <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
        <Typography variant='h5' sx={{ marginBottom: 3 }}>Editar una nueva sesion</Typography>
        <Box display="flex">
          <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Buscar seccion' sx={{ width: '100%', border: 1, marginBottom: 1, borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResultsShift(searchInput.search) }} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar</Button>
        </Box>
        <FormControl sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} fullWidth>

          <Select

            onChange={(e) => { handleShift(e) }}
            displayEmpty
          >
            {userWithShift.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.titulo}</MenuItem>)
            })}
          </Select>
        </FormControl>

        <Input onChange={(e) => { handleTitle(e) }} placeholder='Titulo' value={postInput.titulo === undefined ? shiftById?.titulo : postInput.titulo} sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='titulo' type='text'></Input>
        <Input placeholder='Imagen' sx={{ marginBottom: 1, borderRadius: "4px" }} type='file'></Input>
        <Input onChange={(e) => { handleTime(e) }} placeholder='Hora y dia de la sesion' value={postInput.fechayhora === undefined ? shiftById?.fechayhora : postInput.fechayhora} sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='fechayhora' type='datetime-local'></Input>
        <Input onChange={(e) => { handleSesion(e) }} placeholder='Link de la sesion' value={postInput.linksesion === undefined ? shiftById?.linksesion : postInput.linksesion} sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='linksesion' type='text'></Input>
        <Input onChange={(e) => { handlePrecio(e) }} placeholder='Precio de la sesion' value={postInput.precio === undefined ? shiftById?.precio : postInput.precio} sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} name='precio' type='text'></Input>
        <FormControl sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} fullWidth>
          <InputLabel id="demo-simple-select-label">{postInput.pago}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={postInput.pago}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"APROBADO"}>APROBADO</MenuItem>
            <MenuItem value={"RECHAZADO"}>RECHAZADO</MenuItem>
          </Select>
        </FormControl>

        <Input onChange={(e) => { handleHiddenValue(e) }} type="hidden" value={postInput.idUsuario === undefined ? userById?.uid : userByMail.uid} />
        <Box display="flex">
          <Input onChange={(e) => {
            handleSearchUser(e);
          }} placeholder='Buscar usuario a cambiar' sx={{ width: '100%', border: 1, marginBottom: 1, borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResults(searchInputUser.searchUser) }} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar</Button>
        </Box>




        <FormControl sx={{ border: 1, marginBottom: 1, borderRadius: "4px" }} fullWidth>

          <InputLabel id="usuarioname">{postInput.usuario}</InputLabel>

          <Select
            labelId="usuarioname"
            id="usuario"
            label="usuariook"
            onChange={handleSearchUsuario}
            displayEmpty
            value={postInput.usuario}
          >



            {user.map((users, index) => {
              return (<MenuItem key={index} value={users?.correo}>{users?.nombre}</MenuItem>)
            })}


          </Select>
        </FormControl>

        <Button onClick={() => { putService(postInput.titulo, postInput.fileImg, postInput.fechayhora, postInput.linksesion, postInput.precio,postInput.pago, postInput.idUsuario, shiftById?._id) }} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Agregar servicio</Button>
      </Card>
    </Grid>
  )
}

export default PayItemPutService