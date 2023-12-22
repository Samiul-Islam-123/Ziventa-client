import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useNavigate } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useEffect } from "react";
import axios from "axios";
import apiURL from "../../apiURL";
import Cookies from "js-cookie";
import Badge from '@mui/material/Badge';
import { useState } from "react";

import { FaChild } from "react-icons/fa"
import { FcBusinessman } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc"
import { IconButton, Typography } from "@mui/material";

import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function ProductFilterDrawer({ children }) {

    const navigate = useNavigate();

    const [orders, setOrders] = useState(0);
    const [cartProducts, setCartProducts] = useState(0)


    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const fetchInfo = async () => {
        const token = Cookies.get('access_token')
        const res = await axios.get(`${apiURL}/app/buyer/fetch-shopping-info/${token}`)
        if (res.data.message == "OK") {
            setOrders(res.data.Orders);
            setCartProducts(res.data.CartProducts)
        }

        else {
            console.log(res.data);
            alert(res.data.message)
        }
    }

    useEffect(() => {
        //fetchInfo();
    })

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <Typography variant="h6" align="center">
                    Select Category
                </Typography>
                <Divider color="white" />

                <ListItem disablePadding >
                    <ListItemButton onClick={() => {
                        navigate('/products/filter/men')
                    }}>
                        <ListItemIcon>
                            <FcBusinessman />
                        </ListItemIcon>
                        <ListItemText primary={"Men"} />
                    </ListItemButton>
                </ListItem>



                <ListItem disablePadding >
                    <ListItemButton onClick={() => {
                                                navigate('/products/filter/women')

                    }}>
                        <ListItemIcon>
                            <Badge badgeContent={orders} color="primary">
                                <FcBusinesswoman />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={"Women"} />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding >
                    <ListItemButton onClick={() => {
                                                navigate('/products/filter/kids')

                    }}>
                        <ListItemIcon>
                            <Badge badgeContent={cartProducts} color="primary">

                                <FaChild />
                            </Badge>
                        </ListItemIcon>
                        <ListItemText primary={"Kids"} />
                    </ListItemButton>
                </ListItem>

                <Divider />

               

            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={"left"}>
                <Button onClick={toggleDrawer("left", true)}>{children}</Button>
                <Drawer
                    anchor={"left"}
                    open={state["left"]}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}
