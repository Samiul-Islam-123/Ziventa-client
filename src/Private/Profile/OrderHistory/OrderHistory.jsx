import React, { useEffect, useState } from "react";
import TestProfileData from "../../../TestProfileData";
import ListView from "../../../Public/Products/ListView";
import Cookies from "js-cookie";
import apiURL from "../../../apiURL";
import axios from "axios";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

function OrderHistory() {
  const [orderhistory, setOrderHistory] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchOrderHistory = async () => {
    setLoading(true);

    const token = Cookies.get("access_token");
    const res = await axios.get(`${apiURL}/app/client/order-history/${token}`);
    if (res.data.message == "OK") setOrderHistory(res.data.OrderData);
    else {
      alert(res.data.message);
      console.log(res.data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  function formatDate(inputDate) {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);
  
    const formattedDate = `${day}${getDaySuffix(day)} ${months[monthIndex]}, ${year}`;
  
    return formattedDate;
  }
  
  // Helper function to get the suffix for the day (e.g., 1st, 2nd, 3rd)
  function getDaySuffix(day) {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  return (
    <>
      {loading ? (
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : null}

      {orderhistory ? (
        <>
          {orderhistory.map((item) => {
            //console.log(item)
            return (
              <>
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h6">
                    Total Order Price : ₹ {item.OrderPrice}
                  </Typography>
                  <Typography variant="h6">
                    Order Status : {item.OrderStatus}
                  </Typography>
                  {
                    item.ExpectedDeliveryDate ? (<>
                    <Typography variant="h6">Delivery expectd on {formatDate(item.ExpectedDeliveryDate)}</Typography>
                    </>) : null
                  }
                </div>
                {item.products.map((pitem) => {
                  //console.log();
                  return (
                    <>
                      <Card>
                        <CardContent>
                          <Grid container>
                            <Grid
                              item
                              xs={6}
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <img
                                src={pitem.product.ProductImages[0]}
                                width={"500px"}
                              />
                            </Grid>

                            <Grid
                              item
                              xs={6}
                              style={{
                                textAlign: "center",
                              }}
                            >
                              <Typography variant="h6">
                                {pitem.product.ProductTitle}
                              </Typography>
                              <Typography variant="h4">
                                ₹ {pitem.product.ProductPrice}
                              </Typography>
                              <Typography variant="h5">
                                Qty : {pitem.Qty}
                              </Typography>

                              <div
                                style={{
                                  marginTop: "10px",
                                }}
                              >
                                <IconButton
                                  onClick={() => {
                                    navigate(
                                      `/products/details/${pitem.product._id}`
                                    );
                                  }}
                                >
                                  <ReadMoreIcon />
                                </IconButton>
                                <IconButton
                                  onClick={async () => {
                                    setLoading(true);
                                    const token = Cookies.get("access_token");
                                    const orderID = item._id;
                                    const productID = pitem.product._id;
                                    const res = await axios.post(
                                      `${apiURL}/app/client/remove-order-item`,
                                      {
                                        orderID: orderID,
                                        productID: productID,
                                        token: token,
                                      }
                                    );
                                    setLoading(false);
                                    if (res.data.message == "OK") {
                                      alert("Order Cancelled Successfully");
                                      fetchOrderHistory();
                                    } else alert(res.data.message);
                                  }}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </div>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                      <Divider />
                    </>
                  );
                })}
              </>
            );
          })}
        </>
      ) : (
        <>No Orders yet</>
      )}
    </>
  );
}

export default OrderHistory;
