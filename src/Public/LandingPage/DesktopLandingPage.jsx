import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import first from "../../Assets/first.png";
import second from "../../Assets/second.png"
import third from "../../Assets/third.png";
import fourth from "../../Assets/fourth.png";
import fifth from "../../Assets/fifth.png";
import sixth from "../../Assets/sixth.png";
import { useNavigate } from 'react-router-dom';


function DesktopLandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <Container>
                {/* First*/}
                <Grid container style={{
                    padding: "10px"
                }}>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column", // Align items in a column
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant='h3'>
                                Effortless Shopping
                            </Typography>
                        </div>
                        <Typography variant='body1'>
                            Shop for your favorite styles with ease and convenience. Experience a seamless journey from browsing to checkout, making fashion accessible and enjoyable like never before.
                        </Typography>
                        <Button onClick={() => {
                            navigate('/login')
                        }} variant='contained'>Get started</Button>
                    </Grid>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={first} width={"50%"} alt="First" />
                    </Grid>
                </Grid>
                {/* Second*/}
                <Grid container style={{
                    padding: "10px"
                }}>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start"
                    }}>
                        <img src={second} width={"50%"} alt="First" />
                    </Grid>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column", // Align items in a column
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant='h3'>
                                Fashion at Your Fingertips
                            </Typography>
                        </div>
                        <Typography variant='body1'>
                            Access the latest trends from your mobile or desktop. Our user-friendly app brings the world of fashion to your screen, offering a world of choices for your unique style.                        </Typography>
                    </Grid>
                </Grid>
                {/* Third*/}
                <Grid container style={{
                    padding: "10px"
                }}>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column", // Align items in a column
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant='h3'>
                                Sustainable Style, Superior Quality
                            </Typography>
                        </div>
                        <Typography variant='body1'>
                            Discover eco-friendly fashion without compromising on quality. Our curated selection of sustainable clothing ensures you can look great while making a positive impact on the planet.                        </Typography>
                        <Button onClick={() => {
                            navigate('/login')
                        }} variant='contained'>Signup for free</Button>
                    </Grid>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={third} width={"50%"} alt="First" />
                    </Grid>
                </Grid>
                {/* Fourth*/}
                <Grid container style={{
                    padding: "10px"
                }}>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start"
                    }}>
                        <img src={fifth} width={"50%"} alt="First" />
                    </Grid>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column", // Align items in a column
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant='h3'>
                                Unleash Your Inner Fashionista
                            </Typography>
                        </div>
                        <Typography variant='body1'>
                            Express your unique style with our diverse collection. From classic to cutting-edge, we have the perfect outfit to help you stand out in every crowd.                        </Typography>
                    </Grid>
                </Grid>

                {/* Fifth*/}
                <Grid container style={{
                    padding: "10px"
                }}>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        flexDirection: "column", // Align items in a column
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <Typography variant='h3'>
                                Seamless Checkout Experience
                            </Typography>
                        </div>
                        <Typography variant='body1'>
                            Buy with confidence through our user-friendly checkout process. We've streamlined the purchase journey to make sure you have a stress-free shopping experience, every time. </Typography>

                        <Button onClick={() => {
                            navigate('/login')
                        }} variant='contained'>Login for free</Button>
                    </Grid>
                    <Grid item xs={6} style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <img src={sixth} width={"50%"} alt="First" />
                    </Grid>
                </Grid>



            </Container>
        </>
    );
}

export default DesktopLandingPage;
