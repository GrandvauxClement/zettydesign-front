import React, {useEffect} from "react";
import Header from "../Header/header";
import header from "../../assets/images/ban1.png";
import ProjectDetailContent from "./ProjectDetailContent";
import {Helmet} from "react-helmet";

function ProjectDetail(props) {

    const titleHeader = "Mes Réalisations";

    const textHeader = "Graphisme, community management, création de sites web, webredaction, stratégies de" +
        " communication...";

    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div id="main">
            <Helmet>
                <title>Mes Réalisations - ZettyDesign</title>
                <meta name="description" content="ZettyDesign, freelance en communication, propose mes services pour
                vos création graphique, gestion community management, rédaction article web et création de site internet " />
                <meta property="og:title" content={"Mes Réalisations - ZettyDesign"} />
                <meta property="og:description" content="ZettyDesign, freelance en communication, propose mes services pour
                vos création graphique, gestion community management, rédaction article web et création de site internet " />
                <meta property="og:url" content={window.location.href} />
            </Helmet>
            <Header header={header} title={titleHeader} text={textHeader} />
            <ProjectDetailContent />
        </div>
    )
}

export default ProjectDetail;