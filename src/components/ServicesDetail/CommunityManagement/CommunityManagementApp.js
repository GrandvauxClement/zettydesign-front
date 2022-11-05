import React from "react";
import ServiceDetail from "../ServiceDetail";
import {Typography} from "@mui/material";
import vecteurCommunityManagement from "../../../assets/images/services/communityManagement.png";

function CommunityManagementApp() {
    const titleHeader = "Votre Freelance en Community Management";

    const textHeader = "Mise en place de vos réseaux sociaux, Stratégie de communication digitale, Gestion &" +
        " Animation, Analyse des résultats & analytics…";

    const altImgPrincipal = "zettydesign freelance community management";

    const principalText = () => (
        <>
            <Typography paragraph>
                Une de mes spécialités !
            </Typography>
            <Typography paragraph>
                Évaluer vos besoins : qui vous ciblez ? Ensuite, définir les réseaux sociaux pertinents et les
                messages à y passer. Créer les contenus adaptés à chaque réseau ! Et pour cela, définir une stratégie
                social média : créer une ligne éditoriale, programmer les publications aux heures les plus pertinentes,
                les organiser stratégiquement et surtout : une analyse précise des performances pour les optimiser.
            </Typography>
            <Typography paragraph>
                Je peux m’occuper de tout, ou seulement de certains aspects : c’est comme vous le souhaitez !
            </Typography>
            <Typography paragraph>
                Je propose aussi des services de consultation : analyser précisément vos réseaux pour vous fournir un
                rapport détaillé et compréhensible avec des préconisations pour améliorer votre communication.
            </Typography>
            <Typography paragraph>
                (S’il vous plaît, ne faites plus les mêmes posts sur tous les réseaux, ils ne fonctionnent pas de la même façon !)
            </Typography>
        </>
    )

    return (
        <>
            <ServiceDetail
                titleHeader = {titleHeader}
                textHeader = {textHeader}
                imgPrincipal={vecteurCommunityManagement}
                principalText={principalText()}
                altImgPrincipal={altImgPrincipal}
            />
        </>
    );
}

export default CommunityManagementApp;
