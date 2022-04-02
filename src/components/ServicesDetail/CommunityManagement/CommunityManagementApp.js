import React from "react";
import header from "../../../assets/images/ban1.png";
import data from "../../../assets/data/CommunityManagerData";
import ServiceDetail from "../ServiceDetail";
import leProgres from "../../../assets/images/logo_partenaire/logo-le-progres.png";
import collegePasteur from "../../../assets/images/logo_partenaire/logo_academie-besancon.png";
import trouveTonTransport from "../../../assets/images/logo_partenaire/trouve_ton_transport.jpg";
import maisonTravaux from "../../../assets/images/logo_partenaire/la-maison-logo.png";
import MesPartenaires from "../components/MesPartenaires";

function CommunityManagementApp() {
    const titleHeader = "Votre Freelance en Community Management";

    const textHeader = "Mise en place de vos réseaux sociaux, Stratégie de communication digitale, Gestion &" +
        " Animation, Analyse des résultats & analytics…";

    const title = "Maîtrisez vos réseaux sociaux, et développez votre visibilité sur le web avec un community " +
        "manager freelance créatif !";

    const description = "Il est temps de mettre les réseaux sociaux au centre de votre stratégie de communication!" +
        " 30% des internautes déclarent être influencés par ces plateformes lorsqu’il réalisent un achat. Si " +
        "vous souhaitez développer votre notoriété sur internet et augmenter le trafic sur votre site web. Si " +
        "vous voulez trouver de nouveaux prospects et accroître votre e-réputation. Ou encore si vous chercher à " +
        "être au plus proche de vos clients pour instaurer une relation de confiance. Alors vous devez mettre en " +
        "place une stratégie social media et construire une ligne éditoriale efficace! En tant que community " +
        "manager freelance, je vous accompagne dans cette aventure en mettant à votre disposition mon " +
        "expérience et ma créativité.";

    const imagesPartenaires = [
        {
            src: maisonTravaux,
            alt: "Maison-des-travaux",
            href: "https://lons-le-saunier.lamaisondestravaux.com/",
        },
        {
            src: leProgres,
            alt: "Le-Progrès",
            href: "https://www.leprogres.fr/",
        },
        {
            src: trouveTonTransport,
            alt: "Trouve-ton-transport",
            href: "https://www.trouvetontransport.com/",
        },
        {
            src: collegePasteur,
            alt: "Collège-Pasteur",
            href: "https://clg-pasteur-arbois.eclat-bfc.fr/"
        }
    ]

    return (
        <>
            <ServiceDetail
                imageHeader = {header}
                titleHeader = {titleHeader}
                textHeader = {textHeader}
                title = {title}
                description = {description}
                data = {data}
            />
            <MesPartenaires images={imagesPartenaires} />
        </>
    );
}

export default CommunityManagementApp;
