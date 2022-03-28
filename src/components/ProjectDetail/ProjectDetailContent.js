import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import ProjectService from "../../services/project.service";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import ImageMasonry from "../Project/ImageMasonryDisplay";
import Masonry from "@mui/lab/Masonry";
import {Button} from "@mui/material";
import theme from "../../theme";

const ProjectDetailContent = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [buttonSelected, setButtonSelected] = useState("all");

    const getAllProject = () => {
        ProjectService.getAllProject()
            .then((data) => {
                setProjects(data.data);
                setButtonSelected("all");
            })
    }

    const getProjectByKind = (kind) => {
        ProjectService.getProjectByKind(kind)
            .then((data) => {
                setProjects(data.data);
                setButtonSelected(kind);
            })
    }

    useEffect(() => {
       getAllProject();
        setLoading(false);
    }, [])

    return (
        <Container>
            <Grid container sx={{my: 4}} justifyContent="center">
                <Button
                    variant={ buttonSelected === "all" ? "contained": ""}
                    onClick={getAllProject}
                    sx={buttonSelected === "all"?
                        {} : {color: theme.palette.primary.main}}
                >
                    Tous
                </Button>
                <Button
                    variant={ buttonSelected === "Print" ? "contained": ""}
                    sx={buttonSelected === "Print"?
                        {} : {color: theme.palette.primary.main}}
                    onClick={() => getProjectByKind("Print")}
                >
                    Print
                </Button>
                <Button
                    variant={ buttonSelected === "Réseaux Sociaux" ? "contained": ""}
                    sx={buttonSelected === "Réseaux Sociaux"?
                        {} : {color: theme.palette.primary.main}}
                    onClick={() => getProjectByKind("Réseaux Sociaux")}
                >
                    Réseaux Sociaux
                </Button>
                <Button
                    variant={ buttonSelected === "Identité de marque" ? "contained": ""}
                    sx={buttonSelected === "Identité de marque"?
                        {} : {color: theme.palette.primary.main}}
                    onClick={() => getProjectByKind("Identité de marque")}
                >
                    Identité de marque
                </Button>
            </Grid>
            {loading && (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            )}

            {!loading && (
                <Grid>
                    <Masonry columns={3} spacing={1}>
                        {projects.map((item, index) => (
                            <ImageMasonry project={item} key={index}/>
                        ))}
                    </Masonry>
                </Grid>
            )}

        </Container>
    )

}

export default ProjectDetailContent