import { Container, Divider, Grid, ListItem, ListItemButton, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HistoryIcon from '@mui/icons-material/History';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import SavedProducts from './SavedProducts/SavedProducts';
import OrderHistory from './OrderHistory/OrderHistory';
import ReviewProducts from './ReviewProducts/ReviewProducts';


function Profile() {

    const [savedProduct, setSavedProduct] = useState(true);
    const [orderHistory, setOrderHistory] = useState(false);
    const [reviews, setReviews] = useState(false);

    return (
        <>
            <Container>
                <div style={{
                    textAlign: "center"
                }}>
                    <img style={{
                        border: "1px solid white",
                        borderRadius: "50%",
                        width: "100px",
                        height: "100px"
                    }} src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D' alt='profile picture' />
                    <Typography variant='h5'>Username</Typography>
                    <Typography variant='h7'>User Bio</Typography>
                </div>
                <Divider />
                <Toolbar>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={4} >
                            <ListItemButton
                                onClick={() => {
                                    setSavedProduct(true);
                                    setOrderHistory(false);
                                    setReviews(false);
                                }}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <BookmarkIcon />
                                <Typography variant='h7' style={{
                                    marginLeft: "10px"
                                }}>
                                    Saved Products
                                </Typography>
                            </ListItemButton>
                            {
                                savedProduct ? (<>
                                    <Divider color='white' />

                                </>) : null
                            }
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemButton style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} onClick={() => {
                                setSavedProduct(false);
                                setOrderHistory(true);
                                setReviews(false);
                            }}>
                                <HistoryIcon />
                                <Typography variant='h7' style={{
                                    marginLeft: "10px"
                                }}>
                                    Order History
                                </Typography>
                            </ListItemButton>
                            {
                                orderHistory ? (<Divider color='white' />) : null
                            }
                        </Grid>
                        <Grid item xs={4}>
                            <ListItemButton style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }} onClick={() => {
                                setSavedProduct(false);
                                setOrderHistory(false);
                                setReviews(true);
                            }}>
                                <ThumbsUpDownIcon />
                                <Typography variant='h7' style={{
                                    marginLeft: "10px"
                                }}>
                                    Reviews
                                </Typography>
                            </ListItemButton>
                            {
                                reviews ? (<Divider color='white' />) : null
                            }
                        </Grid>
                    </Grid>
                </Toolbar>

                {savedProduct && (<><SavedProducts /></>)}
                {orderHistory && (<OrderHistory />)}
                {reviews && (<ReviewProducts />)}

            </Container>
        </>
    )
}

export default Profile