import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormContact from "./FormContact";
import theme from "../../theme";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {Button} from "@mui/material";


function Contact(){
    return (
        <div className='bg-light pb-5 pt-2' id="contact">
            <Container>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center",
                        my: 4,
                        color: theme.palette.primary.main,
                        fontSize:{xs: '2.3em', md: '3.3em'}
                    }}
                >
                    Vous avez un projet ?
                </Typography>
                {/*<Typography variant="h5" sx={{textAlign: "center", fontSize: "2em"}}>
                    Parlons-en
                </Typography>*/}
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <FormContact />
                    </Grid>

                    <Grid item xs={12} md={6} >
                        <Grid container sx={{alignItems:'center', justifyContent:'center', height: '100%', ml:{xs: 0, md:1} }}>
                            <Grid item xs={12}>
                                <Typography paragraph textAlign="justify">
                                    Vous cherchez un <b> freelance dans la communication</b> ? Je suis la personne
                                    qu’il vous faut !  Je suis basé à <b>Lons-le-saunier </b> dans le Jura mais j’ai également
                                    l’habitude de travailler à distance, je suis flexible et propose mes services
                                    partout en France. Pour tout renseignement ou demande de devis, n'hésitez
                                    pas à me contacter.

                                </Typography>
                            </Grid>

                            <Grid item xs={12} container alignItems="center" direction="column">
                                <Typography variant="h4" sx={{color: "#424242", mb: 2}}>
                                    PAR TÉLÉPHONE (DE PRÉFÉRENCE DU LUNDI AU VENDREDI) :
                                </Typography>
                                <a href="tel:0661633748" >
                                    <Button variant="contained" startIcon={<PhoneIcon />}>
                                        06 61 63 37 48
                                    </Button>
                                </a>
                            </Grid>
                            <Grid item xs={12} container alignItems="center" direction="column">
                                <Typography variant="h4" sx={{color: "#424242", my: 2}}>
                                    PAR E-MAIL (7J/7, LA NUIT, LE JOUR...) :
                                </Typography>

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

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

}

export default Contact