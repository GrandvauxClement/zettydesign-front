import React from "react";
import ServiceDetail from "../ServiceDetail";
import Api from "../../../api";
import {Typography} from "@mui/material";

function CreationGraphiqueApp() {
    const titleHeader = "Votre Graphiste freelance";

    const textHeader = "Pour créer une image de marque pertinente et qui vous ressemble. Un logo, une charte graphique," +
        " une identité, ...";

    const imgPrincipal = `${Api.baseUrl}public/images/services/creationGraphique.png`;

    const altImgPrincipal = "zettydesign freelance design graphique";

    const principalText = () => (
        <>
            <Typography paragraph>
                Créer une image de marque : un logo, une carte graphique, une identité. Le but étant de créer quelque
                chose qui vous ressemble et qui a du sens par rapport à votre secteur d’activité et ce que vous proposez.
            </Typography>
            <Typography paragraph>
                <i>Créons ensemble une marque qui vous ressemble ! </i>
            </Typography>
            <Typography paragraph>
                Je propose également la <b>création de supports de communication</b> display et print : flyers, affiches,
                carte de visite, bannière web, publication réseaux sociaux, montage photo…
            </Typography>
            <Typography paragraph>
                Je peux également créer l’habillage de vos chaîne Youtube et vos assets Twitch !
            </Typography>
        </>
    )

    return (

        <ServiceDetail
            titleHeader = {titleHeader}
            textHeader = {textHeader}
            imgPrincipal={imgPrincipal}
            principalText={principalText()}
            altImgPrincipal={altImgPrincipal}
        />
    );
}

export default CreationGraphiqueApp;
