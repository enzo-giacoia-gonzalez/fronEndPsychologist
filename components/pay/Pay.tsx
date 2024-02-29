import { Grid, List } from "@mui/material"
import PayItem from './PayItem';

const Pay = () => {
  return (
   <Grid container direction={{xs:'column', md:'row'}} justifyContent="center" alignItems="center">
    <Grid item xs={12}>
      <List>
        <PayItem/>
      </List>
    </Grid>
   </Grid>
  )
}

export default Pay