import React, {useEffect} from "react";
import Header from "../Header/header";
import Accueil from "../Accueil/accueil";
import header from "../../assets/images/banniere-graph.png";
import headerMobile from "../../assets/images/banMobile.png";
import IndexProject from "../Project";

function AccueilApp() {
    const title = "Votre Freelance en Communication";
    const text = "Graphisme, community management, création de sites web, webredaction, stratégies de communication..."
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div >
            <Header header={header} headerMobile={headerMobile} title={title} text={text} />
            <Accueil />
            <IndexProject />
        </div>
    );
}

export default AccueilApp;
