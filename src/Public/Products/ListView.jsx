import React from 'react'
import { Card, CardContent, CardActionArea, Typography, Button } from '@mui/material'

function ListView(props) {
    return (
        <Card style={{ display: 'flex', marginBottom: '10px' }}>
            <img
                src={props.ProductImageURL}
                alt='product Image'
                style={{
                    objectFit: 'cover',
                    width: '150px',
                    height: '150px',
                }}
            />

            <CardContent style={{ flex: 1 }}>

                {/* Product Title */}
                <Typography variant='h5' style={{ marginBottom: '5px' }}>
                    {props.ProductTitle}
                </Typography>

                {/* Product Price */}
                <Typography variant='h6'>
                    ₹{props.ProductPrice}
                </Typography>

                <Button style={{
                    alignSelf: "felx-end"
                }} variant="contained" color="primary">
                    Buy Now
                </Button>
                {
                    props.Status && (<>
                        <Typography variant='h5' style={{ marginLeft: "80%" }}>
                            {props.Status}
                        </Typography>
                    </>)
                }

            </CardContent>
        </Card>
    )
}

export default ListView
