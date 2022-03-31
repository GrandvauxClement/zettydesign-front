import React from "react";
import Grid from "@mui/material/Grid";
import yoProfil from "../../assets/images/yo_presentation.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Presentation = () => {
    return (
        <>
            <Typography variant="h2"
                        sx={{my: 2, textAlign:{xs: 'center', md: 'left'}}}
                        color="primary"
            >
                <i>Qui suis-je ?</i>
            </Typography>
            <Grid container>
                <Grid item md={3} justifyContent="center" sx={{display: {xs: "none", md: "flex"}}}>
                    <img src={yoProfil} alt="photo de profil" style={{width: 200}}/>
                </Grid>
                <Grid item md={9} xs={12} alignItems="center" sx={{display: "flex"}}>
                    <Box>
                        <Typography paragraph>
                            Je m'appelle Yohann, j’ai 25 ans, je vis entre <b>Lons le Saunier</b> dans le Jura et Lyon et je suis
                            diplômé d’un <b>Master en Communication Digitale</b>. J’ai pu travailler en communication pour de
                            nombreuses entreprises dans des domaines différents : Startup, agence, établissement publics,
                            association.. Cela me permet d’avoir vu de nombreux types de structures avec différents modes
                            de fonctionnement et différents besoins.
                        </Typography>
                        <Typography paragraph>
                            Je suis spécialisé dans la communication web et le graphisme : les réseaux sociaux, créer et
                            référencer vos sites web, web rédacteur, création d’identité de marques, audit et stratégies de
                            communication digitale…
                        </Typography>
                        <Typography paragraph>
                            Je propose des services adaptés à tous les budgets en me basant sur un forfait
                            journalier / horaire : n’hésitez pas à me contacter pour discuter de votre projet ou de vos
                            besoins de communication.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Presentation