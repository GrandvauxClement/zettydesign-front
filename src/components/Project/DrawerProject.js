import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import Grid from "@mui/material/Grid";
import Carousel from "react-bootstrap/Carousel";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Api from "../../api";
import serializeToHtml from "../BackOffice/utils/TextEditor/SerializeToHtml";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DrawerProject = ({project, toggleDrawer, index, otherProjects}) => {
    const urlImage = Api.baseUrl + 'public/images/projets/';
   // const description = serializeToHtml({children: project.description});
    const [description, setDescription] = useState(serializeToHtml({children: project.description}));
    const [tempProject, setTempProject] = useState(project);
    const [tempIndex, setTempIndex] = useState(index);

    const goToPreviousProject = (index) => {
        if (index !== 0){
            setTempProject(otherProjects[tempIndex-1]);
            setTempIndex(tempIndex-1);
        } else {
            setTempProject(otherProjects[otherProjects.length-1]);
            setTempIndex(otherProjects.length-1);
        }
        setDescription(serializeToHtml({children: tempProject.description}));
    }
    const goToNextProject = (index) => {
        if (index !== otherProjects.length-1){
            setTempProject(otherProjects[tempIndex+1]);
            setTempIndex(tempIndex+1);
        } else {
            setTempProject(otherProjects[0]);
            setTempIndex(0);
        }
        setDescription(serializeToHtml({children: tempProject.description}));
    }

    return (
        <Box sx={{width: {xs:'100%', lg:'1000px'}}}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{width: {xs:'100%', lg:'1000px'},
                    // right: {xs: "0", md: "16px"}
                }}
            >
                <Toolbar
                    sx={{display: 'flex',
                        justifyContent: 'space-between'}}
                >
                    <IconButton
                        color="inherit"
                        onClick={(e) =>
                            toggleDrawer("right", false)(e)
                        }
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Box>
                        <Button
                            variant="contained"
                            onClick={() => goToPreviousProject(tempIndex)}
                        >
                            Projet précédent
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => goToNextProject(tempIndex)}
                            sx={{ml: 2}}
                        >
                            Projet Suivant
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: 8}}>

                <Typography sx={{textAlign: "center", color: theme.palette.primary.main, mt: 1}} variant="h2">
                    {tempProject.title}
                </Typography>
                <Grid container spacing={2} sx={{marginTop:2, justifyContent: "space-around"}}>
                    <Grid item md={6} xs={12}>
                        <Carousel fade variant="dark">
                            {tempProject.images.map((item,index)=>(
                                <Carousel.Item style={{height: "60vh", width:"100%"}} key={index}>
                                    <img
                                        className="d-block"
                                        style={{objectFit: "contain", objectPosition: "center center", maxHeight:"100%", width:"100%"}}
                                        alt={`presentation-${tempProject.title}-${index}`}
                                        src={`${urlImage}${item}`}
                                    />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                      {/*  <Masonry columns={2} spacing={0}>
                            {project.images.map((item,index)=>(
                                <Stack>
                                    <img
                                        className="d-block"
                                        style={{objectFit: "contain", objectPosition: "center center", maxHeight:"100%", width:"100%"}}
                                        alt={index+" slide"}
                                        src={`${urlImage}${item}`}
                                    />
                                </Stack>
                            ))}
                        </Masonry>*/}
                    </Grid>

                    <Grid item md={5} xs={12}>

                        <Typography variant="h5" sx={{fontStyle: 'italic', color: '#ea8d2a'}}>
                            Description
                        </Typography>

                        <Box dangerouslySetInnerHTML={{__html: description}} sx={{ mt: 2 }}>

                        </Box>
                        <Typography variant="h5" component="h3" sx={{fontStyle: 'italic', color: '#ea8d2a'}}>
                            Tag
                        </Typography>

                        <Stack direction="row" spacing={0.5} sx={{flexWrap:"wrap", mt:2}}>
                            {tempProject.tag.map((work, index) => (
                                <Chip label={work} key={index} color="primary" sx={{mb:1}} clickable={false}/>
                            ))}
                        </Stack>

                    </Grid>
                </Grid>
                <DialogActions>
                    <Button
                        variant="contained"
                        onClick={(e) =>
                            toggleDrawer("right", false)(e)
                        }
                        sx={{mt: 2}}
                    >
                        Fermer
                    </Button>
                </DialogActions>
            </Container>
        </Box>
    )
}

export default DrawerProject