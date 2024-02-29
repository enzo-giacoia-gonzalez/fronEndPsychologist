
import { Box, Button, Card, CardMedia, Grid, Link, Typography } from '@mui/material'
import {  CheckCircleOutline, HorizontalRuleOutlined} from '@mui/icons-material'
import { UiContext } from '../../context/ui'
import img from "../../img/sanamente.png"

import { VideoContext } from '../../context/video/VideoContext';
import { useContext } from 'react';
import CourseProgramList from './CourseProgramList';
import CourseProgramVideo from './CourseProgramVideo';






const CourseProgram = () => {

 


    const {responseVideos} = useContext(VideoContext)
  
   
    console.log(responseVideos)

  
    
 
    const { ShowBorderOn, toogleShowBorderOn, toogleModalComments, showCourseProgram ,ShowVideoOpen, ShowVideoOpenExchange, ShowVideoOpenSrc } = useContext(UiContext)


    // eslint-disable-next-line no-global-assign
    
    return (
        <Grid container boxSizing="border-box" minHeight="100%" sx={{scrollMarginTop:ShowVideoOpen === false && ShowVideoOpenExchange === true && ShowVideoOpenSrc || ShowVideoOpen === true && ShowVideoOpenExchange === false && ShowVideoOpenSrc?"100vh":""}}>
            

<Grid bgcolor="#FFFFFF" container display="flex" sx={{flexDirection: { xs: 'column', sm: 'row', md: 'row' }, alignItems: { xs: 'start', sm: 'start', md:ShowVideoOpen === false && ShowVideoOpenExchange === true && ShowVideoOpenSrc || ShowVideoOpen === true && ShowVideoOpenExchange === false && ShowVideoOpenSrc?"center":"start" }, justifyContent: { xs: 'start', sm: 'space-between', md: ShowVideoOpen === false && ShowVideoOpenExchange === true && ShowVideoOpenSrc || ShowVideoOpen === true && ShowVideoOpenExchange === false && ShowVideoOpenSrc?"center":"space-between" } }} boxShadow={1} py="20px">
{(showCourseProgram===true?
<Grid container >
<Grid item xs={12} sm={3} md={3} lg={3} display="flex" flexDirection="column" ml="30px" mr="30px" px={2}>
    <Link href="/MyCourses" color="#6F2279" underline='always'>Regresar a mis cursos</Link>
    <CardMedia
        component="img"
        sx={{ width: '680px', display: { xs: 'flex', sm: 'none', md: 'none' }, marginBottom: 2 }}
        image={img}
    />
    <Typography mb="10px" variant='h4'>On Off</Typography>
    <Typography mb="10px">50% completado</Typography>
    <Typography mb="10px" textAlign="justify"><Button sx={{ bgcolor: '#C1A6CF', color: 'black', ":hover": { bgcolor: "#6F2279", color: 'white' }, width: { xs: '100%', sm: '100%', md: '100%', lg: 'auto' } }}>Continua con los videos</Button></Typography>
    <Typography variant='subtitle1'><Link color="#6F2279" underline='always' component="button" onClick={()=>{toogleModalComments(true)}}>¿Que tal te resultan los videos?</Link></Typography>

</Grid>

<Grid item xs={12} sm={7} md={8} display="flex" flexDirection="column" alignItems="center" px={2}>
    <CardMedia
        component="img"
        sx={{ width: '680px', display: { xs: 'none', sm: 'flex', md: 'flex' } }}
        image={img}
    />

</Grid>
</Grid>:<CourseProgramVideo />)}



</Grid>

<Grid bgcolor="#F5F5F5" container display="flex" alignItems="center" sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'column' } }}>
                <Grid item xs={12} sm={3} md={4} display="flex" justifyContent="end" sx={{ flexDirection: { xs: 'row', sm: 'row', md: 'row' }, borderTopColor: ShowBorderOn == false ? '#C1A6CF' : "", borderTopWidth: ShowBorderOn == false ? "4px" : "" }} >
                    <Button onClick={() => (toogleShowBorderOn(false))} sx={{ color: 'black' }}>Herramientas</Button>
                </Grid>
                <Grid item xs={12} sm={7} md={7} display="flex" justifyContent="center" sx={{ flexDirection: { xs: 'row', sm: 'row', md: 'row' }, borderTopColor: ShowBorderOn == true ? '#C1A6CF' : "", borderTopWidth: ShowBorderOn == true ? "4px" : "" }}>
                    <Button onClick={() => (toogleShowBorderOn(true))} sx={{ color: 'black' }}>Sobre las herramientas</Button>
                </Grid>
            </Grid>
            
             {(ShowBorderOn===false?<Grid bgcolor="#F5F5F5" container display="flex" sx={{ flexDirection: { xs: 'column', sm: 'row', md: 'row' }, alignItems: { xs: 'center', sm: 'center', md: 'center' }, justifyContent: { xs: 'start', sm: 'center', md: 'center' } }} boxShadow={1}>
                

             <Grid item xs display="flex" flexDirection="column" bgcolor="#F5F5F5" px="10px">
                        <Typography variant='h5' textAlign="start">Herramientas de auto ayuda</Typography>
                    </Grid>
            
                    {responseVideos?.map((videos, index)  => (
            <CourseProgramList key={index} videos={videos}></CourseProgramList>
        ))}
            </Grid>:"")}


                


          




            


                {(ShowBorderOn===true?<Grid container bgcolor="#F5F5F5" pb="250px">
                    <Grid item sm={12} display="flex" justifyContent="center" sx={{ flexDirection: { xs: 'column', sm: 'row', md: 'row' } }} >
                        <Grid item sm={12} md={7} display="flex" flexDirection="column" sx={{ marginRight: { xs: '15px', sm: "30px" }, marginLeft: { xs: '15px', sm: "15px", md: '0px' }, marginBottom: { xs: '20px', sm: '0px' } }}>
                            <Typography variant='h4' mb="20px">Con estas herramientas podras</Typography>
                            <Card sx={{ display: 'flex', flexDirection: 'row', width: '100%', py: '20px', px: '10px' }}>
                                <CheckCircleOutline />
                                <Typography variant='body1'>Vas a lograr: Aprender a manejar los problemas del dia a dia de una manera muy efectiva</Typography>
                            </Card>
                        </Grid>
                        <Grid item sm={12} md={3} sx={{ marginRight: { xs: '15px', sm: "0px" }, marginLeft: { xs: '15px', sm: "0px" } }}>
                            <Typography variant='h6' mb="20px">Requerimientos</Typography>
                            <Box display="flex">
                                <HorizontalRuleOutlined />
                                <Typography variant='subtitle1'>Una compu, notebook, tablet o celu con conexión a internet</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>:"")}

        </Grid>
    )
}

export default CourseProgram