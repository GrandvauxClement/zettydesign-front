import {
     Grid,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import header from "../../assets/images/bann-nue.png";
import theme from "../../theme";

import headerMobile from "../../assets/images/banMobile.png";
import vecteurHeader from "../../assets/images/vector-header-v2.png";

const Header = (props) => {
  //  const headerFond = 'linear-gradient(rgba(42,177,234,0.44), rgba(42,177,234,0.44)), url(' + props.header + ') no-repeat center center / cover'
   const headerFond = 'url(' + header + ')';
   const headerFondMobile = 'url(' + headerMobile + ')';
    //
    return (
            <Box sx={{
                backgroundImage: {xs: headerFondMobile, lg:headerFond},
                backgroundSize: {xs: "contain", sm: "contain",lg: "cover"},
                backgroundRepeat: "no-repeat",
                height: {xs: "35vh",md: "500px"},
                mt: "70px",
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)"
            }}>
                    <Grid
                        container
                        sx={{
                            height:{xs: "70%", lg: "90%"} ,
                            pl:{xs: 0,lg: "210px"},
                            pt: 10,
                            alignItems: {xs: "center", lg: "end"},
                            justifyContent: {xs: "center", lg: "start"}
                        }}
                    >
                        <Grid item xs={8} md={12}
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
                                  //  position : {xs : 'absolute', md: 'flex'},
                                    fontSize: {xs: '1.4em', md: '4.1em'},
                                    width: {xs: "100%", lg:"800px"},
                                    lineHeight: "1.0",
                                    mb: 1,
                                    zIndex: 2
                                }}
                            >
                                {props.title}
                            </Typography>
                            <Typography
                                align="center"
                                variant="h2"
                                sx={{
                                    fontSize: {xs: '0.7em', md: '1.5em'},
                                    color: theme.palette.primary.main,
                                    zIndex: 2,
                                    width: "60%"
                                }}
                            >
                                {props.text}
                            </Typography>
                            <Box sx={{
                                height: {xs: "110px", md:"45vh"},
                                position: "absolute",
                                right: {xs: "-12px", md:"0vw", xl: "5vw"},
                                top: {xs: "24vh", md:"20vh", xl: "10vh"}
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