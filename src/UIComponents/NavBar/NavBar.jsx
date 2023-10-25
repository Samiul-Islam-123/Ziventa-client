import React, { useEffect, useState } from 'react';
import DesktopNavBar from './DesktopNavBar';
import MobileNavBar from './MobileNavBar';
import LandingPage from '../../Public/LandingPage/LandingPage';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BottomNav from './BottomNav';
import MobileLandingPage from '../../Public/LandingPage/MobileLandingPage';
import DesktopLandingPage from '../../Public/LandingPage/DesktopLandingPage';
import { Routes, Route } from "react-router-dom"
import Login from '../../Auth/Login';
import Signup from '../../Auth/Signup';
import PasswordResetVerification from '../../Auth/PasswordResetVerification';
import PasswordReset from '../../Auth/PasswordReset';
import OTPVerification from '../../Auth/OTPVerification';
import Products from '../../Public/Products/Products';
import Profile from '../../Private/Profile/Profile';
import OwnerID from '../../OwnerID';

function NavBar() {
    const [mobo, setMobo] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setMobo(window.innerWidth <= 700);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {mobo ? (<><MobileNavBar />


                <div style={{
                    marginTop: "70px"
                }}>
                    <Routes>
                        <Route exact path="/" element={<div ><MobileLandingPage /></div>}></Route>
                        <Route exact path="/login" element={<div ><Login /></div>}></Route>
                        <Route exact path="/signup" element={<div ><Signup /></div>}></Route>
                        <Route exact path="/password-reset/verification" element={<div ><PasswordResetVerification /></div>}></Route>
                        <Route exact path="/password-reset" element={<div ><PasswordReset /></div>}></Route>

                        <Route exact path="/products" element={<Products />}></Route>
                    </Routes>

                </div>

                <div style={{
                    position: "fixed",
                    bottom: "0",
                    left: "0",
                    right: "0"
                }}>

                    <BottomNav />
                </div>
            </>) : (<><DesktopNavBar />
                <div style={{
                    marginTop: "80px"
                }}>

                    <Routes>
                        <Route exact path="/" element={<DesktopLandingPage />}></Route>
                        <Route exact path="/login" element={<div ><Login /></div>}></Route>
                        <Route exact path="/signup" element={<div ><Signup /></div>}></Route>
                        <Route exact path="/password-reset/verification" element={<div ><PasswordResetVerification /></div>}></Route>
                        <Route exact path="/password-reset" element={<div ><PasswordReset /></div>}></Route>
                        <Route exact path="/otp-verification/:email" element={<div ><OTPVerification /></div>}></Route>

                        <Route exact path="/products" element={<Products />}></Route>

                        <Route exact path="/profile" element={<Profile />}></Route>

                    </Routes>
                </div>
            </>)}



        </>
    );
}

export default NavBar;
