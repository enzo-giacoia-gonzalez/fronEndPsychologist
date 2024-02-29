
import { useContext, useEffect, useState } from "react"
import { Button, Card, Grid, Input, Typography } from "@mui/material"
import { VideoContext } from '../../context/video/VideoContext';



const ModifyClasses = () => {

  const {responseVideo, goToEdit, editVideo} = useContext(VideoContext)

  const [input, setInput] = useState({nombre:undefined, img:'', video:''})

 

  useEffect(() => {
    input.nombre===undefined
   const videoId = localStorage.getItem("videoId")
   goToEdit(videoId || "")
  }, [])

 
  if (input.nombre===undefined) {
    input.nombre=responseVideo?.nombre
  }
  

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
  

  console.log(input.nombre)

  return (
    <Grid container padding={28} alignItems="center">
      <Grid item xs display="flex" justifyContent="center" alignItems="center">
        <Card sx={{p:2 , display:'flex' , flexDirection:'column' ,justifyContent:'center'}} >
        <Typography sx={{marginBottom:1}}>Modificar Video</Typography>
        <Input value={responseVideo?.nombre} readOnly sx={{marginRight:5, border:1, marginBottom:1}} name="name" type='text'></Input>
        <Input onChange={(e)=>handleName(e)} value={input.nombre===undefined?responseVideo?.nombre:input.nombre} placeholder="Editar titulo del video" name="name" sx={{marginRight:5, border:1, marginBottom:1}} type='text'></Input>
        <Input onChange={(e)=>handleImg(e)} sx={{marginBottom:1}} id="archivo" name='archivo' type='file' placeholder='imagen'></Input>
        <Input onChange={(e)=>handleVideo(e)} sx={{marginBottom:1}} id="archivo" name='archivo' type='file'></Input>
          <Button onClick={()=>{editVideo(input.nombre, input.img,input.video)}} sx={{marginRight:5, border:1, borderRadius:1 , bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}}>Modificar Video</Button>
        </Card>
        </Grid>
    </Grid>
  )
}

export default ModifyClasses