import React from "react";
import ServiceDetail from "../ServiceDetail";
import {Typography} from "@mui/material";
import vecteurCreationSiteWeb from "../../../assets/images/services/websiteBuilding.png";

function CreationSiteWebApp() {
    const titleHeader = "Votre Créateur de site web";

    const textHeader = "Développer votre entreprise sur le web ! Montrez ce que vous faites";

    const altImgPrincipal = "zettydesign freelance créateur site web";

    const principalText = () => (
        <>
            <Typography paragraph>
                Je travaille avec un{" "}
                <a
                    href={"https://www.linkedin.com/in/cl%C3%A9ment-grandvaux-548ab219a/"}
                    target={"_blank"}
                    rel="noreferrer"
                    style={{fontWeight: "bold"}}
                >
                    développeur web
                </a> : un spécialiste du codage qui saura concrétiser vos besoins en
                s’occupant de l’aspect technique.
            </Typography>
            <Typography paragraph>
                Site web responsive, applications…
            </Typography>
            <Typography paragraph>
                <i>
                    On se connaît depuis qu’on est enfant et on a l’habitude de travailler ensemble : une machine à café,
                    des albums de Nujabes et c’est parti !
                </i>
            </Typography>
            <Typography paragraph mt={2}>
                Je m’occupe de la partie design, le choix et la disposition de la charte graphique, la création des
                différentes icônes et la partie UX de votre site. <br/>
                Et aussi : une stratégie de référencement en amont de la création de votre site avec une optimisation du parcours client.
            </Typography>
            <Typography paragraph mt={2}>
                Pour ce travail, nous vous proposerons un devis gratuitement après une prise de brief qui sera adaptée
                à vos besoins et à votre budget.
            </Typography>
            <Typography paragraph mt={2}>
                <i>
                    Notre rémunération se basera sur le temps de travail demandé sur base d’un forfait journalier.
                </i>
            </Typography>

            <Typography paragraph mt={2}>
                Voici les différents sites web que nous avons réalisé :
            </Typography>
            <ul>
                <li>
                    <a href={"https://epicanin.com"} target={"_blank"} rel="noreferrer">
                        epicanin.com
                    </a>
                </li>
                <li>
                    <a href={"https://zettydesign.fr"} target={"_blank"} rel="noreferrer">
                        zettydesign.fr
                    </a>
                </li>
            </ul>

        </>
    );

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
