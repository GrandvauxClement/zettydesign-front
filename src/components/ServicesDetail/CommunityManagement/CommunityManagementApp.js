import React from "react";
import header from "../../../assets/images/header.jpg";
import data from "../../../assets/data/CommunityManagerData";
import ServiceDetail from "../ServiceDetail";

function CommunityManagementApp() {
    const titleHeader = "Community manager freelance dans le jura";

    const textHeader = "VMise en place de vos réseaux sociaux, Stratégie de communication digitale, Gestion &" +
        " Animation, Analyse des résultats & analytics…";

    const title = "Maîtrisez vos réseaux sociaux, et développez votre visibilité sur le web avec un community " +
        "manager freelance créatif sur la région Lyonnaise!";

    const description = "Il est temps de mettre les réseaux sociaux au centre de votre stratégie de communication!" +
        " 30% des internautes déclarent être influencés par ces plateformes lorsqu’il réalisent un achat. Si " +
        "vous souhaitez développer votre notoriété sur internet et augmenter le trafic sur votre site web. Si " +
        "vous voulez trouver de nouveaux prospects et accroître votre e-réputation. Ou encore si vous chercher à " +
        "être au plus proche de vos clients pour instaurer une relation de confiance. Alors vous devez mettre en " +
        "place une stratégie social media et construire une ligne éditoriale efficace! En tant que community " +
        "manager freelance, je vous accompagne dans cette aventure en mettant à votre disposition mon " +
        "expérience et ma créativité.";

    return (

        <ServiceDetail
            imageHeader = {header}
            titleHeader = {titleHeader}
            textHeader = {textHeader}
            title = {title}
            description = {description}
            data = {data}
        />
    );
}

export default CommunityManagementApp;
