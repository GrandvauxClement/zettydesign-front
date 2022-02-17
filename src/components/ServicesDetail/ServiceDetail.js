import React from "react";
import Header from "../Header/header";
import header from "../../assets/images/header.jpg";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CardService from "./components/CardService";
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function ServiceDetail(props) {
    return (
        <div >
            <Header header={props.imageHeader} title={props.titleHeader} text={props.textHeader} />
            <Container>
                <Typography variant="h3" color="primary" sx={{textAlign:"center"}}>
                    {props.title}
                </Typography>
                <Typography variant="p" sx={{textAlign: "justify", mt: 2}}>
                    {props.description}
                </Typography>
                <Grid container sx={{justifyContent: "center", display: "flex", my: 3}}>
                    <Button  variant="contained" endIcon={<SpeakerNotesIcon />}>
                        Demander un devis
                    </Button>
                </Grid>
                {props.data.map((details, index) => (
                    <CardService data={details} key={index}/>
                ))}
                <Grid container sx={{justifyContent: "center", display: "flex", my: 3}}>
                    <Button  variant="contained" endIcon={<SpeakerNotesIcon />}>
                        Demander un devis
                    </Button>
                </Grid>


            </Container>
        </div>
    )
}

export default ServiceDetail