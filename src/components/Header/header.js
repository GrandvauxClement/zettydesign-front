import {
     Grid,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import header from "../../assets/images/bann-nue.png";

import headerMobile from "../../assets/images/banMobile.png";
import vecteurHeader from "../../assets/images/vector-header-v2.png"

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + header + ')';
   const headerFondMobile = 'url(' + headerMobile + ')';
    //
    return (
            <Box sx={{
                backgroundImage: {xs: headerFondMobile, lg:headerFond},
                backgroundSize: {xs: "contain", sm: "cover",lg: "cover"},
                backgroundRepeat: "no-repeat",
                height: {xs: "40vh",md: "500px"},
                mt: "70px"
            }}>
                    <Grid
                        container
                        sx={{
                            height:{xs: "70%", lg: "90%"} ,
                            pl:{xs: 0,lg: "210px"},
                            alignItems: {xs: "center", lg: "end"},
                            justifyContent: {xs: "center", lg: "start"}
                        }}
                    >
                        <Grid item xs={12} md={8}
                              sx={{
                                  display: "flex",
                                  height: "100%",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  flexDirection: "column",
                              }}
                        >
                            <Typography
                                align="center"
                                variant="h1"
                                sx={{
                                    // fontWeight: {xs: 500, md: 600},
                                    fontSize: {xs: '2.0em', md: '4.1em'},
                                    width: {xs: "100%", lg:"900px"},
                                    lineHeight: "1.0",
                                    mb: 2
                                }}
                            >
                                {props.title}
                            </Typography>
                            <Typography
                                align="center"
                                variant="h6"
                                sx={{
                                    fontSize: {xs: '0.7em', md: '1.5em'},
                                }}
                            >
                                {props.text}
                            </Typography>
                            <Box sx={{
                                height: {xs: "100px", md:"200px"},
                                position: "absolute",
                                right: {xs: "50px", md:"100px"},
                                top: {xs: "35vh", md:"350px"}
                            }}>
                                <img
                                    src={vecteurHeader}
                                    alt={""}
                                    style={{
                                        height: "100%",
                                    }}
                                />
                            </Box>


                        </Grid>
                    </Grid>
            </Box>
    );
}
export default Header;