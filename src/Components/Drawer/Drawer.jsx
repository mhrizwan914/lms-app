import { Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";

const Menu = (props) => {
    const {width, mobile, handle} = props;
    return (
        <>
            {/* For Large Devices */}
            <Drawer variant="permanent" open sx={{display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { width: width }}}>
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Blog" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
            {/* For Mobile Devices */}
            <Drawer variant="temporary" sx={{display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { width: width }}}
                open={mobile} onClose={handle} ModalProps={{ keepMounted: true}} >
                <List>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Blog" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary="Contact" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Menu;