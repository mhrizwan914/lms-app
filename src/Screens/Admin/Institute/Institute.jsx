import { Box, Card, CardContent, CardMedia, Container, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import CampusLogo from "../../../Assets/Logos/logo.png";
import Button from "../../../Components/Button/Button";

const Institute = () => {
    return (
        <Box component="section">
            <Box component="div" sx={{marginTop: "1rem"}}>
                <Container maxWidth="xxl">
                    <Grid container spacing={2}>
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
                                        <Button text="2" variant="contained" size="small" />
                                        <Button text="Active" variant="contained" size="small" color="success" />
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