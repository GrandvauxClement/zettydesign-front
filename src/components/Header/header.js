import {
     Grid,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
//import header from "../../assets/images/banniere-graph.png";
import header from "../../assets/images/NewBanniere-graph.png";

import headerMobile from "../../assets/images/banMobile.png"

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + header + ')';
   const headerFondMobile = 'url(' + headerMobile + ')';
    //
    return (
            <Box sx={{
                backgroundImage: {xs: headerFondMobile, lg:headerFond},
                backgroundSize: {xs: "contain", sm: "cover",lg: "cover"},
              //  objectFit:"fill",
                backgroundRepeat: "no-repeat",
                height: {xs: "45vh",lg: "550px"},
                mt: {xs:"70px", lg: "0px"}
            }}>
                    <Grid
                        container
                        sx={{
                            height:{xs: "70%", lg: "90%"} ,
                            pl:{xs: 0,lg: "110px"},
                            alignItems: {xs: "center", lg: "end"},
                            justifyContent: {xs: "center", lg: "start"}
                        }}
                    >
                        <Grid item xs={12} md={8}
                              sx={{
                                  display: "flex",
                                  justifyContent: "space-around",
                                  flexDirection: "column"
                              }}
                        >
                            <Typography
                                align="center"
                                variant="h1"
                                sx={{
                                    // fontWeight: {xs: 500, md: 600},
                                    fontSize: {xs: '2.2em', md: '4.1em'},
                                    mb: 3
                                }}
                            >
                                {props.title}
                            </Typography>
                            <Typography
                                align="center"
                                variant="h6"
                                sx={{
                                    mt: 1,
                                    fontSize: {xs: '1.2em', md: '1.5em'},
                                }}
                            >
                                {props.text}
                            </Typography>
                        </Grid>
                    </Grid>
            </Box>
    );
}
export default Header;