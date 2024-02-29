import { Button, Card, Grid, Input, Typography } from '@mui/material'
import { useState, useContext, } from 'react';
import { VideoContext } from '../../context/video/VideoContext';


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
  
  



  return (

    <Grid container padding={28}>
      <Grid item xs display="flex" justifyContent="center" paddingX={5} alignItems="center" >
        <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
        <Typography sx={{marginBottom:1}}>Agregar videos</Typography>
        <Input onChange={(e)=>handleTitle(e)} placeholder='Titulo del video' sx={{marginRight:5, border:1, marginBottom:1}} name='title' type='text'></Input>
          <Input onChange={(e)=>handleImg(e)} sx={{marginBottom:1}} id="archivo" name='archivo' type='file' placeholder='imagen'></Input>
          <Input onChange={(e)=>handleVideo(e)} sx={{marginBottom:1}} id="archivo" name='archivo' type='file'></Input>
          <Button onClick={()=>{addVideo(input.title,input.img, input.video)}} sx={{marginRight:5, borderRadius:1, border:1 ,bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Agregar Videos</Button>
        </Card>
        </Grid>
    </Grid>
  )
}

export default AddClasses