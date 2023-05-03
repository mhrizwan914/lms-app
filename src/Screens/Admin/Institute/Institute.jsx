import { Box, Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const Institute = () => {
    return (
        <Box component="section">
            <Container fixed>
                <Typography variant="h2">Institue Screen</Typography>
                <Outlet />
            </Container>
        </Box>
    );
}

export default Institute;