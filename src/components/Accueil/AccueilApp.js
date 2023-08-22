import React, {useEffect} from "react";
import Header from "../Header/header";
import Accueil from "../Accueil/accueil";
import IndexProject from "../Project";

function AccueilApp() {
    const title = "Votre Freelance en Communication";
    const text = "Graphisme - Social Média - Sites Web"
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div>
            <Header title={title} text={text} />
            <Accueil />
            <IndexProject />
        </div>
    );
}

export default AccueilApp;
