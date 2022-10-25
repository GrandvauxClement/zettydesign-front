import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormContact from "./FormContact";
import theme from "../../theme";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {Button} from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Contact(){
    return (
        <div className='bg-light pb-3' id="contact">
            <Container>
                <Typography variant="h2" sx={{textAlign: "center", color: theme.palette.primary.main}}>
                    Vous avez un projet ?
                </Typography>
                <Typography variant="h5" sx={{textAlign: "center", fontSize: "2em"}}>
                    Parlons-en
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <FormContact />
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Grid container sx={{alignItems:'center', justifyContent:'center', height: '100%', ml:{xs: 0, md:1} }}>
                            <Grid item xs={12}>
                                <Typography paragraph textAlign="justify">
                                    Vous cherchez un <b> freelance dans la communication</b> ? Je serais ravie de vous
                                    rencontrer pour en discuter ! Basée à Lons-le-saunier dans le <b>Jura</b>
                                     , je suis flexible et propose mes services <b>partout en France.</b> Pour tout
                                    renseignement ou demande de devis, n'hésitez pas à me contacter...
                                </Typography>
                            </Grid>

                            <Grid item xs={12} container alignItems="center" direction="column">
                                <Typography variant="h6" sx={{color: "#424242", mb: 2}}>
                                    PAR TÉLÉPHONE (DE PRÉFÉRENCE DU LUNDI AU VENDREDI) :
                                </Typography>
                                <a href="tel:0661633748" >
                                    <Button variant="contained" startIcon={<PhoneIcon />}>
                                        06 61 63 37 48
                                    </Button>
                                </a>
                            </Grid>
                            <Grid item xs={12} container alignItems="center" direction="column">
                                <Typography variant="h6" sx={{color: "#424242", my: 2}}>
                                    PAR E-MAIL (7J/7, LA NUIT, LE JOUR...) :
                                </Typography>
                                <Box sx={{display: 'flex'}}>
                                    <a href="https://twitter.com/Zetty_69" className="ms-3">
                                        <TwitterIcon sx={{fontSize: 60, color: theme.palette.primary.main}}/>
                                    </a>
                                    <a href="https://www.instagram.com/yohannfzi/" className="ms-3">
                                        <InstagramIcon sx={{fontSize: 60, color: theme.palette.primary.main}}/>
                                    </a>
                                    <a href="https://fr.linkedin.com/in/yohann-franzetti-9bb714133" className="ms-3">
                                        <LinkedInIcon sx={{fontSize: 60, color: theme.palette.primary.main}}/>
                                    </a>
                                </Box>
                                <a href="mailto:clement.grandvaux@hotmail.com">
                                    <Button
                                        variant="contained"
                                        startIcon={<EmailIcon />}
                                        sx={{
                                          textTransform: 'none'
                                        }}
                                    >
                                        contact@zettydesign.fr
                                    </Button>
                                </a>
                            </Grid>
                           {/* <Grid item container sx={{alignItems:'center', justifyContent:'center'}} xs={12}>
                                <img src={logo} alt="zetty design" style={{height: '200px'}}/>
                            </Grid>*/}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Contact