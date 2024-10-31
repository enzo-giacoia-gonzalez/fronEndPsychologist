import { Modal, Box, Typography, Button, Input, Select } from '@mui/material'
import { LooksOne, LooksTwo, Looks3, Looks4, Looks5 } from '@mui/icons-material'
import { useContext } from 'react'
import { UiContext } from '../../context/ui/UiContext';




const ModalComments = () => {
    const { ShowModalComments, toogleModalComments } = useContext(UiContext)
    return (
        <Modal
            keepMounted
            open={ShowModalComments}
            onClose={() => (toogleModalComments(false))}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'star',
                position: 'absolute' as const,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: 300, sm: 400 },
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Box>
                    <Typography marginBottom={2} id="keep-mounted-modal-title" variant="h6" component="h2">
                        ¿Que te parecieron los videos?
                    </Typography>
                    <Select autoWidth disableUnderline unselectable='on'>
                        <option>
                            <LooksOne sx={{ marginRight: 1 }}></LooksOne>
                            <LooksTwo sx={{ marginRight: 1 }}></LooksTwo>
                            <Looks3 sx={{ marginRight: 1 }}></Looks3>
                            <Looks4 sx={{ marginRight: 1 }}></Looks4>
                            <Looks5 sx={{ marginRight: 1 }}></Looks5>
                        </option>
                    </Select>
                </Box>
                <Box>
                    <Input disableUnderline sx={{ color: '#6F2279', marginTop: 2 }} placeholder='Deja tu comentario'></Input>
                    <Button sx={{bgcolor: '#C1A6CF', color: 'black',marginTop:2 ,":hover": { bgcolor: "#6F2279", color: 'white' }}} type='submit'>Enviar comentario</Button>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalComments