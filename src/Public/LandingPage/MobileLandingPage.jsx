import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import first from "../../Assets/first.png";
import second from "../../Assets/second.png"
import third from "../../Assets/third.png";
import fourth from "../../Assets/fourth.png";
import fifth from "../../Assets/fifth.png";
import sixth from "../../Assets/sixth.png"; import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom';

function MobileLandingPage() {

    const navigate = useNavigate();

    return (
        <>

            <Card style={{
                margin: "10px"
            }}>
                <CardContent>


                    <Typography variant='h4'>
                        Effortless Shopping
                    </Typography>
                    <div >

                        <img src={first} width={"100%"} alt="First" />
                    </div>

                    <Typography variant='body1'>
                        Shop for your favorite styles with ease and convenience. Experience a seamless journey from browsing to checkout, making fashion accessible and enjoyable like never before.
                    </Typography>

                    <Button onClick={() => {
                        navigate('/login')
                    }} variant='contained'>Get started</Button>


                </CardContent>
            </Card>

            <Card style={{
                margin: "10px"
            }} >
                <CardContent>


                    <Typography variant='h4'>
                        Fashion at Your Fingertips
                    </Typography>
                    <div >

                        <div style={{
                            textAlign: "center"
                        }}>

                            <img src={second} width={"50%"} alt="First" />
                        </div>
                    </div>

                    <Typography variant='body1'>
                        Access the latest trends from your mobile or desktop. Our user-friendly app brings the world of fashion to your screen, offering a world of choices for your unique style.
                    </Typography>



                </CardContent>
            </Card>


            <Card style={{
                margin: "10px"
            }}>
                <CardContent>


                    <Typography variant='h4'>
                        Sustainable Style, Superior Quality
                    </Typography>
                    <div >

                        <div style={{
                            textAlign: "center"
                        }}>

                            <img src={third} width={"50%"} alt="First" />
                        </div>
                    </div>

                    <Typography variant='body1'>
                        Discover eco-friendly fashion without compromising on quality. Our curated selection of sustainable clothing ensures you can look great while making a positive impact on the planet.
                    </Typography>

                    <Button onClick={() => {
                        navigate('/login')
                    }} variant='contained'>Signup for free</Button>


                </CardContent>
            </Card>

            <Card style={{
                margin: "10px"
            }}>
                <CardContent>


                    <Typography variant='h4'>
                        Unleash Your Inner Fashionista
                    </Typography>
                    <div >

                        <div style={{
                            textAlign: "center"
                        }}>

                            <img src={fifth} width={"50%"} alt="First" />
                        </div>
                    </div>

                    <Typography variant='body1'>
                        Express your unique style with our diverse collection. From classic to cutting-edge, we have the perfect outfit to help you stand out in every crowd.
                    </Typography>



                </CardContent>
            </Card>

            <Card style={{
                margin: "10px",
                marginBottom: "150px"
            }}>
                <CardContent>


                    <Typography variant='h4'>
                        Seamless Checkout Experience
                    </Typography>
                    <div >

                        <div style={{
                            textAlign: "center"
                        }}>

                            <img src={sixth} width={"50%"} alt="First" />
                        </div>
                    </div>

                    <Typography variant='body1'>
                        Buy with confidence through our user-friendly checkout process. We've streamlined the purchase journey to make sure you have a stress-free shopping experience, every time.
                    </Typography>

                    <Button onClick={() => {
                        navigate('/login')
                    }} variant='contained'>login for free</Button>


                </CardContent>
            </Card>

        </>
    )
}

export default MobileLandingPage