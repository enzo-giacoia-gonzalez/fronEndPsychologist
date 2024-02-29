import { Button, Grid } from "@mui/material"
import { useContext } from 'react';
import { UiContext } from "../../context/ui";
import React from "react";


const Classes = () => {
   


    const {toogleClasses} = useContext(UiContext)

    return (
        <Grid container py={7} height="100vh">
            <Grid item xs display="flex" justifyContent="center">
                <Grid item xs justifyContent="center" sx={{marginRight:{xs:6, sm:'0px'}}} display="flex">
                    <Button sx={{paddingY:3, height:'40px', marginRight:"20px",bgcolor:'#BAA0C8', color:'black', ":hover":{bgcolor:'#6C2273', color:'white'}}} onClick={()=>toogleClasses('postClasses')}>Agregar videos</Button>
                </Grid>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center" height="400px">
                
            </Grid>
        </Grid>
    )
}

export default Classes