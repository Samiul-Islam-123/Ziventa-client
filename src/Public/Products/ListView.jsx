import React from 'react'
import { Card, CardContent, CardActionArea, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import apiURL from '../../apiURL';

function ListView(props) {

    const navigate = useNavigate();

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

                <Typography
              variant="body1"
              style={{
                maxWidth: "200px",
                overflow: "hidden",
                textOverflow: "ellipsis", // Add this to show three dots
                whiteSpace: "nowrap", // Add this to prevent wrapping
              }}
            >
              {props.ProductDescription}
            </Typography>

                {/* Product Price */}
                <Typography variant='h6'>
                    ₹{props.ProductPrice}
                </Typography>

                <Button
                onClick={()=>{
                    navigate("/products/details/" + props.ProductID);
                }}
                style={{
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
