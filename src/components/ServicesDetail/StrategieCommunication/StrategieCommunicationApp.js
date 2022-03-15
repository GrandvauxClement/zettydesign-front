import React from "react";
import header from "../../../assets/images/ban1.png";
import data from "../../../assets/data/StrategieCommunicationData";
import ServiceDetail from "../ServiceDetail";

function StrategieCommunicationApp() {
    const titleHeader = "Consultant Communication freelance";

    const textHeader = "Veille concurrentielle & Benchmark, Conseil & Accompagnement, élaboration d’une stratégie" +
        " de communication sur mesure.!";

    const title = "Démarquez-vous de vos concurrents! Faites appel à un consultant communication freelance " +
        "sur la région Lyonnaise.";

    const description = " Dans une situation économique où la concurrence ne cesse de s’intensifier, une " +
        "stratégie de communication de qualité peut permettre à votre entreprise de se démarquer. En externe ou en " +
        "interne, la croissance d’une entreprise s’accompagne d’une stratégie de communication claire et efficace." +
        " Vous souhaitez développer votre business et vous avez besoin d’une véritable stratégie de communication?" +
        " Je vous accompagne dans la création d’un plan d’action adapté aux problématiques de votre marché.";

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

export default StrategieCommunicationApp;
