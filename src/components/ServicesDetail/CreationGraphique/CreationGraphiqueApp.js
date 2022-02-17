import React from "react";
import header from "../../../assets/images/header.jpg";
import data from "../../../assets/data/CreationGraphiqueServiceDetail";
import ServiceDetail from "../ServiceDetail";

function CreationGraphiqueApp() {
    const titleHeader = "Graphiste freelance dans le jura";

    const textHeader = "Réalisation de vos: logos & chartes graphique, cartes de visite, affiches & plaquettes, brochures, " +
        "goodies, templates social média… avec un graphiste freelance créatif sur la région Lyonnaise!";

    const title = "De la création de votre logo à la réalisation de vos supports de communication, développez votre" +
        "image avec un graphiste freelance!";

    const description = " Une identité visuelle est constituée d’un ensemble d’éléments graphiques permettant à une " +
        "entreprise d’être identifiée par les consommateurs. Grâce à une charte graphique bien respectée, " +
        "une organisation peut maîtriser son identité visuelle et ainsi exprimer au mieux sa personnalité " +
        "et ses valeurs. Logo, carte de visite, signature de mail, brochure, calque photo, supports " +
        "commerciaux, sont autant d’outils qui doivent décliner fidèlement l’identité visuelle pour " +
        "être efficaces.";

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

export default CreationGraphiqueApp;
