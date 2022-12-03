import React, {useEffect} from "react";
import Header from "../Header/header";
import ProjectDetailContent from "./ProjectDetailContent";

function ProjectDetail(props) {

    const titleHeader = "Mes Réalisations";

    const textHeader = "Graphisme, community management, création de sites web, webredaction, stratégies de" +
        " communication...";

    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div id="main">
            <Header title={titleHeader} text={textHeader} />
            <ProjectDetailContent />
        </div>
    )
}

export default ProjectDetail;