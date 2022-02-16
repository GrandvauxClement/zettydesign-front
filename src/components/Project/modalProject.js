import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Carousel from 'react-bootstrap/Carousel'
import Api from "../../api";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "70vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalProject = (props) => {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    return(
        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography sx={{textAlign: "center"}} variant="h4" component="h2">
                    {props.project.title}
                </Typography>
                <Grid container spacing={2} sx={{marginTop:2}}>
                    <Grid item md={8} xs={12}>
                        <Carousel fade variant="dark">
                            {props.project.images.map((item,index)=>(
                                <Carousel.Item style={{height: "60vh", width:"100%"}} key={index}>
                                    <img
                                        className="d-block"
                                        style={{objectFit: "contain", objectPosition: "center center", maxHeight:"100%", width:"100%"}}
                                        alt={index+" slide"}
                                        src={`${urlImage}${item}`}/>
                                </Carousel.Item>
                                ))}

                        </Carousel>
                    </Grid>

                    <Grid item md={4} xs={12}>
                        <Typography variant="h5" component="h3" sx={{fontStyle: 'italic', color: '#ea8d2a'}}>
                            Description
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {props.project.description}
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{flexWrap:"wrap", mt:2}}>
                            {props.project.workState.map((work, index) => (
                                <Chip label={work} key={index} color="primary" sx={{mb:1}} clickable={true}/>
                            ))}
                        </Stack>

                    </Grid>
                </Grid>
                <Button variant="contained" onClick={props.onClose} sx={{mt: 2}}>
                    Fermer
                </Button>
            </Box>
        </Modal>
    );
}
export default ModalProject;