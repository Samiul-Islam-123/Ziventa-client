import { AppBar, Button, IconButton, Icon, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function DesktopNavBar() {

    const navigate = useNavigate();

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant='h3'>
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


                    <Button color='inherit' onClick={() => {
                        navigate('/');
                    }}>
                        Home
                    </Button>

                    <Button color='inherit' onClick={() => {
                        navigate('/products')
                    }}>
                        Products
                    </Button>

                    <IconButton onClick={() => {
                        navigate('/cart')
                    }}>
                        <Icon>
                            <ShoppingCartIcon />
                        </Icon>
                    </IconButton>

                    <IconButton onClick={() => {
                        navigate('/profile')
                    }}>
                        <Icon>
                            <AccountCircleIcon />
                        </Icon>
                    </IconButton>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default DesktopNavBar