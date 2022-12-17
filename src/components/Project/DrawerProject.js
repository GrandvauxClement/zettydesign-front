import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import theme from "../../theme";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import serializeToHtml from "../BackOffice/utils/TextEditor/SerializeToHtml";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {urlAwsImageStorage} from "../../constant/globalConstant";
import Carousel from "react-material-ui-carousel";
import CircularProgress from "@mui/material/CircularProgress";

const DrawerProject = ({project, toggleDrawer, index, otherProjects}) => {

    const isMobileView = window.innerWidth < 500;
    const [tempProject, setTempProject] = useState(project);
    const [tempIndex, setTempIndex] = useState(index);

    const goToPreviousProject = async (index) => {
        if (index !== 0) {
            await setTempProject(otherProjects[tempIndex - 1]);
            await setTempIndex(tempIndex - 1);
        } else {

            await setTempProject(otherProjects[otherProjects.length - 1]);
            await setTempIndex(otherProjects.length - 1);
        }
    }
    const goToNextProject = (index) => {

        if (index !== otherProjects.length - 1) {
            setTempProject(otherProjects[tempIndex + 1]);
            setTempIndex(tempIndex + 1);
        } else {
            setTempProject(otherProjects[0]);
            setTempIndex(0);
        }
    }

    return (
        <Box sx={{width: {xs: '100%', lg: '1000px'}}}>
            <AppBar
                position="fixed"
                color="primary"
                sx={{
                    width: {xs: '100%', lg: '1000px'},
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <IconButton
                        color="inherit"
                        onClick={(e) =>
                            toggleDrawer("right", false)(e)
                        }
                    >
                        <ArrowBackIcon/>
                    </IconButton>
                    <Box>
                        <Button
                            variant="contained"
                            onClick={() => goToPreviousProject(tempIndex)}
                        >
                            Précédent
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => goToNextProject(tempIndex)}
                            sx={{ml: 2}}
                        >
                            Suivant
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Container sx={{mt: 10}}>

                <Typography sx={{textAlign: "center", color: theme.palette.primary.main, mt: 3}} variant="h2">
                    {tempProject.title}
                </Typography>
                <Grid container spacing={2} sx={{marginTop: 2, justifyContent: "space-around"}}>
                    <Grid item md={6} xs={12}>
                        <Carousel
                            autoPlay={true}
                            navButtonsAlwaysVisible={!isMobileView}
                            swipe={true}
                            animation="slide"
                            duration="1000"
                            indicatorIconButtonProps={{
                                style: {
                                    padding: "5px", // 1
                                    color: "rgba(245,245,248,0.8)", // 3
                                    zIndex: 10,
                                },
                            }}
                            activeIndicatorIconButtonProps={{
                                style: {
                                    color: "#FFFFFF",
                                },
                            }}
                            indicatorContainerProps={{
                                style: {
                                    background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.25))",
                                    zIndex: 9,
                                    position: "absolute",
                                    marginTop: "-30px", // 5
                                    textAlign: "center", // 4
                                },
                            }}
                        >
                            {tempProject.images.map((item, index) => (
                                <img
                                    key={index}
                                    className="d-block"
                                    style={{
                                        objectFit: "contain",
                                        objectPosition: "center center",
                                        maxHeight: "100%",
                                        width: "100%"
                                    }}
                                    alt={`presentation-${tempProject.title}-${index}`}
                                    src={`${urlAwsImageStorage}${item}`}
                                />
                            ))}
                        </Carousel>

                    </Grid>

                    <Grid item md={5} xs={12}>

                        <Typography variant="h3" sx={{color: theme.palette.primary.main}}>
                            Description
                        </Typography>

                        <Box dangerouslySetInnerHTML={{__html: serializeToHtml({children: tempProject.description})}}
                             sx={{mt: 2}}>

                        </Box>
                        <Typography variant="h3" component="h3" sx={{color: theme.palette.primary.main}}>
                            Tag
                        </Typography>

                        <Stack direction="row" spacing={0.5} sx={{flexWrap: "wrap", mt: 2}}>
                            {tempProject.tag.map((work, index) => (
                                <Chip label={work} key={index} color="primary" sx={{mb: 1}} clickable={false}/>
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