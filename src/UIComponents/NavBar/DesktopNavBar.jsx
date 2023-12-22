import {
  AppBar,
  Button,
  IconButton,
  Icon,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import apiURL from "../../apiURL";
import Cookies from "js-cookie";
import Badge from "@mui/material/Badge";

function DesktopNavBar() {
  const navigate = useNavigate();

  const [CartItems, setCartItems] = useState(0);

  const fetchData = async () => {
    const token = Cookies.get("access_token");
    const res = await axios.get(`${apiURL}/app/client/badge-values/${token}`);
    console.log(res)
    if (res.data.message == "OK") {
      setCartItems(res.data.CartItems);
    
    } else {
      alert("Error on badge fetching");
      console.log(res.data);
    }
  };

  useEffect(() => {
    //fetchData();
  }, []);

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant="h3">ZA</Typography>

          <TextField
            onChange={(e) => {
              if(e.target.value != "")
              navigate("/products/filter/"+e.target.value);
            else
            navigate("/products/filter/none");

            }}
            style={{
              marginLeft: "10px",
              flexGrow: "1",
            }}
            variant="outlined"
            label="Search Products"
            fullWidth
          />

          <Button
            color="inherit"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Button>

          <Button
            color="inherit"
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </Button>

          <Badge  color="primary">
            <IconButton
              onClick={() => {
                navigate("/cart");
              }}
            >
              <Icon>
                <ShoppingCartIcon />
              </Icon>
            </IconButton>
          </Badge>

          <IconButton
            onClick={() => {
              navigate("/profile");
            }}
          >
            <Icon>
              <AccountCircleIcon />
            </Icon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default DesktopNavBar;
