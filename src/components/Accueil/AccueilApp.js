import React, {useEffect} from "react";
import IndexProject from "../Project";
import Header from "../Header/header";
import Accueil from "../Accueil/accueil";
import header from "../../assets/images/header.jpg";

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
