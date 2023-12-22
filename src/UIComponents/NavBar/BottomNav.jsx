import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from "@mui/icons-material/Home"
import { GiClothes } from "react-icons/gi"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

function BottomNav() {

    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    return (
        <>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => {
                    navigate('/')
                }} />
                <BottomNavigationAction onClick={() => {
                    navigate('/products')
                }} label="Products" icon={<div style={{ fontSize: "24px" }}>
                    <GiClothes />
                </div>} />
                <BottomNavigationAction label="Cart" icon={<ShoppingCartIcon />} onClick={() => {
                    navigate('/cart')
                }} />
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} onClick={() => {
                    navigate('/profile')
                }} />
            </BottomNavigation>
        </>
    )
}

export default BottomNav