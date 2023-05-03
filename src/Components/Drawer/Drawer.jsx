import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";

const Menu = (props) => {
    const {width, mobile, handle, links} = props;
    return (
        <Box component="nav">
            {/* For Large Devices */}
            <Drawer variant="permanent" open 
                sx={{display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: width }}}>
                <List>
                    {
                        links.map((element, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemText primary={element} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>
            {/* For Mobile Devices */}
            <Drawer variant="temporary" open={mobile} onClose={handle} ModalProps={{ keepMounted: true}}
                sx={{display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: width }}}>
                <List>
                    {
                        links.map((element, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemButton>
                                        <ListItemText primary={element} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </Drawer>
        </Box>
    );
}

export default Menu;