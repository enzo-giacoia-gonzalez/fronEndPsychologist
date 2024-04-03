import { Button, Card, FormControl, Grid, Input, MenuItem, Select, Typography, Box } from '@mui/material';
import { UiContext } from '../../context/ui'
import { useContext, useState } from 'react'
import UserAdminModal from '../ui/UserAdminModal';
import { SearchContext } from '../../context/searchUser';









const UserList = () => {

    const { user, getResults, getUserByMail } = useContext(SearchContext)

    const { toogleModalUser } = useContext(UiContext)


    const [searchInput, setSearchInput] = useState({ categoria: '', search: '' })

    const handleSearch = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setSearchInput({
            ...searchInput,
            search: e.target.value,
        });
    };

    const handleUsuario = (e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        getUserByMail(e.target.value)
    }

    

    return (

        <Grid container bgcolor="#BAA0C8" height="100vh">
            <UserAdminModal />
            <Grid item xs={12}>
                <Grid item xs={12} display="flex" justifyContent="center" py={10}>
                    <Card sx={{ maxWidth: { xs: '80%', sm: '50' }, width: '500px', height: { xs: '300px' }, boxShadow: 1, paddingX: 3 }}>
                        <Typography variant="h5" sx={{ borderBottomWidth: '2px', marginTop: '18px', marginBottom:'15px' }}>Buscar pacientes</Typography>
                        <Box display="flex">
          <Input onChange={(e) => {
            handleSearch(e);
          }} placeholder='Nombre del usuario' sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }}></Input><Button onClick={() => { getResults(searchInput.search) }} sx={{ width:'100%' , borderRadius: "4px", border: 1, marginBottom: "15px", bgcolor: '#BAA0C8', color: 'black', ":hover": { bgcolor: '#6C2273', color: 'white' } }}>Buscar usuario</Button>
        </Box>


                        <FormControl sx={{ width: '100%', border: 1, borderColor: 'white', marginBottom: "15px", borderRadius: "4px", marginRight: '5px' }} fullWidth>

                            <Select

                                onChange={(e) => { handleUsuario(e) }}
                                displayEmpty
                            >
                                {user.map((users, index) => {
                                    return (<MenuItem onClick={()=>{toogleModalUser(true)}} key={index} value={users?.correo}>{users?.nombre}</MenuItem>)
                                })}
                            </Select>
                        </FormControl>
                        <Button type='submit' fullWidth sx={{ marginTop: '18px', marginBottom: '18px', paddingY: 2, color: 'black', ":hover": { bgcolor: '#BAA0C8', color: 'white' } }}>Buscar</Button>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default UserList