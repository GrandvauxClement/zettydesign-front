import React from "react";
import ServiceDetail from "../ServiceDetail";
import {Typography} from "@mui/material";
import vecteurCreationSiteWeb from "../../../assets/images/services/websiteBuilding.png";

function CreationSiteWebApp() {
    const titleHeader = "Votre Créateur de site web";

    const textHeader = "Pour créer une image de marque pertinente et qui vous ressemble. Un logo, une charte graphique," +
        " une identité, ...";

    const altImgPrincipal = "zettydesign freelance créateur site web";

    const principalText = () => (
        <>
            <Typography paragraph>
                Texte à faire ! :)
            </Typography>

        </>
    )

    return (
        <ServiceDetail
            titleHeader = {titleHeader}
            textHeader = {textHeader}
            principalText = {principalText()}
            imgPrincipal={vecteurCreationSiteWeb}
            altImgPrincipal={altImgPrincipal}
        />
    );
}

export default CreationSiteWebApp;
