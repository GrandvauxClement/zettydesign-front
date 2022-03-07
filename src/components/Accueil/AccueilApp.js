import React, {useEffect} from "react";
import Header from "../Header/header";
import Accueil from "../Accueil/accueil";
import header from "../../assets/images/ban1.png";
import IndexProject from "../Project";

function AccueilApp() {
    const title = "Votre freelance en communication dans tous l'est de la France ";
    const text = "Création de site Internet & référencement naturel, Graphisme, Community Management, Stratégies de communication, .."
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div>
            <Header header={header} title={title} text={text} />

            <Accueil />
            <IndexProject />
        </div>
    );
}

export default AccueilApp;
