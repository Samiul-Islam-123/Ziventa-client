import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import apiURL from "../../apiURL";
import { useNavigate } from "react-router-dom";
import { autoPlay } from "react-swipeable-views-utils";
import SwipeableViews from "react-swipeable-views";
import Box from "@mui/material/Box";

import { useTheme } from "@mui/material/styles";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function GridView(props) {
  const navigate = useNavigate();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Grid item key={props.ProductImageURL} xs={12} sm={4} md={3}>
        <Card>
          <CardActionArea
            onClick={async () => {
              navigate("/products/details/" + props.ProductID);
            }}
          >
            <CardContent>
              <div>
                
                  <img
                    
                    src={props.ProductImages[0]}
                    alt={`Product image`}
                    style={{
                      width: "200px", // Set the desired width for the square image
                      height: "200px", // Set the desired height for the square image
                      objectFit: "cover", // Ensure the image covers the square area
                    }}
                  />
               
              </div>

              {/*Product Title */}

              <Typography
                variant="h5"
                style={{
                  marginTop: "10px",
                }}
              >
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
              {/*Product Price */}
              <Typography variant="h6">₹{props.ProductPrice}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
}

export default GridView;
