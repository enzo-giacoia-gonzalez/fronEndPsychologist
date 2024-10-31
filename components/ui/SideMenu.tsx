import { Box, Button, Drawer, List, ListItem, Typography } from "@mui/material";
import { useContext } from "react";
import { UiContext } from '../../context/ui/UiContext';
import { AuthContext } from "../../context/auth";


const SideMenu = () => {

  
  const rol = localStorage.getItem("rol")
  const token = localStorage.getItem("token")

  const { logout } = useContext(AuthContext)

  const { SideMenuOpen, toogleSideMenu } = useContext(UiContext)
  return (
    <Drawer
      anchor="right"
      open={SideMenuOpen}
      onClose={toogleSideMenu}
    >
      <Box width="300px">
        <List>
          <ListItem sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button href="/" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Inicio</Button>
          </ListItem>

          {
            token && rol == "PATIENT_ROLE" ?
              <ListItem>
                <Button href="/CourseProgram" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Ir al curso</Button>
              </ListItem> : ""}

          {!token ?
            <ListItem>
              <Button href="/Login" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Iniciar sesion</Button>
            </ListItem> : ""}

          {!token ?
            <ListItem>
              <Button href="/Register" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Registrarse</Button>
            </ListItem>:""}

          {rol == "USER_ROLE" || rol == "PATIENT_ROLE" && token ? <ListItem sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button href="/PsychologySessions" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Sesiones</Button>
          </ListItem> : ""}

          {token && rol == "PATIENT_ROLE" || rol=="ADMIN_ROLE" ?
            <ListItem>
              <Button href="/MyCourses" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>{rol=="PATIENT_ROLE"?<Typography variant="subtitle2">Mis videos</Typography>:<Typography variant="subtitle2">Mis videos / Modificar / Eliminar videos</Typography>}</Button>
            </ListItem> : ""}

          {rol=="ADMIN_ROLE" && token?<ListItem>
            <Button href="/Classes/AddVideos" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Agregar videos</Button>
          </ListItem>:""}

          {rol=="ADMIN_ROLE" && token?<ListItem>
            <Button href="/ReceiptPayment" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Eliminar comprobante de pago</Button>
          </ListItem>:""}

          {rol=="ADMIN_ROLE" && token?<ListItem>
            <Button href="/PayItemService" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Asignar turnos</Button>
          </ListItem>:""}

          {rol=="ADMIN_ROLE" && token?<ListItem>
            <Button href="/UserList" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Buscar pacientes</Button>
          </ListItem>:""}

          {rol=="ADMIN_ROLE" && token?<ListItem>
            <Button href="/PatientCalendar" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Calendario de pacientes</Button>
          </ListItem>:""}

          {rol=="ADMIN_ROLE" && token?<ListItem>
            <Button href="/HistorialPaymentAdmin" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Historial de pagos</Button>
          </ListItem>:""}

          {rol==="USER_ROLE" || rol==="PATIENT_ROLE" && token?<ListItem>
            <Button href="/HistorialPaymentUser" sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Historial de pagos</Button>
          </ListItem>:""}

          {token?<ListItem>
            <Button onClick={logout} sx={{ color: 'black', ":hover": { bgcolor: "#BAA0C8", color: 'white' } }}>Cerrar sesion</Button>
          </ListItem>:""}
        </List>
      </Box>

    </Drawer>
  )
}

export default SideMenu