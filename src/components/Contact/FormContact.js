import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";


function FormContact() {
    return (
        <Grid container sx={{display: 'flex', flexDirection: "column"}}>
            <TextField fullWidth variant="filled" label="Votre Nom" id="inputName" name="name" sx={{mt: 2}}/>
            <TextField fullWidth variant="filled" label="Votre Email" id="inputEmail" name="email" sx={{mt: 2}}/>
            <TextField fullWidth multiline rows={6} variant="filled"
                       label="Votre Message" id="inputMessage" name="message" sx={{mt: 2}}
            />
            <div>
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Voulez-vous un devis ?"
                    labelPlacement="start"
                    sx={{mt: 2}}
                />
            </div>

            <Button variant="contained" endIcon={<SpeakerNotesIcon />}>
                Envoyer
            </Button>
        </Grid>

    )
}

export default FormContact