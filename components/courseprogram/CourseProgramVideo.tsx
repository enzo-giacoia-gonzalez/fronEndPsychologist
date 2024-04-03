import { useContext } from 'react';
import { UiContext } from '../../context/ui'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { Box, Button, Card, Grid } from '@mui/material'





const CourseProgramVideo = () => {
  const { ShowVideoOpenSrc, ShowVideoOpen, ShowVideoOpenExchange, toogleChangeVideoImg, ShowFiles, ShowImageOpenSrc } = useContext(UiContext)

  const backToCourse = () => {
    location.replace('/CourseProgram')
}




  return (
    <Grid>
      <Grid item display="flex" flexDirection="column" px={2} alignItems="center">
        {(ShowVideoOpen === false && ShowVideoOpenExchange === true && ShowVideoOpenSrc) ?
          <Card sx={{width: "auto" , display:"flex", flexDirection:"column" , alignItems:"end"}}>
            <Box display="flex">
            <Button onClick={()=>{backToCourse()}} ><ArrowBackIcon/></Button>
            <Button onClick={()=>{toogleChangeVideoImg()}}><ChangeCircleIcon/></Button>
            </Box>
            {ShowFiles===true && ShowImageOpenSrc?<img
            src={ShowImageOpenSrc}
            alt=''
            />
              
              :<video
              security=''
              controls
              poster={""}
            >
                <source
                src={ShowVideoOpenSrc}
                type=""
              />
            </video>}
          </Card>
          : ""}
      </Grid>

      <Grid item display="flex" flexDirection="column" px={2}>
        {(ShowVideoOpen === true && ShowVideoOpenExchange === false && ShowVideoOpenSrc) ?
          <Card sx={{ width: "auto" , display:"flex", flexDirection:"column" , alignItems:"end"} } >
            <Box display="flex">
            <Button onClick={()=>{backToCourse()}}><ArrowBackIcon/></Button>
            <Button onClick={()=>{toogleChangeVideoImg()}}><ChangeCircleIcon/></Button>
            </Box>
            {ShowFiles===true && ShowImageOpenSrc?<img
            src={ShowImageOpenSrc}
            
            />:<video
              security=''
              controls
              poster={""}
            >
                <source
                src={ShowVideoOpenSrc}
                type=""
              />
            </video>}
          </Card> : ""}
      </Grid>
    </Grid>
  )
}

export default CourseProgramVideo