import React from "react";
import ServiceDetail from "../ServiceDetail";
import {Typography} from "@mui/material";
import vecteurRedactionArticle from "../../../assets/images/services/RedactionArticleWeb.png";
import articleUn from "../../../assets/images/services/Articles.png";
import articleDeux from "../../../assets/images/services/articlesLMDT.png";
import Container from "@mui/material/Container";

function RedactionArticleWeb() {

    const titleHeader = "Votre Rédacteur d'article web";

    const textHeader = "Pour créer une image de marque pertinente et qui vous ressemble. Un logo, une charte graphique," +
        " une identité, ...";

    const altImgPrincipal = "zettydesign freelance rédaction article web";


    const principalText = () => (
            <>
                <Typography paragraph>
                    Web rédacteur, article web, blogging… Une discipline souvent mise de côté, pourtant elle a 2
                    objectifs primordiales pour votre entreprise :
                </Typography>
                <ul>
                    <li>Améliorer votre référencement pour être vu sur les moteurs de recherche</li>
                    <li>Vous placer comme un expert de votre domaine</li>
                </ul>
                <Typography paragraph>
                    J’ai une grande expérience dans la rédaction d’articles : apporter les informations nécessaires,
                    les développer et surtout, les organiser de sorte à faire ressortir les <b>mots clés essentiels</b>.
                </Typography>
                <Typography paragraph>
                    Afin de <b>répondre au mieux aux attentes des moteurs de recherche</b>,
                    les articles feront <b>entre 500 et 700 mots</b>.
                </Typography>
                <Typography paragraph>
                    Je propose mes services de <b>webredacteur</b> de différentes manières :
                </Typography>
                <ul>
                    <li><b>Ponctuel</b> : prix fixé /article</li>
                    <li><b>Pack débutant </b> :1 article /mois</li>
                    <li><b>Pack intermédiaire</b> : 2 articles /mois</li>
                    <li><b>Pack Opti</b> : 1 article /semaine</li>

                </ul>
            </>
)

    return (
        <>
            <ServiceDetail
                titleHeader={titleHeader}
                textHeader={textHeader}
                principalText={principalText()}
                imgPrincipal={vecteurRedactionArticle}
                altImgPrincipal={altImgPrincipal}
            />
            <Container style={{marginBottom: 3}}>
                <img
                    src={articleUn}
                    alt={"rédaction d'articles web"}
                    className="img-fluid"
                />
                <img
                    src={articleDeux}
                    alt={"rédaction d'articles web"}
                    className="img-fluid"
                />
            </Container>
        </>
    );
}

export default RedactionArticleWeb;
