import { Box, Button, Drawer, List, ListItem} from "@mui/material";
import { useContext } from "react";
import { UiContext } from '../../context/ui/UiContext';
import { AuthContext } from "../../context/auth";


const SideMenu = () => {

  const {logout} = useContext(AuthContext)

  const {SideMenuOpen, toogleSideMenu} = useContext(UiContext)
  return (
    <Drawer
      anchor="right"
      open={SideMenuOpen}
      onClose={toogleSideMenu}
    >
      <Box width="300px">
        <List>
        <ListItem sx={{display:{xs:'flex', md:'none'}}}>
            <Button href="/" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Inicio</Button>
          </ListItem>
          <ListItem>
            <Button href="/CourseProgram" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Ir al curso</Button>
          </ListItem>

          <ListItem>
          <Button href="/Login" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Iniciar sesion</Button>
          </ListItem>

          <ListItem>
            <Button href="/Register" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Registrarse</Button>
          </ListItem>

          <ListItem sx={{display:{xs:'flex', md:'none'}}}>
            <Button href="/PsychologySessions" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Sesiones</Button>
          </ListItem>

          <ListItem>
            <Button href="/MyCourses" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Mis videos / modificar / eliminar </Button>
          </ListItem>
          
          <ListItem>
            <Button href="/Classes/AddVideos" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Agregar videos</Button>
          </ListItem>

          <ListItem>
            <Button href="/ReceiptPayment" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Agregar comprobante de pago</Button>
          </ListItem>

          <ListItem>
            <Button href="/PayItemService" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Asignar turnos</Button>
          </ListItem>

          <ListItem>
            <Button href="/UserList" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}}>Buscar pacientes</Button>
          </ListItem>

          <ListItem>
            <Button href="/PatientCalendar" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}}>Calendario de pacientes</Button>
          </ListItem>

          <ListItem>
            <Button href="/HistorialPaymentAdmin" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}}>Historial de pagos</Button>
          </ListItem>

          <ListItem>
            <Button href="/HistorialPaymentUser" sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' }}}>Historial de pagos</Button>
          </ListItem>

          <ListItem>
          <Button onClick={logout} sx={{color: 'black', ":hover": { bgcolor: "#BAA0C8", color:'white' } }}>Cerrar sesion</Button>
          </ListItem>
        </List>
      </Box>

    </Drawer>
  )
}

export default SideMenu