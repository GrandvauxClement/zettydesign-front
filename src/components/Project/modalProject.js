import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from "react";
import Grid from "@mui/material/Grid";
import Carousel from 'react-bootstrap/Carousel'
import Api from "../../api";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import serializeToHtml from "../BackOffice/utils/TextEditor/SerializeToHtml";
import theme from "../../theme";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

const style = {
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalProject = (props) => {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    const description = serializeToHtml({children: props.project.description});
    return(
        <Dialog
            open={props.open}
            onClose={props.onClose}
            scroll='body'
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            fullWidth={true}
            maxWidth="lg"
        >
            <Box >
                <Typography sx={{textAlign: "center", color: theme.palette.primary.main}} variant="h3">
                    {props.project.title}
                </Typography>
                <Grid container spacing={2} sx={{marginTop:2}}>
                    <Grid item md={7} xs={12}>
                        <Carousel fade variant="dark">
                            {props.project.images.map((item,index)=>(
                                <Carousel.Item style={{height: "60vh", width:"100%"}} key={index}>
                                    <img
                                        className="d-block"
                                        style={{objectFit: "contain", objectPosition: "center center", maxHeight:"100%", width:"100%"}}
                                        alt={index+" slide"}
                                        src={`${urlImage}${item}`}
                                    />
                                </Carousel.Item>
                                ))}
                        </Carousel>
                    </Grid>

                    <Grid item md={5} xs={12}>
                        <Typography variant="h5" sx={{fontStyle: 'italic', color: '#ea8d2a'}}>
                            Description
                        </Typography>
                        {/*<Typography id="modal-modal-description" >
                            {description}
                        </Typography>*/}
                        <Box dangerouslySetInnerHTML={{__html: description}} sx={{ mt: 2 }}>

                        </Box>
                        <Typography variant="h5" component="h3" sx={{fontStyle: 'italic', color: '#ea8d2a'}}>
                            Tag
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{flexWrap:"wrap", mt:2}}>
                            {props.project.tag.map((work, index) => (
                                <Chip label={work} key={index} color="primary" sx={{mb:1}} clickable={true}/>
                            ))}
                        </Stack>

                    </Grid>
                </Grid>
                <DialogActions>
                    <Button variant="contained" onClick={props.onClose} sx={{mt: 2}}>
                        Fermer
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
}
export default ModalProject;