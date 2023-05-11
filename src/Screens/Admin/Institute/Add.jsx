import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Input from "../../../Components/Input/Input";
import Select from "../../../Components/Select/Select";

const Add = () => {
    const userType = [
        {
            value: 1,
            name: "Institute"
        }
    ];
    const instituteType = [
        {
            value: 0,
            name: "School"
        },
        {
            value: 1,
            name: "College"
        },
        {
            value: 2,
            name: "University"
        },
        {
            value: 3,
            name: "Institute"
        },
    ];
    return (
        <Box component="section">
            <Box component="div">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12}>
                            <Box component="form" pt={3}>
                                <Button variant="contained" component="label">
                                    Upload Logo
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                                <Stack direction="row" spacing={2} mt={2}>
                                    <Input type="text" variant="outlined" label="Name" size="small" />
                                    <Input type="text" variant="outlined" label="Description" size="small" />
                                    <Input type="number" variant="outlined" label="Campus" size="small" />
                                </Stack>
                                <Stack direction="row" spacing={2} mt={2}>
                                    <Input type="text" variant="outlined" label="Location" size="small" />
                                    <Input type="text" variant="outlined" label="Address" size="small" />
                                    <Input type="number" variant="outlined" label="Contact" size="small" />
                                </Stack>
                                <Stack direction="row" spacing={2} mt={2}>
                                    <Input type="number" variant="outlined" label="Owner Contact" size="small" />
                                    <Input type="email" variant="outlined" label="Owner Email" size="small" />
                                    <Select variant="outlined" label="User Type" list={userType} size="small" />
                                </Stack>
                                <Stack direction="row" spacing={2} mt={2}>
                                    <Select variant="outlined" label="Institute Type" list={instituteType} size="small" />
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
}

export default Add;