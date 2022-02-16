import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Api from "../../../api";


function CardService(props) {
    const urlImage = Api.baseUrl + 'public/images/services/'+props.data.image;
    return (
        <Grid container>
            <Grid item xs={12} md={5} lg={3}>
                <img
                    src={urlImage}
                    alt={props.data.title}
                    style={{maxWidth: '100%'}}
                />
            </Grid>
            <Grid item xs={12} md={7} lg={9} sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Typography variant="h3" sx={{fontStyle: "italic", textAlign: "center"}} color="primary">{props.data.title}</Typography>
                <Typography variant="p">{props.data.text}</Typography>
            </Grid>

        </Grid>
    );

}

export default CardService;