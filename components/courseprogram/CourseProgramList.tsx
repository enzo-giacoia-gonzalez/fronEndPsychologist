


import {FC, useContext } from 'react'
import { UiContext } from '../../context/ui/UiContext';
import { Button, Card, Grid, Typography } from '@mui/material'
import { PlayArrowOutlined } from '@mui/icons-material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { VideoContext } from '../../context/video';
import { responseVideo } from '../../Interfaces/video';





interface Props {
    videos:responseVideo
}






const CourseProgramList:FC<Props> = ({videos}) => {

    
    const {toogleShowVideo, toogleShowVideoSrc, toogleShowVideoExchange, toogleShowCourseProgram, toogleShowImageSrc} = useContext(UiContext)
    const {removeVideo, getIdVideo} = useContext(VideoContext)

    // eslint-disable-next-line prefer-const
    let video = videos._id

    

    
    

    const scrollTo = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
          });
    }


    
    
  return (
    <Grid bgcolor="#F5F5F5" container display="flex" paddingTop="40px" flexDirection="column" pb="250px">
                <Grid md={12} lg={7} display="flex" flexDirection="column" px={1}>
                    <Card sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', py: '20px', alignItems: 'center', px: '10px', height: 'auto' }}>
                        <Grid item md={4} lg={3} display="flex" alignItems="center">
                            <Button onClick={() => {scrollTo(), toogleShowVideo(),toogleShowVideoExchange(), toogleShowCourseProgram(false),toogleShowVideoSrc(videos.video) , toogleShowImageSrc(videos.img)}} sx={{color:'#C1A6CF'}}><PlayArrowOutlined></PlayArrowOutlined></Button>
                            <Typography>{videos?.nombre}</Typography>
                        </Grid>
                        <Grid item md={4} lg={2} display="flex" justifyContent="center" alignItems="center">
                            <Button onClick={()=>{getIdVideo(video)}} sx={{color:'#C1A6CF'}}><EditIcon/></Button>
                        </Grid>
                        <Grid item md={4} lg={2} display="flex" justifyContent="end" alignItems="center">
                            <Button onClick={()=>{removeVideo(videos?._id)}} sx={{color:'#C1A6CF'}}><DeleteForeverIcon /></Button>
                        </Grid> 
                    </Card>
                </Grid>
            </Grid>
  )
}

export default CourseProgramList