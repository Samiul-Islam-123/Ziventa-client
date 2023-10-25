import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Button } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

function GridView(props) {

    return (
        <>

            <Grid item key={props.ProductImageURL} xs={12} sm={4} md={3}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <div style={{ paddingBottom: '100%', position: 'relative' }}>
                                <img
                                    src={props.ProductImageURL}
                                    alt='product Image'
                                    style={{
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />
                            </div>
                            {/*Product Title */}
                            <Typography variant='h5' style={{
                                marginTop: "10px"
                            }}>
                                {props.ProductTitle}
                            </Typography>



                            <Typography variant='body1'>
                                {props.ProductDescription}
                            </Typography>
                            {/*Product Price */}
                            <Typography variant='h6'>
                                ₹{props.ProductPrice}

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

export default GridView