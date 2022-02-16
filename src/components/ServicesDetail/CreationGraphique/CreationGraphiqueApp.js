import Footer from "../../Footer/footer";
import React from "react";
import Header from "../../Header/header";
import header from "../../../assets/images/header.jpg";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import data from "../../../assets/data/CreationGraphiqueServiceDetail";
import CardService from "../components/CardService";
import Container from "@mui/material/Container";

function CreationGraphiqueApp() {
    const title = "Graphiste freelance dans le jura";
    const text = "Réalisation de vos: logos & chartes graphique, cartes de visite, affiches & plaquettes, brochures, " +
        "goodies, templates social média… avec un graphiste freelance créatif sur la région Lyonnaise!"
    return (

        <div >
            <Header header={header} title={title} text={text} />
            <Container>
                <Typography variant="h3" color="primary" sx={{textAlign:"center"}}>
                    De la création de votre logo à la réalisation de vos supports de communication, développez votre
                    image avec un graphiste freelance!
                </Typography>
                <Typography variant="p" sx={{textAlign: "justify", mt: 2}}>
                    Une identité visuelle est constituée d’un ensemble d’éléments graphiques permettant à une
                    entreprise d’être identifiée par les consommateurs. Grâce à une charte graphique bien respectée,
                    une organisation peut maîtriser son identité visuelle et ainsi exprimer au mieux sa personnalité
                    et ses valeurs. Logo, carte de visite, signature de mail, brochure, calque photo, supports
                    commerciaux, sont autant d’outils qui doivent décliner fidèlement l’identité visuelle pour
                    être efficaces.
                </Typography>
                {data.map((details, index) => (
                    <CardService data={details} key={index}/>
                ))}

            </Container>
        </div>
    );
}

export default CreationGraphiqueApp;
