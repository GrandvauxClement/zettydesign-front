import React, {useEffect} from "react";
import Header from "../Header/header";
import Accueil from "../Accueil/accueil";
import header from "../../assets/images/banniere-graph.png";
import headerMobile from "../../assets/images/banMobile.png";
import IndexProject from "../Project";
import {Helmet} from "react-helmet";

function AccueilApp() {
    const title = "Votre Freelance en Communication";
    const text = "Graphisme, community management, création de sites web, webredaction, stratégies de communication..."
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div>
            <Helmet>
                <title>ZettyDesign - Freelance en communication</title>
                <meta name="description" content="ZettyDesign, freelance en communication, propose mes services pour
                vos création graphique, gestion community management, rédaction article web et création de site internet " />
                <meta property="og:title" content={"ZettyDesign - Freelance en communication"} />
                <meta property="og:description" content="ZettyDesign, freelance en communication, propose mes services pour
                vos création graphique, gestion community management, rédaction article web et création de site internet " />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Header header={header} headerMobile={headerMobile} title={title} text={text} />
            <Accueil />
            <IndexProject />
        </div>
    );
}

export default AccueilApp;
