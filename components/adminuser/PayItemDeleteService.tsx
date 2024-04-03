import { Grid, Card, Typography, Button, Input, Box, FormControl, MenuItem, Select } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { ServiceContext } from '../../context/services';




const PayItemDeleteService = () => {

  const { getResultsShift, userWithShift, getShiftById, shiftById, getUserById, deleteService} = useContext(ServiceContext)

  const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })
  

  useEffect(() => {
    
   
    getUserById(shiftById?.usuario)

}, [shiftById])



 
  const handleSearch = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setSearchInput({
      ...searchInput,
      search: e.target.value,
    });
  };
  

// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleShift= (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const shiftId = e.target.value
    getShiftById(shiftId)
}















  return (
    <Grid item xs>
    <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
    <Typography variant='h5' sx={{marginBottom:3}}>Borrar una sesion</Typography>
    <Box display="flex">
    <Input  onChange={(e) => {
            handleSearch(e);
          }} placeholder='Buscar seccion' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResultsShift(searchInput.search) }} sx={{borderRadius:"4px", border:1, marginBottom:"15px" ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Buscar</Button>
    </Box>
    <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>
          
          <Select
            
            onChange={(e)=>{handleShift(e)}}
            displayEmpty
          >
            {userWithShift.map((users, index) => {
              return (<MenuItem key={index} value={users?._id}>{users?.titulo}</MenuItem>)
            })}
          </Select>
        </FormControl>
        
    
        
      <Button onClick={()=>{deleteService(shiftById?._id)}} sx={{ borderRadius: "4px", border: 1, marginBottom: 1, bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Eliminar servicio</Button>
    </Card>
    </Grid>
  )
}

export default PayItemDeleteService