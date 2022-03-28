import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import MessageService from "../../services/message.service";

function FormContact() {
    const [message, setMessage] = useState({
        name: "",
        email: "",
        message: "",
        devis: false
    });
    const [submit, setSubmit] = useState(false);
    const [validateEmaill, setValidateEmail] = useState(true);

   const validate = () =>{
       if ( /\S+@\S+\.\S+/.test(message.email) ){
           setValidateEmail(true);
           console.log("C GOOD ! :)")
       }else {
           console.log("je passe la ")
           setValidateEmail(false);
       }
       if ( validateEmaill && message.email.length > 6 && message.message.length > 10){
           setSubmit(true);
       } else {
           setSubmit(false);
       }
    }

    const sendMessage = () => {
        MessageService.postMessage(message);
    }

    const handleInputValue = (e) => {
        // this function will be triggered by the text field's on blur and or onChanges events
        validate();
        const {name, value} = e.target;
        if (name === 'devis'){
            setMessage({
                ...message,
                ['devis']: !message.devis
            });
        }else {
            setMessage({
                ...message,
                [name]: value
            });
        }
    }
    return (
        <Grid container sx={{display: 'flex', flexDirection: "column"}}>

            <TextField fullWidth variant="filled" label="Votre Email" id="inputEmail" name="email"
                       sx={{mt: 2}} onChange={handleInputValue}
                       {...(!validateEmaill &&{
                           error: true,
                           helperText: "Veuillez saisir un email valide"
                       })}
                       />

            <TextField fullWidth variant="filled" label="Votre Nom" id="inputName" name="name"
                       onChange={handleInputValue} sx={{mt: 2}}/>
            <TextField fullWidth multiline rows={6} variant="filled" onChange={handleInputValue}
                       label="Votre Message" id="inputMessage" name="message" sx={{mt: 2}}
            />
            <div>
                <FormControlLabel
                    value="start"
                    control={<Switch name="devis" color="primary"  onChange={handleInputValue}/>}
                    label="Voulez-vous un devis ?"
                    labelPlacement="start"
                    sx={{mt: 2}}
                />
            </div>

            <Button disabled={!submit} variant="contained" endIcon={<SpeakerNotesIcon />}
                   sx={{mt: 1}} onClick={sendMessage}>
                Envoyer
            </Button>
        </Grid>

    )
}

export default FormContact