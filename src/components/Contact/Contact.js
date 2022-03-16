import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormContact from "./FormContact";
import theme from "../../theme";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/images/logoFondTransparent.png';


function Contact(){
    return (
        <div className='bg-light pb-3' id="contact">
            <Container>
                <Typography variant="h2" sx={{display: "block", textAlign: "center"}}>
                    <Box color="primary" sx={{display: "block", color: theme.palette.primary.main}}>Vous avez un projet ? </Box>
                    Parlons-en
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={8} md={6}>
                        <FormContact />
                    </Grid>

                    <Grid item xs={12} sm={4} md={6} >
                        <Grid container sx={{alignItems:'center', justifyContent:'center', height: '100%', ml: 4}}>
                            <Grid item container sx={{alignItems:'center', justifyContent:'center'}} xs={12}>
                                <img src={logo} alt="zetty design" style={{height: '200px'}}/>
                            </Grid>
                            <Grid item xs={12} container>
                                <EmailIcon sx={{fontSize: 40, color: theme.palette.primary.main}}/>
                                <Typography variant='h5' sx={{ml: 2}} color='primary.main'>
                                    yoyo--mail@gmail.com
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container>
                                <PhoneIcon sx={{fontSize: 40, color: theme.palette.primary.main}}/>
                                <Typography sx={{ml: 2}} variant='h5' color='primary.main'>
                                    0606060606
                                </Typography>
                            </Grid>
                            <Grid item xs={12} container sx={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                                <Typography variant='h5' color='primary.main'>
                                    Suivez-moi sur mes réseaux
                                </Typography>
                                <Box sx={{display: 'flex'}}>
                                    <a href="https://www.facebook.com" className="ms-3">
                                        <FacebookIcon sx={{fontSize: 60, color: theme.palette.primary.main}}/>
                                    </a>
                                    <a href="https://www.facebook.com" className="ms-3">
                                        <InstagramIcon sx={{fontSize: 60, color: theme.palette.primary.main}}/>
                                    </a>
                                    <a href="https://www.facebook.com" className="ms-3">
                                        <LinkedInIcon sx={{fontSize: 60, color: theme.palette.primary.main}}/>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Contact