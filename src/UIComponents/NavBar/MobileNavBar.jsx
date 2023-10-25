import { AppBar, Divider, Icon, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

function MobileNavBar() {

    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    return (
        <>
            <AppBar position='fixed'>

                <Toolbar style={{

                    marginTop: "10px"
                }}>
                    <Typography variant='h4'>
                        ZA
                    </Typography>

                    <TextField
                        onChange={() => {
                            navigate('/products')
                        }}
                        style={{
                            marginLeft: "10px",
                            flexGrow: "1"
                        }} variant='outlined' label="Search Products" fullWidth />

                    <IconButton>
                        <Icon>
                            <NotificationsIcon />
                        </Icon>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Divider color='white' style={{
                marginTop: "10px"
            }} />


        </>
    )
}

export default MobileNavBar