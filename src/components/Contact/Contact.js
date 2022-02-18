import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormContact from "./FormContact";
import theme from "../../theme";


function Contact(){
    return (
        <Container>
            <Typography variant="h2" sx={{display: "block", textAlign: "center"}}>
                <Box color="primary" sx={{display: "block", color: theme.palette.primary.main}}>Vous avez un projet ? </Box>
                Parlons-en
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <FormContact />
                </Grid>
            </Grid>
        </Container>
    )

}

export default Contact