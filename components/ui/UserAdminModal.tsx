import { Modal, Box, Typography, Button } from '@mui/material'
import { useContext } from 'react'
import { UiContext } from '../../context/ui/UiContext';
import { SearchContext } from '../../context/searchUser';



const UserAdminModal = () => {
    const {ShowModalUser, toogleModalUser} = useContext(UiContext)

    const { userByMail, changeRole, deleteUser } = useContext(SearchContext)

    console.log(userByMail)
  return (
    <Modal
                    keepMounted
                    open={ShowModalUser}
                    onClose={()=>(toogleModalUser(false))}
                    aria-labelledby="keep-mounted-modal-title"
                    aria-describedby="keep-mounted-modal-description"
                >
                    <Box sx={{
                        
                        position: 'absolute' as const,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width:{xs:300, sm:400},
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4,
                    }}>
                        <Typography pl={1} id="keep-mounted-modal-title" variant="h6" component="h2">
                            Configuraciones de usuario
                        </Typography>
                        <Button onClick={()=>{changeRole('ADMIN_ROLE',userByMail?.uid ), toogleModalUser(false)}} sx={{color:'black'}}>Admin</Button>
                        <Button onClick={()=>{changeRole('PATIENT_ROLE',userByMail?.uid ), toogleModalUser(false)}} sx={{color:'black'}}>Paciente</Button>
                        <Button onClick={()=>{changeRole('USER_ROLE',userByMail?.uid ), toogleModalUser(false)}} sx={{color:'black'}}>Usuario</Button>
                        <Button onClick={()=>{deleteUser(userByMail?.uid), toogleModalUser(false)}} sx={{color:'black'}}>Desactivar usuario</Button>
                    </Box>
                </Modal>
  )
}

export default UserAdminModal