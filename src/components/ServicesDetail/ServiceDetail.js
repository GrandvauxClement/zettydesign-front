import React, {useEffect} from "react";
import Header from "../Header/header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MesPartenaires from "./components/MesPartenaires";
import maisonTravaux from "../../assets/images/logo_partenaire/la-maison-logo.png";
import epicanin from "../../assets/images/logo_partenaire/epicanin.png";
import trouveTonTransport from "../../assets/images/logo_partenaire/trouve_ton_transport.jpg";
import collegePasteur from "../../assets/images/logo_partenaire/logo_academie-besancon.png";

function ServiceDetail({titleHeader, textHeader, principalText, imgPrincipal, altImgPrincipal, specialComponent = null}) {

    const imagesPartenaires = [
        {
            src: maisonTravaux,
            alt: "Maison des travaux",
            href: "https://lons-le-saunier.lamaisondestravaux.com/",
        },
        {
            src: epicanin,
            alt: "Epicanin",
            href: "https://www.epicanin.com/",
        },
        {
            src: trouveTonTransport,
            alt: "Trouve ton transport",
            href: "https://www.trouvetontransport.com/",
        },
        {
            src: collegePasteur,
            alt: "Collège Pasteur Arbois Jura",
            href: "https://clg-pasteur-arbois.eclat-bfc.fr/"
        }
    ];

    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div id="main">
            <Header title={titleHeader} text={textHeader} />
            <Container>

                <Grid container sx={{mb: 4}} spacing={2}>
                    <Grid item xs={12} md={4}>
                        <img
                            src={imgPrincipal}
                            alt={altImgPrincipal}
                            className="img-fluid"
                        />
                    </Grid>
                    <Grid item xs={12} md={7} container flexDirection="column" justifyContent="center">
                        {principalText}
                    </Grid>
                </Grid>
                {specialComponent}
                <MesPartenaires images={imagesPartenaires} />
            </Container>
        </div>
    )
}

export default ServiceDetail