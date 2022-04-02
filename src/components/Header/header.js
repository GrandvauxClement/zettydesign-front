import {
    Container, Grid,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import header from "../../assets/images/banniere-graph.png";
import headerMobile from "../../assets/images/banMobile.png"
import headerTablette from "../../assets/images/banTablette.png";

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + header + ')';
   const headerFondMobile = 'url(' + headerMobile + ')';
    //
    return (
            <Box sx={{
                backgroundImage: {xs: headerFondMobile, lg:headerFond},
                backgroundSize: {xs: "contain", sm: "cover",lg: "contain"},
              //  objectFit:"fill",
                backgroundRepeat: "no-repeat",
                height: {xs: "45vh",lg: "490px"},
                mt:2
            }}>
             {/*   <Container sx={{height: '100%'}}>*/}
                    <Grid
                        container
                        sx={{
                            height: "90%",
                            pl:{xs: 0,lg: "110px"},
                            alignItems: {xs: "center", lg: "end"},
                            justifyContent: {xs: "center", lg: "start"}
                        }}
                    >
                        <Grid item xs={12} md={8}>
                            <Typography
                                align="center"
                                variant="h1"
                                sx={{
                                    // fontWeight: {xs: 500, md: 600},
                                    fontSize: {xs: '2.5em', md: '4.1em'},
                                }}
                            >
                                {props.title}
                            </Typography>
                            <Typography align="center" variant="h6" sx={{mt: 1}}>{props.text}</Typography>
                        </Grid>
                    </Grid>
               {/* </Container>*/}
            </Box>
    );
}
export default Header;