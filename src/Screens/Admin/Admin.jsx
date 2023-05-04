import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "../../Components/Drawer/Drawer";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function Admin() {
    const routes = [
        {
            name: "Institute",
            route: "institute"
        },
        {
            name: "Users",
            route: "users"
        },
        {
            name: "Theme",
            route: "theme"
        },
        {
            name: "Status",
            route: "status"
        }
    ];

    const newWidth = 220;

    const [mobileToggle, setMobileToggle] = useState(false);

    const handleMobileToggle = () => {
        setMobileToggle(!mobileToggle);
    };

    return (
        <Box component="main">
            <Drawer width={newWidth} mobile={mobileToggle} handle={handleMobileToggle} links={routes} />
            <Box component="div" sx={{ width: { sm: `calc(100% - ${newWidth}px)` }, ml: { sm: `${newWidth}px` }}} >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" edge="start" onClick={handleMobileToggle} 
                            sx={{ mr: 2, display: { sm: "none" } }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" noWrap component="h2">
                            Welcome to Admin
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Outlet />
            </Box>
        </Box>
    );
}

export default Admin;