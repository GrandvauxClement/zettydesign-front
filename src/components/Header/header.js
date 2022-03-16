import {
    Container, Grid,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + props.header + ')';
   const headerFondMobile = 'url(' + props.header + ')';

    return (
            <Box sx={{
                backgroundImage: {xs: headerFondMobile, md:headerFond},
                backgroundSize: {xs: "auto, 65vh",md: "99vw, auto"},
                backgroundRepeat: "no-repeat"
            }}>
                <Container sx={{height: '65vh', display: "flex", alignItems: "center"}}>
                    <Grid container item xs={12} md={9}>
                        <Typography align="center" variant="h1"
                                    sx={{
                                       // fontWeight: {xs: 500, md: 600},
                                        fontSize: {xs: '2.5em', md: '4.1em'},
                                    }}>{props.title}</Typography>
                        <Typography align="center" variant="h5" >{props.text}</Typography>
                    </Grid>
                </Container>
            </Box>
    );
}
export default Header;