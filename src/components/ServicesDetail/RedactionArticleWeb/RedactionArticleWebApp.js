import React from "react";
import header from "../../../assets/images/ban1.png";
import data from "../../../assets/data/CreationGraphiqueServiceDetail";
import ServiceDetail from "../ServiceDetail";

function RedactionArticleWeb() {
    const titleHeader = "Votre Rédacteur d'article web";

    const textHeader = "Pour créer une image de marque pertinente et qui vous ressemble. Un logo, une charte graphique," +
        " une identité, ...";

    const title = "De la création de votre logo à la réalisation de vos supports de communication, développez votre" +
        "image avec un graphiste freelance!";

    const description = 'Web rédacteur, article web, blogging… Une discipline souvent mise de côté, pourtant elle a ' +
    'apport une plus-value primordiales pour votre entrepris';

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

export default RedactionArticleWeb;
