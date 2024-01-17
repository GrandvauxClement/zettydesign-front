import React from "react";
import {Container, Typography} from "@mui/material";

function PolitiqueToolyGame() {

    return (
        <Container sx={{mt: 10}}>
            <Typography variant="h1" sx={{ textAlign: "center"}}>
                Politique de confidentialité
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Date d'effet : 01/01/2024 <br/>
                Bienvenue sur Tooly Game !
                Cette politique de confidentialité décrit comment cette application collecte, utilise et partage les
                informations personnelles que vous nous fournissez lorsque vous utilisez Tooly Game.
            </Typography>

            <Typography variant="h3">
                Informations que nous collectons
            </Typography>
            <Typography variant="h5">
                Informations fournies par l'utilisateur
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Lorsque vous utilisez Tooly Game, il se peut que nous vous demandions de fournir certaines informations
                personnelles identifiables, y compris, mais sans s'y limiter, votre nom, votre adresse e-mail et d'autres
                informations de contact. Ces informations sont utilisées dans le but de personnaliser votre expérience
                avec notre application.
            </Typography>

            <Typography variant="h5">
                Données d'utilisation
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Nous pouvons également collecter des informations sur la manière dont vous accédez et utilisez Tooly Game,
                telles que les pages que vous consultez, le temps passé sur chaque page et d'autres statistiques relatives
                à votre utilisation de l'application.
            </Typography>

            <Typography variant="h3">
                Comment nous utilisons les informations
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Les informations que nous collectons sont utilisées pour améliorer Tooly Game et personnaliser votre
                expérience. Ces informations peuvent également être utilisées pour vous contacter au sujet des mises
                à jour de l'application, des offres promotionnelles et d'autres informations qui pourraient vous
                intéresser.
            </Typography>

            <Typography variant="h3">
                Divulgation des informations à des tiers
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Nous ne vendons ni ne louons vos informations personnelles à des tiers.
                Cependant, nous pouvons partager vos informations avec des partenaires de confiance pour nous
                aider à exploiter Tooly Game et à vous fournir des services.
            </Typography>

            <Typography variant="h3">
                Sécurité
            </Typography>
            <Typography paragraph>
                La sécurité de vos informations personnelles est importante pour nous, mais rappelez-vous qu'aucune
                méthode de transmission sur Internet ni méthode de stockage électronique n'est sécurisée à 100 %.
                Nous nous efforçons d'utiliser des moyens commercialement acceptables pour protéger vos informations
                personnelles, mais nous ne pouvons garantir leur sécurité absolue.
            </Typography>

            <Typography variant="h3">
                Modifications de cette politique de confidentialité
            </Typography>
            <Typography paragraph>
                Nous nous réservons le droit de mettre à jour notre politique de confidentialité de temps à autre.
                Nous vous informerons de toute modification en publiant la nouvelle politique de confidentialité sur cette page.
            </Typography>

            <Typography variant="h3">
                Contactez-nous
            </Typography>
            <Typography paragraph>
                Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité,
                n'hésitez pas à nous contacter à clement.gradv@gmail.com (Développeur principal : GRANDVAUX Clément).
                <b>En utilisant Tooly Game, vous consentez à notre politique de confidentialité.</b>
            </Typography>
        </Container>
    )
}

export default PolitiqueToolyGame