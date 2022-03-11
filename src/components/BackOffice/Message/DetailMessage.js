import React from "react";
import {Box, Container, Grid, Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function DetailMessage({messageSelected}) {

    return (
        <Box sx={{height: 'auto', minHeight: '80vh', width: '100%', mt: 2}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant="h4">Nom :</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography paragraph>{messageSelected.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h4">Email :</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography paragraph>{messageSelected.email}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h4">Objet :</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography paragraph>{messageSelected.object}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h4">Demande de devis ? :</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        {messageSelected.devis ?
                            <CheckCircleIcon color="success" /> :
                            <CancelIcon color="error"/>
                        }
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4">Message reçu :</Typography>
                        <Typography paragraph>
                            {messageSelected.message}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h4">Message reçu le : </Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography paragraph>{messageSelected.createdAt}</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}