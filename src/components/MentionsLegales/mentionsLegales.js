import React from "react";
import {Container, Typography} from "@mui/material";

const MentionsLegales = () => {

    return (
        <Container sx={{mt: 10}}>
            <Typography variant="h1" sx={{ textAlign: "center"}}>
                Mentions Légales
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie
                numérique, il est précisé aux utilisateurs du site ZettyDesign l'identité des différents intervenants
                dans le cadre de sa réalisation et de son suivi.
            </Typography>

            <Typography variant="h3">
                Edition du site
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Le présent site, accessible à l’URL www.zettydesign.fr (le « Site »), est édité par : <br/>
                Clément Grandvaux, résidant 14 boulevard gambetta 39000 Lons-le-saunier, de nationalité Française (France), né(e) le 01/11/1997,
            </Typography>

            <Typography variant="h3">
                Hébergement
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann - BP 80157 - 59053 Roubaix Cedex 1,
                (contact téléphonique ou email : 1007).
            </Typography>

            <Typography variant="h3">
                Directeur de publication
            </Typography>
            <Typography paragraph sx={{mt: 2}}>
                Le Directeur de la publication du Site est Yohann Franzetti.
            </Typography>

            <Typography variant="h3">
                Nous contacter
            </Typography>
            <Typography paragraph>
                Par téléphone : +33661633748 <br/>
                Par email : contact@zettydesign.fr <br/>
                Par courrier : 14 boulevard gambetta 39000 Lons-le-saunier
            </Typography>
            <Typography paragraph>
                Génération des mentions légales par <a href="https://www.legalstart.fr">Legalstart</a>.

            </Typography>
        </Container>
    )

}

export default MentionsLegales