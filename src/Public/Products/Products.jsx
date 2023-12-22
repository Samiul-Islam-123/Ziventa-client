import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import products from "../../TestingData";
import GridView from "./GridView";
import ListView from "./ListView";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewListIcon from "@mui/icons-material/ViewList";
import ProductFilterDrawer from "../../UIComponents/Drawers/ProductFilterDrawer";
import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import apiURL from "../../apiURL";
import Cookies from "js-cookie";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams } from "react-router-dom";
import { ConstructionOutlined } from "@mui/icons-material";

function Products() {
  const [productsData, setProducts] = useState([]);
  const [listView, SetListView] = useState(false);
  const [loading, setLoading] = useState(false);

  const [selectedAge, setSelectedAge] = useState(null); // or set an initial value if needed
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null)

  const handleAgeChange = (event, value) => {
    setSelectedAge(value);
  };

  const handlePriceChange = (event, value) => {
    setSelectedPriceRange(value);
  };

  const { filterValue } = useParams();

  const Categories = ["All", "Men", "Women", "Kids"];
  const ageRange = [
    "2-4 years (Toddlers)",
    "5-12 years (Kids)",
    "13-19 years (Teenagers)",
    "20-64 years (Adults)",
    "65-100 years (Seniors)",
  ];
  const priceRange = [
    { label: "Under ₹500", value: "0-500" },
    { label: "₹500 - ₹1,000", value: "500-1000" },
    { label: "₹1,000 - ₹2,000", value: "1000-2000" },
    { label: "₹2,000 - ₹5,000", value: "2000-5000" },
    { label: "Over ₹5,000", value: "5000+" },
  ];

  const fetchProducts = async () => {
    setLoading(true);
    const token = Cookies.get("access_token");
    const response = await axios.get(`${apiURL}/app/client/all-products`);
    if (response.data.message == "OK") setProducts(response.data.products);
    else {
      alert(response.data.message);
      console.log(response);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (filterValue) SearchProducts();
  }, [filterValue]);

  const SearchProducts = () => {
    var output = [];
    productsData.forEach((item) => {
      if (
        item.ProductTitle.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.ProductDescription.toLowerCase().includes(filterValue.toLowerCase()) ||
        (item.Category && item.Category.includes(filterValue))
      ) {
        output.push(item);
      }
    });
    setFilteredProducts(output);
  };
  

  useEffect(() => {
    filterProducts(selectedAge, selectedPriceRange);
  }, [selectedAge, selectedPriceRange]);

  const isPriceInRange = (selectedValue, productPrice) => {
    switch (selectedValue) {
      case "0-500":
        return productPrice <= 500;
      case "500-1000":
        return productPrice > 500 && productPrice <= 1000;
      case "1000-2000":
        return productPrice > 1000 && productPrice <= 2000;
      case "2000-5000":
        return productPrice > 2000 && productPrice <= 5000;
      case "5000+":
        return productPrice > 5000;
      default:
        return false;
    }
  };

  const filterProducts = (selectedAge, selectedPriceRange) => {
    const filteredProducts = productsData.filter((item) => {
      const metaData = item.ProductMetaData;
      const productPrice = item.ProductPrice;

      // Check if the AgeRange matches the selected age
      const isAgeMatch = selectedAge ? metaData.AgeRange === selectedAge : true;

      // Check if the PriceRange matches the selected price range
     // Check if the PriceRange matches the selected price range
    const isPriceMatch =
    selectedPriceRange ? isPriceInRange(selectedPriceRange.value, productPrice) : true;

      // Return true only if both AgeRange and PriceRange match the selected values
      return isAgeMatch && isPriceMatch;
    });

    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <Container>
        <Toolbar
          style={{
            marginTop: "75px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 100,
            backgroundColor: "#263238",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Customize the shadow if desired
          }}
        >
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
            onChange={handleAgeChange}
            sx={{ width: 200 }}
            renderInput={(params) => (
              <TextField {...params} label="Age Range" />
            )}
          />

          {/*Price */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={priceRange}
            onChange={handlePriceChange}
            getOptionLabel={(option) => option.label} // Display the label in the input field
            sx={{ width: 200 }}
            renderInput={(params) => (
              <>
                <TextField {...params} label="Price Range" />
                <Divider />
              </>
            )}
          />

          {!listView ? (
            <>
              <IconButton
                style={{
                  marginLeft: "auto",
                }}
                onClick={() => {
                  SetListView(!listView);
                }}
              >
                <ViewListIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                style={{
                  marginLeft: "auto",
                }}
                onClick={() => {
                  SetListView(!listView);
                }}
              >
                <GridOnIcon />
              </IconButton>
            </>
          )}
        </Toolbar>

        <div
          style={{
            marginTop: "150px",
          }}
        >
          {loading ? (
            <>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </>
          ) : null}



          {listView ? (
            <>

{filteredProducts && (
  <>
    {filteredProducts.map((item) => {
                //console.log(item)
                return (
                  <>
                    <ListView
                      productID={item._id}
                      ProductImageURL={item.ProductImages[0]}
                      ProductTitle={item.ProductTitle}
                      ProductDescription={item.ProductDescription}
                      ProductPrice={item.ProductPrice}
                      ProductID={item._id}
                    />
                  </>
                );
              })}
  </>
)}

<Divider style={{
  marginTop : "80px", 
  marginBottom : "80px"
}}/>

              {productsData.map((item) => {
                //console.log(item)
                return (
                  <>
                    <ListView
                      productID={item._id}
                      ProductImageURL={item.ProductImages[0]}
                      ProductTitle={item.ProductTitle}
                      ProductDescription={item.ProductDescription}
                      ProductPrice={item.ProductPrice}
                      ProductID={item._id}
                    />
                  </>
                );
              })}
            </>
          ) : (
            <>

{filteredProducts && (
  <>
    <Grid container spacing={2} style={{ display: "flex", flexWrap: "wrap" }}>
      {filteredProducts.map((item) => {
        return (
          <>
            <GridView
              ProductImages={item.ProductImages}
              ProductTitle={item.ProductTitle}
              ProductDescription={item.ProductDescription}
              ProductPrice={item.ProductPrice}
              ProductID={item._id}
            />
          </>
        );
      })}
    </Grid>
  </>
)}

<Divider style={{
  marginTop : "80px", 
  marginBottom : "80px"
}}/>


              <Grid
                container
                spacing={2}
                style={{ display: "flex", flexWrap: "wrap" }}
              >
                {productsData.map((item) => {
                  return (
                    <>
                      <GridView
                        ProductImages={item.ProductImages}
                        ProductTitle={item.ProductTitle}
                        ProductDescription={item.ProductDescription}
                        ProductPrice={item.ProductPrice}
                        ProductID={item._id}
                      />
                    </>
                  );
                })}
              </Grid>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

export default Products;
