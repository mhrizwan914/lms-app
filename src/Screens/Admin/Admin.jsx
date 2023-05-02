import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Drawer from "../../Components/Drawer/Drawer";
import { useState } from "react";

function Admin() {
    const newWidth = 240;

    const [mobileToggle, setMobileToggle] = useState(false);

    const handleMobileToggle = () => {
        setMobileToggle(!mobileToggle);
    };

    return (
        <Box>
            <Drawer width={newWidth} mobile={mobileToggle} handle={handleMobileToggle} />
            <AppBar sx={{ width: { sm: `calc(100% - ${newWidth}px)` }, ml: { sm: `${newWidth}px` }}}>
                <Toolbar>
                    <IconButton color="inherit" edge="start" onClick={handleMobileToggle} sx={{ mr: 2, display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" noWrap component="h2">
                        Welcome to Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ width: { sm: `calc(100% - ${newWidth}px)` }, ml: { sm: `${newWidth}px` }}} >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
            </Box>
        </Box>
    );
}

export default Admin;