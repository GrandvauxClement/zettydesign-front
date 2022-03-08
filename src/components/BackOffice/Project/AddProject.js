import React, {useState} from "react";
import {Box, Container, FormControl, Grid, Paper, Typography, InputLabel, Select, MenuItem, Alert} from "@mui/material";
import theme from "../../../theme";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextEditor from "../utils/TextEditor/TextEditor";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MultipleUpload from "../utils/UploadFiles";
import {
    stringIsValid,
    arrayIsValid,
    createdAtIsValid,
} from "../utils/isValid";
import axios from "axios";
import ProjectService from "../../../services/project.service";

export default function AddProject({setPageToDisplay}){
    const [newProject, setNewProject] = useState({
        title: '',
        description: [
            {
                type: 'paragraph',
                children: [
                    { text: '' },
                ],
            }
        ],
        tag: [],
        images: [],
        createdAt: null,
        type: '',
        videoLink: ''
    });

    const [titleIsInvalid, setTitleIsInvalid]= useState(false);
    const [tagIsInvalid, setTagIsInvalid]= useState(false);
    const [imagesIsInvalid, setImagesIsInvalid]= useState(false);
    const [createdAtIsInvalid, setCreatedAtIsInvalid]= useState(false);
    const [typeIsInvalid, setTypeIsInvalid]= useState(false);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setNewProject({
            ...newProject,
            [name]: value
        })
    }

    const checkBeforeSubmit = () => {
        let errorFound = false;
        if (!stringIsValid(newProject.type)){
            errorFound = true;
            setTypeIsInvalid(true);
        }
        if (!stringIsValid(newProject.title)){
            errorFound = true
            setTitleIsInvalid(true);
        }else{
            setTitleIsInvalid(false);
        }
        if (!arrayIsValid(newProject.tag)){
            errorFound = true
            setTagIsInvalid(true);
        }
        if (!createdAtIsValid(newProject.createdAt)){
            errorFound = true
            setCreatedAtIsInvalid(true);
        }
        if (!arrayIsValid(newProject.images)){
            errorFound = true;
            setImagesIsInvalid(true);
        }

        return errorFound
    }
    const handleSubmit = () => {
        // Je vérifie que toute les data sont bonnes
        if (! checkBeforeSubmit()){
            // Upload on a first Time all images
            const formUploadData = new FormData();
            newProject.images.forEach(file => formUploadData.append('multipleImages', file));
            axios.post('http://localhost:9000/api/project/multiple-upload', formUploadData)
                .then((newFileName) => {
                    // If upload good, create newproject
                   ProjectService.addProject(newProject, newFileName.data)
                        .then((res)=> {
                            // Add project done redirect to index and display popup to say is good
                            setPageToDisplay();
                        })
                })
                .catch((error) => {
                    //TODO :Display error if upload don t work
                    console.log(error)
                });
        }
    }
    return (
        <Paper elevation={3} sx={{position: "relative", mt: "5px"}}>
            <Box sx={{height: 'auto'}}>
                <Paper elevation={10} sx={{
                    backgroundColor: theme.palette.primary.main,
                    mx: 4,
                    mt: "-20px",
                    p:2,
                }}>
                    <Typography variant="h1" color="white">Ajouter un nouveau Projets</Typography>
                    <Typography paragraph color="white">Remplissez les champs suivants</Typography>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={setPageToDisplay}
                    >
                        Retour au Tableau des projets
                    </Button>
                </Paper>

                <Box sx={{height: 'auto', minHeight: '80vh', width: '100%', mt: 2}}>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="filled" error={typeIsInvalid}>
                                    <InputLabel id="type-de-projet-label">Type de projet</InputLabel>
                                    <Select
                                        labelId="type-de-projet-label"
                                        id="type-de-projet"
                                        value={newProject.type}
                                        label="Type de Projet"
                                        name="type"
                                        onChange={handleChange}

                                    >
                                        <MenuItem value="Réseaux Sociaux"> Réseaux Sociaux</MenuItem>
                                        <MenuItem value="Print">Print</MenuItem>
                                        <MenuItem value="Identité de marque">Identité de marque</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant="filled"
                                    id="title"
                                    label="Titre"
                                    name="title"
                                    fullWidth
                                    value={newProject.title}
                                    onChange={handleChange}
                                    error={titleIsInvalid}
                                    required
                                    helperText={
                                        titleIsInvalid &&
                                        "Un projet doit posséder un titre"
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextEditor
                                    placeholder="Description *"
                                    value={newProject.description}
                                    setValue={(value) => setNewProject({
                                        ...newProject,
                                        description: value
                                    })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    multiple
                                    id="tags-filled"
                                    options={newProject.tag.map((option) => option)}
                                    freeSolo
                                    onChange={(event, newValue) => {
                                        setNewProject({
                                            ...newProject,
                                            tag: newValue
                                        })
                                        arrayIsValid(newValue) ?
                                            setTagIsInvalid(false) :
                                            setTagIsInvalid(true)
                                    }}
                                    name="tag"
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="filled"
                                            label="Tag"
                                            required
                                            placeholder="Ajoute tes tags représentant ton projects"
                                            error={tagIsInvalid}
                                            helperText={tagIsInvalid && "Renseigne au minimum 3 tag"}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Créer le"
                                        value={newProject.createdAt}
                                        onChange={(newValue) => {
                                            setNewProject({
                                                ...newProject,
                                                createdAt: newValue
                                            })
                                            createdAtIsValid(newValue) ?
                                                setCreatedAtIsInvalid(false):
                                                setCreatedAtIsInvalid(true)
                                        }}
                                        renderInput={(params) =>
                                            <TextField
                                                {...params}
                                                error={createdAtIsInvalid}
                                                helperText={createdAtIsInvalid && "Saisie une date"}
                                            />
                                        }
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant="filled"
                                    id="videoLink"
                                    label="Lien vidéo"
                                    name="videoLink"
                                    fullWidth
                                    value={newProject.videoLink}
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <MultipleUpload
                                    updateFiles={(value) =>{
                                        setNewProject({
                                            ...newProject,
                                            images: value
                                        })
                                        arrayIsValid(value) ?
                                            setImagesIsInvalid(false):
                                            setImagesIsInvalid(true)
                                    }}
                                    files={newProject.images}
                                    test={<h1>Je test</h1>}
                                />
                                {imagesIsInvalid &&
                                    <Alert severity="error">Fais un effort Yo, ton projet doit avoir min 3 images!</Alert>
                                    }
                            </Grid>
                            <Button
                                sx={{my: 3}}
                                variant="contained"
                                color="secondary"
                                onClick={handleSubmit}
                            >
                                Créer mon nouveau projet
                            </Button>
                        </Grid>
                    </Container>

                </Box>
            </Box>
        </Paper>
    );
}