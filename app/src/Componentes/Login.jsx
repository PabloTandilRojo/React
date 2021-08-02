import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Login () {

    const paperStyle={padding :20,height:'50vh',width:280, margin:"20px auto"}

    const avatarStyle={backgroundColor:'#1bbd7e'}
    
    const btnstyle={margin:'8px 0'}
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Ingreso de usuario</h2>
                </Grid>
                <TextField label='Usuario' placeholder='Usuario' fullWidth required/>
                <TextField label='Contraseña' placeholder='Contraseña' type='password' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Ingresar</Button>
                <Typography >
                     <Link href="#" >Olvidó la contraseña ?</Link>
                </Typography>
            </Paper>
        </Grid>
    )
}