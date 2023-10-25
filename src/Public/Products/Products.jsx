import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, Container, Divider, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import TuneIcon from '@mui/icons-material/Tune';
import products from '../../TestingData';
import GridView from './GridView';
import ListView from './ListView';
import GridOnIcon from '@mui/icons-material/GridOn';
import ViewListIcon from '@mui/icons-material/ViewList';
import ProductFilterDrawer from '../../UIComponents/Drawers/ProductFilterDrawer';
import { Autocomplete, TextField } from '@mui/material';
import { Slider } from '@mui/material';

function Products() {

    const [productsData, setProducts] = useState([]);
    const [listView, SetListView] = useState(false);

    const Categories = ["All", "Men", "Women", "Kids"];
    const ageRange = ["2-4 years (Toddlers)", "5-12 years (Kids)", "13-19 years (Teenagers)", "20-64 years (Adults)", "65-100 years (Seniors)"];
    const priceRange = [
        { label: "Under ₹500", value: "0-500" },
        { label: "₹500 - ₹1,000", value: "500-1000" },
        { label: "₹1,000 - ₹2,000", value: "1000-2000" },
        { label: "₹2,000 - ₹5,000", value: "2000-5000" },
        { label: "Over ₹5,000", value: "5000+" },
    ];

    useEffect(() => {
        setProducts(products);
    }, []);


    return (
        <>
            <Container>



                <Toolbar style={{
                    marginTop: "75px",
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    zIndex: 100,
                    backgroundColor: "#263238",
                    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' // Customize the shadow if desired
                }}>

                    {/*Categorie */}
                    <ProductFilterDrawer>
                        <IconButton>
                            <TuneIcon />
                        </IconButton>
                    </ProductFilterDrawer>



                    {/*Age */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={ageRange}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Age Range" />}
                    />

                    {/*Price */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={priceRange}
                        getOptionLabel={(option) => option.label} // Display the label in the input field
                        sx={{ width: 200 }}
                        renderInput={(params) => (<><TextField {...params} label="Price Range" /><Divider /></>)}
                    />


                    {
                        !listView ? (<>
                            <IconButton style={{
                                marginLeft: 'auto'
                            }} onClick={() => {
                                SetListView(!listView)
                            }}>
                                <ViewListIcon />
                            </IconButton>
                        </>) : (<>
                            <IconButton style={{
                                marginLeft: 'auto'
                            }} onClick={() => {
                                SetListView(!listView)
                            }}>
                                <GridOnIcon />
                            </IconButton>
                        </>)
                    }

                </Toolbar>

                <div style={{
                    marginTop: "150px"
                }}>

                    {
                        listView ? (<>
                            {
                                productsData.map(item => {
                                    return (<>
                                        <ListView ProductImageURL={item.ProductImageURL}
                                            ProductTitle={item.ProductTitle}
                                            ProductDescription={item.ProductDescription}
                                            ProductPrice={item.ProductPrice}
                                        />
                                    </>)
                                })
                            }
                        </>) : (<>

                            <Grid container spacing={2} style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {
                                    productsData.map(item => {
                                        return (<>
                                            <GridView ProductImageURL={item.ProductImageURL}
                                                ProductTitle={item.ProductTitle}
                                                ProductDescription={item.ProductDescription}
                                                ProductPrice={item.ProductPrice}
                                            />
                                        </>)
                                    })
                                }
                            </Grid>

                        </>)
                    }


                </div>




            </Container>

        </>
    )
}

export default Products;
