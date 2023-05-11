import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import CampusLogo from "../../../Assets/Logos/logo.png";
import Button from "../../../Components/Button/Button";

const Institute = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Box component="section">
            <Box component="div" sx={{marginTop: "1rem"}}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12}>
                            <Button text="Add" variant="contained" size="small" color="primary" 
                                handle={() => location.pathname === "/admin/" || location.pathname === "/admin"? navigate("institute/add"): navigate("add")} />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Paper elevation={3} sx={{padding: "1rem .5rem"}}>
                                <Box component="div">
                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                        <img src={CampusLogo} width="100" height="100" />
                                        <Typography variant="h5" component="h2" noWrap>The Islamic Coaching</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" justifyContent="space-center" spacing={2}>
                                        <Button text="1" variant="contained" size="small" />
                                        <Button text="Active" variant="contained" size="small" color="success" />
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={3} sx={{padding: "1rem .5rem"}}>
                                <Box component="div">
                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                        <img src={CampusLogo} width="100" height="100" />
                                        <Typography variant="h5" component="h2" noWrap>The Islamic Coaching</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" justifyContent="space-center" spacing={2}>
                                        <Button text="2" variant="contained" size="small" />
                                        <Button text="Active" variant="contained" size="small" color="success" />
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper elevation={3} sx={{padding: "1rem .5rem"}}>
                                <Box component="div">
                                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                                        <img src={CampusLogo} width="100" height="100" />
                                        <Typography variant="h5" component="h2" noWrap>The Islamic Coaching</Typography>
                                    </Stack>
                                    <Stack direction="row" alignItems="center" justifyContent="space-center" spacing={2}>
                                        <Button text="3" variant="contained" size="small" />
                                        <Button text="InActive" variant="contained" size="small" color="error" />
                                    </Stack>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Outlet />
        </Box>
    );
}

export default Institute;