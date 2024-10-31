import { Button, Card, CardMedia, Grid, Typography } from "@mui/material"
import img from "../../img/sanamente.png"
import { useContext, useEffect } from "react"
import { ReceiptContext } from "../../context/receipts"



const MyCourses = () => {

    const usuarioId = localStorage.getItem("usuario")

    const {getUserAll, allUsers} = useContext(ReceiptContext)

    useEffect(() => {
        getUserAll()
    }, [])
    
    console.log(allUsers)

    const findUser = allUsers.filter((user)=>user.uid==usuarioId)

    console.log(findUser)
  return (
    <Grid container py={5} height="100vh">
        <Grid container bgcolor="#F5F5F5" py={7} maxHeight="180px">
        <Grid item xs={12} display="flex" sx={{paddingLeft:{xs:2,sm:20}}}>
            <Typography marginRight={1} variant="h4">Hola de nuevo</Typography>
            <Typography color="#6F2279" variant="h4">{findUser[0]?.nombre}</Typography>
        </Grid>
        </Grid>
        <Grid container py={9} px={2}>
            <Grid item xs={12} md={12} marginLeft={15} display="flex" sx={{marginLeft:{sm:'0px', md:15}, justifyContent:{xs:'center',md:''}}}>
                <Card sx={{ display:"flex", alignItems:'center', maxWidth:{xs:'400px', md:'600px'}, maxHeight:{xs:'200px',md:'120px'}}}>
                    <Grid item xs={6}>
                    <CardMedia
                     component="img"
                     height="180px"
                     image={img}
                    >
                    </CardMedia>
                    </Grid>
                    <Grid item xs={6} md={12} display="flex" flexDirection="column" alignItems="start" sx={{marginLeft:{xs:0,sm:15}}}>
                        <Typography mb={2}>Herramientas para vos</Typography>
                        <Button href='/CourseProgram' sx={{bgcolor:'#C1A6CF', color:'black', ":hover": { bgcolor: "#6F2279", color:'white' }}}>Ir a los videos</Button>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    </Grid>
  )
}

export default MyCourses