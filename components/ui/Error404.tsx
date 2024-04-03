import { Box, Typography } from '@mui/material'

const Error404 = () => {
  return (
    <Box sx={{flexDirection:{xs:'column', sm:'row'}}} display="flex" justifyContent="center" alignItems="center" height="calc(100vh - 200px)">
    <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>404 |</Typography>
    <Typography marginLeft={2}>No encontramos ninguna pagina aquí</Typography>
  </Box>
  )
}

export default Error404