import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { first } from "./../../Assets/first.png";
import ProductCard from "../Products/ProductCard";
import Footer from "./Footer";

function DesktopLandingPage() {
  const navigate = useNavigate();

  // Sample images for the carousel
  const images = [
    "https://t3.ftcdn.net/jpg/06/21/88/34/240_F_621883464_mZCmCAqaBgcV3bLwoaKx3eyrB4gjJ02M.jpg",
    "https://t4.ftcdn.net/jpg/06/22/23/65/240_F_622236596_41vDy4OkN5dIsd8Mkic0jYwgcQJPkG5R.jpg",
    "https://t3.ftcdn.net/jpg/06/16/71/88/240_F_616718887_eDoYgKCon6TL7ggKHSpqYI5XEkRPqV7y.jpg",
    "https://t4.ftcdn.net/jpg/06/24/96/51/240_F_624965150_FRwAUNCDnDLxrX87am6hDQip2QNoKx2A.jpg",
    "https://t3.ftcdn.net/jpg/06/21/88/34/240_F_621883464_mZCmCAqaBgcV3bLwoaKx3eyrB4gjJ02M.jpg",
    "https://t4.ftcdn.net/jpg/06/22/23/65/240_F_622236596_41vDy4OkN5dIsd8Mkic0jYwgcQJPkG5R.jpg",
    "https://t3.ftcdn.net/jpg/06/16/71/88/240_F_616718887_eDoYgKCon6TL7ggKHSpqYI5XEkRPqV7y.jpg",
    "https://t4.ftcdn.net/jpg/06/24/96/51/240_F_624965150_FRwAUNCDnDLxrX87am6hDQip2QNoKx2A.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      {/* Hero Section */}

      <Container>
        <div
          
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`carousel-${index}`}
                  style={{ width: "100%" }}
                />
              </div>
            ))}
          </Slider>
        </div>

      {/*Trending products */}
      <Typography variant="h3" style={{
          marginTop: "40px",
          marginBottom: "40px",
        }}>
        Trending 
      </Typography>

      <Grid container spacing={2}>
        {
            
            images.map(item=>{
                return (<>
                <Grid item xs={12} md={4}>
                    <ProductCard imageURL = {item} imagwWidth = "300px" imageHeight="400px"/>
                    </Grid>
                </>)
            })
        }
      
    </Grid>

     {/*Poppular products */}
   
   <div styles={{
    marginTop : "50px"
   }}>
  <Typography variant="h3" style={{
          marginTop: "40px",
          marginBottom: "40px",
        }} >
        Popular 
      </Typography>

   </div >
      <Grid  container spacing={2}>
        {
            
            images.map(item=>{
                return (<>
                <Grid item xs={12} md={4}>
                    <ProductCard imageURL = {item} imagwWidth = "300px" imageHeight="500px"/>
                    </Grid>
                </>)
            })
        }
      
    </Grid>

    

        </Container>


    </>
  );
}

export default DesktopLandingPage;
