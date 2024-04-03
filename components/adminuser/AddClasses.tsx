
import { useState, useContext, } from 'react';
import { VideoContext } from '../../context/video/VideoContext';
import { Button, Card, Grid, Input, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles';


const AddClasses = () => {

  const {addVideo} = useContext(VideoContext)
  const [input, setInput] = useState({img:'', video:'' ,title:'' })

  const handleTitle = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInput({
      ...input,
      title:e.target.value
    })
  }

  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImg = (e:any) => {
    setInput({
      ...input,
      img:e.target.files[0]
  })}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleVideo = (e:any) => {
    setInput({
      ...input,
      video:e.target.files[0]
  })}
  
  

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

    <Grid container padding={28}>
      <Grid item xs display="flex" justifyContent="center" paddingX={5} alignItems="center" >
        <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
        <Typography sx={{marginBottom:1}}>Agregar archivos</Typography>
        <Input onChange={(e)=>handleTitle(e)} placeholder='Titulo del video' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name='title' type='text'></Input>
        <Button onChange={(e)=>{handleImg(e)}} sx={{bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }, width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Subir imagen <VisuallyHiddenInput type="file" /></Button>
        <Button onChange={(e)=>{handleVideo(e)}} sx={{bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }, width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Subir video <VisuallyHiddenInput type="file" /></Button>
          <Button fullWidth onClick={()=>{addVideo(input.title,input.img, input.video)}} sx={{marginRight:5, borderRadius:1, border:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Subir archivos</Button>
        </Card>
        </Grid>
    </Grid>
  )
}

export default AddClasses