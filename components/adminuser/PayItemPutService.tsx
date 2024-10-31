import {  useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../context/services';
import React from 'react';
import { ReceiptContext } from '../../context/receipts';
import { Grid, Card, Typography, Button, Input, Box, FormControl, MenuItem, Select, InputLabel, SelectChangeEvent, styled } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'







const PayItemPutService = () => {

  const { getResultsShift, userWithShift, getShiftById, shiftById, dataShift, getResults, getUserByMail, getUserById, userByMail, userById, user, putService } = useContext(ServiceContext)

  const { addReceipt, putReceipt, getReceipts, receiptAll } = useContext(ReceiptContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })

  const [searchInputUser, setSearchInputUser] = useState({ categoriaUser: '', searchUser: '' })

  const [postInput, setPostInput] = useState({ titulo: '', fileImg: '', fechayhora: '', linksesion: '', precio: 0, pago: "", moneda: "", usuario: "", idUsuario: '' })


  console.log(shiftById?._id)

  useEffect(() => {

    setPostInput({
      ...postInput,
      usuario: "",
      idUsuario: "",
      linksesion: '',
      precio: 0,
      pago: "",
      moneda: "",
      fechayhora: '',

    })
    getUserById(shiftById?.usuario)
    getReceipts()

    console.log(user)


  }, [shiftById])


  if ( postInput.fechayhora === '' || postInput.pago === "" || postInput.moneda === "") {
    postInput.linksesion = shiftById?.linksesion
    postInput.precio = shiftById?.precio
    postInput.pago = shiftById?.pago
    postInput.moneda = shiftById?.moneda
    postInput.titulo = shiftById?.titulo
    postInput.fechayhora = shiftById?.fechayhora
  }
  userByMail?.uid ? postInput.idUsuario = userByMail?.uid : postInput.idUsuario = shiftById?.usuario



  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShift = (e: any) => {
    const shiftId = e.target.value
    setPostInput({
      ...postInput,
      titulo: '',
    })
    getShiftById(shiftId)
  }


  
  const handleSearch = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImg = (e: any) => {
    setPostInput({
      ...postInput,
      fileImg: e.target.files[0],
    });
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
      precio: e.target.value as unknown as number
    })
  }


  const handleMoneda = (event: SelectChangeEvent) => {
    setPostInput({
      ...postInput,
      moneda: event.target.value as string
    })
  };

  


  const handleAprobado = (event: SelectChangeEvent) => {
    setPostInput({
      ...postInput,
      pago: event.target.value as string
    })
  };




  const handleSearchUsuario = (e: SelectChangeEvent) => {

    console.log(e.target.value)

    setPostInput({
      ...postInput,
      usuario: e.target.value
    })
  
    getUserByMail(e.target.value)
  }


   
   const handleSearchUser = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInputUser({
      ...searchInputUser,
      searchUser: e.target.value,
    });
  };



  const comprobanteId = receiptAll.filter((comprobante)=>comprobante.usuario===shiftById?.usuario )

  
 


  useEffect(() => {
    if (shiftById?.pago === "RECHAZADO") {
      if (dataShift?.pago === "APROBADO") {
        addReceipt(postInput.titulo, postInput.fechayhora, postInput.linksesion, postInput.precio, postInput.pago, postInput.moneda, postInput.idUsuario)
        
      }
    }

    if (shiftById?.pago === "APROBADO") {
   
        putReceipt(postInput.titulo, postInput.fechayhora, postInput.precio, postInput.pago, postInput.moneda, postInput.idUsuario, comprobanteId[0]?._id)
        
      
    }
    

  }, [dataShift?.pago])






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
      <Card sx={{ p: 2, marginBottom: 15, display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
        <Typography variant='h5' sx={{ marginBottom: 3 }}>Editar una nueva sesion</Typography>
        <Box display="flex">
          <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Buscar seccion' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth></Input><Button onClick={() => { getResultsShift(searchInput.search) }} sx={{ borderRadius: "4px", border: 1, marginBottom: "15px", bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar</Button>
        </Box>
        <FormControl variant='standard' sx={{ width: '100%', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} >

          <Select

            onChange={(e) => { handleShift(e) }}
            displayEmpty
          >
            {userWithShift.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.titulo + " " + users?.fechayhora}</MenuItem>)
            })}
          </Select>
        </FormControl>

        <Input onChange={(e) => { handleTitle(e) }} placeholder='Titulo' value={postInput.titulo === undefined ? shiftById?.titulo : postInput.titulo} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='titulo' type='text'></Input>
        <Input onChange={(e) => { handleTime(e) }} placeholder='Hora y dia de la sesion' value={postInput.fechayhora === undefined ? shiftById?.fechayhora : postInput.fechayhora} name='fechayhora' type='datetime-local'></Input>
        <Button onChange={(e) => { handleImg(e) }} sx={{ bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }, width: '100%', border: 1, borderColor: 'white', marginTop: "15px", borderRadius: "4px", marginRight: '5px' }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Upload file <VisuallyHiddenInput type="file" /></Button>

        <Input onChange={(e) => { handleSesion(e) }} placeholder='Link de la sesion' value={postInput.linksesion === undefined ? shiftById?.linksesion : postInput.linksesion} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px', marginTop: "15px" }} name='linksesion' type='text'></Input>
        {shiftById?.pago === "RECHAZADO" ? <Input onChange={(e) => { handlePrecio(e) }} placeholder='Precio de la sesion' value={postInput.precio === undefined ? shiftById?.precio : postInput.precio} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='precio' type='text'></Input> : <Input onChange={(e) => { handlePrecio(e) }} placeholder='Precio de la sesion' value={postInput.precio === undefined ? shiftById?.precio : postInput.precio} sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} readOnly name='precio' type='text'></Input>}




        <FormControl fullWidth sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}>
          <InputLabel id="demo-simple-select-label">{postInput.moneda}</InputLabel>
          {shiftById?.pago === "RECHAZADO" && postInput.pago==="RECHAZADO"? <Select

            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={postInput.moneda}
            label="moneda"
            onChange={handleMoneda}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"ARG"}>ARG</MenuItem>
          </Select> :
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={postInput.moneda}
              label="moneda"
              onChange={handleMoneda}

            >
              <MenuItem value={postInput.moneda}>{postInput.moneda}</MenuItem>
            </Select>}
        </FormControl>




        <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} >
          <InputLabel id="demo-simple-select-labelll">{postInput.pago}</InputLabel>
          {shiftById?.pago === "RECHAZADO" && shiftById?.moneda != "USD"  && postInput.moneda!="USD" ? <Select
            labelId="demo-simple-select-labelll"
            id="demo-simple-selecttt"
            value={postInput.pago}
            label="Age"
            onChange={handleAprobado}
          >
            <MenuItem value={"APROBADO"}>APROBADO</MenuItem>
            <MenuItem value={"RECHAZADO"}>RECHAZADO</MenuItem>
          </Select> :

            <Select
              labelId="demo-simple-select-labelll"
              id="demo-simple-selecttt"
              readOnly
              value={postInput.pago}
              label="Age"
              onChange={handleAprobado}
            >
              <MenuItem value={postInput.pago}>{postInput.pago}</MenuItem>
            </Select>}
        </FormControl>


        <Box display="flex">
          <Input onChange={(e) => {
            handleSearchUser(e);
          }} placeholder='Buscar usuario a cambiar' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResults(searchInputUser.searchUser) }} sx={{ borderRadius: "4px", border: 1, marginBottom: "15px", bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar</Button>
        </Box>




        <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}>

          <InputLabel id="usuarioname">{postInput.usuario === "" ? userById?.nombre : postInput.usuario}</InputLabel>

          {shiftById?.pago === "RECHAZADO" ? <Select
            labelId="usuarioname"
            id="usuario"
            label="usuariook"
            onChange={handleSearchUsuario}
            displayEmpty
            value={postInput.usuario === "" ? userById?.nombre : postInput.usuario}
          >



            {user.map((users, index) => {
              return (<MenuItem key={index} value={users?.correo}>{users?.nombre + " "+ users?.apellido + " " + users?.dni}</MenuItem>)
            })}


          </Select> : <Select
            labelId="usuarioname"
            id="usuario"
            label="usuariook"
            onChange={handleSearchUsuario}
            displayEmpty
            readOnly
            value={postInput.usuario === "" ? userById?.nombre : postInput.usuario}
          >




            <MenuItem value={postInput.usuario}>{postInput.usuario}</MenuItem>



          </Select>}
        </FormControl>

        <Button onClick={() => { putService(postInput.titulo, postInput.fileImg, postInput.fechayhora, postInput.linksesion, postInput.precio, postInput.pago, postInput.moneda, postInput.idUsuario, shiftById?._id) }} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Agregar servicio</Button>
      </Card>
    </Grid>
  )
}

export default PayItemPutService