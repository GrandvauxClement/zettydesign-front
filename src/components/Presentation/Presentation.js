import React from "react";
import Grid from "@mui/material/Grid";
import yoProfil from "../../assets/images/yo_photo_profil.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Header from "../Header/header";
import Container from "@mui/material/Container";

const Presentation = () => {
    const title = "Votre Freelance en Communication";
    const text = "Création visuelle, Création de site web, Rédacteur web"
    return (
        <>
            <Header title={title} text={text} />
            <Container sx={{mb: 4}}>
                <Typography variant="h2"
                            sx={{
                                my: 2,
                                mt: 0,
                                textAlign:{xs: 'center', md: 'left'},
                                fontSize:{xs: '2.3em', md: '3.3em'}
                            }}
                            color="primary"
                >
                    Qui suis-je ?
                </Typography>
                <Grid container spacing={2}>
                    <Grid item md={3} justifyContent="center" sx={{display: {xs: "none", md: "flex"}}}>
                        <img src={yoProfil} alt="profil yohann franzetti" className="img-fluid"/>
                    </Grid>
                    <Grid item md={9} xs={12} alignItems="center" sx={{display: "flex"}}>
                        <Box>
                            <Typography paragraph>
                                Je m'appelle Yohann, j’ai 25 ans, je vis entre <b>Lons-le-Saunier</b> dans le Jura et <b>Lyon</b> et je suis
                                diplômé d’un <b>Master en Communication Digitale</b>.
                            </Typography>
                            <Typography paragraph>
                                J’ai pu travailler en communication pour de nombreuses entreprises dans des domaines
                                différents : startup, agences, établissement public, associations.. Cela me permet
                                d’avoir vu de nombreux types de structures avec différents modes de fonctionnement et
                                différents besoins.
                            </Typography>
                            <Typography paragraph>
                                Je suis spécialisé dans le graphisme et la communication web : créer vos identités de
                                marques et supports de communication, gestion de vos réseaux sociaux, création de sites web optimisé,
                                SEO, campagne SEA…
                            </Typography>
                            <Typography paragraph>
                                Je propose des services adaptés à tous les budgets en me basant sur un forfait
                                journalier / horaire : n’hésitez pas à me contacter pour discuter de votre projet ou de
                                vos besoins de communication.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Presentation