import { useContext } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { UiContext } from '../../context/ui'
import { Button, Card, Grid } from '@mui/material'





const CourseProgramVideo = () => {
  const { ShowVideoOpenSrc, ShowVideoOpen, ShowVideoOpenExchange } = useContext(UiContext)

  const backToCourse = () => {
    location.replace('/CourseProgram')
}



  return (
    <Grid>
      <Grid item display="flex" flexDirection="column" px={2} alignItems="center">
        {(ShowVideoOpen === false && ShowVideoOpenExchange === true && ShowVideoOpenSrc) ?
          <Card sx={{width: "auto" , display:"flex", flexDirection:"column" , alignItems:"end"}}>
            <Button onClick={()=>{backToCourse()}} ><ArrowBackIcon/></Button>
            <video
              security=''
              controls
              poster={""}
            >
              <source
                src={ShowVideoOpenSrc}
                type=""
              />
            </video>
          </Card>
          : ""}
      </Grid>

      <Grid item display="flex" flexDirection="column" px={2}>
        {(ShowVideoOpen === true && ShowVideoOpenExchange === false && ShowVideoOpenSrc) ?
          <Card sx={{ width: "auto" , display:"flex", flexDirection:"column" , alignItems:"end"} } >
            <Button onClick={()=>{backToCourse()}}><ArrowBackIcon/></Button>
            <video
              security=''
              controls
              poster={""}
            >
              <source
                src={ShowVideoOpenSrc}
                type=""
              />
            </video>
          </Card> : ""}
      </Grid>
    </Grid>
  )
}

export default CourseProgramVideo