import React, {useEffect} from "react";
import Header from "../Header/header";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardService from "./components/CardService";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ServiceDetail(props) {
    useEffect(() => {
        window.scrollTo(0,0);
    })
    return (
        <div id="main">
            <Header header={props.imageHeader} title={props.titleHeader} text={props.textHeader} />
            <Container>
                <Typography variant="h3" color="primary" sx={{textAlign:"center", mt: 3}}>
                    {props.title}
                </Typography>
                <Grid container sx={{justifyContent: "center", display: "flex", mt: 3}}>
                    <a href="#contact">
                        <Button  variant="contained" endIcon={<SpeakerNotesIcon />}>
                            Demander un devis
                        </Button>
                    </a>
                </Grid>
                {props.data.map((details, index) => (
                    <CardService data={details} key={index}/>
                ))}
                <Grid container sx={{justifyContent: "center", display: "flex", my: 3}}>
                    <a href="#contact">
                        <Button  variant="contained" endIcon={<SpeakerNotesIcon />}>
                            Demander un devis
                        </Button>
                    </a>
                </Grid>


            </Container>
        </div>
    )
}

export default ServiceDetail