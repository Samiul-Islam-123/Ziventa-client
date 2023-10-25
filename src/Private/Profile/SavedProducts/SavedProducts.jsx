import React from 'react'
import ListView from '../../../Public/Products/ListView'
import TestProfileData from '../../../TestProfileData'
import GridView from '../../../Public/Products/GridView'
import { Grid } from "@mui/material"

function SavedProducts() {

    return (
        <>
            <Grid container spacing={2}>

                {
                    TestProfileData.savedProducts.map(item => {
                        return (<>
                            <GridView
                                ProductDescription={item.ProductDescription}
                                ProductImageURL={item.ProductImageURL}
                                ProductTitle={item.ProductTitle}
                                ProductPrice={item.ProductPrice}
                            />
                        </>)
                    })
                }
            </Grid>
        </>
    )
}

export default SavedProducts