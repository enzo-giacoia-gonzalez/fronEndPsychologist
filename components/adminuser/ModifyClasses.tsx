
import { useContext, useEffect, useState } from "react"
import { VideoContext } from '../../context/video/VideoContext';
import { Button, Card, Grid, Input, Typography } from "@mui/material"
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { styled } from '@mui/material/styles';




const ModifyClasses = () => {

  const {responseVideo, goToEdit, editVideo} = useContext(VideoContext)

  const [input, setInput] = useState({nombre:'', img:'', video:''})

 

  useEffect(() => {
    input.nombre=''
    input.nombre=responseVideo?.nombre
   const videoId = localStorage.getItem("videoId")
   goToEdit(videoId || "")
  }, [responseVideo?.nombre])

 
 
  

  const handleName = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInput({
      ...input,
      nombre:e.target.value,
    })
  }
  console.log(input.nombre)

  
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
    <Grid container padding={28} alignItems="center">
      <Grid item xs display="flex" justifyContent="center" alignItems="center">
        <Card sx={{p:8 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
        <Typography sx={{marginBottom:1}}>Modificar Video</Typography>
        <Input value={responseVideo?.nombre} readOnly sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} name="name" type='text'></Input>
        <Input onChange={(e)=>handleName(e)} value={input.nombre===""?responseVideo?.nombre:input.nombre} placeholder="Editar titulo del video" name="name" sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} type='text'></Input>
        <Button onChange={(e)=>{handleImg(e)}} sx={{bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }, width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Subir imagen <VisuallyHiddenInput type="file" /></Button>
        <Button onChange={(e)=>{handleVideo(e)}} sx={{bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' }, width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<CloudUploadIcon />}>Subir video <VisuallyHiddenInput type="file" /></Button>
          <Button fullWidth onClick={()=>{editVideo(input.nombre, input.img,input.video)}} sx={{marginRight:5, border:1, borderRadius:1 , bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Modificar Video</Button>
        </Card>
        </Grid>
    </Grid>
  )
}

export default ModifyClasses