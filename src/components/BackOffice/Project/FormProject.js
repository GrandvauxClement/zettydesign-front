import React, {useState} from "react";
import {Box, Container, FormControl, Grid, InputLabel, Select, MenuItem, Alert} from "@mui/material";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import frLocale from "date-fns/locale/fr";
import TextEditor from "../utils/TextEditor/TextEditor";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {GlobalMultipleImagesUpload} from "../utils/UploadFiles";
import {
    stringIsValid,
    arrayIsValid,
    createdAtIsValid,
    imageArrayEditIsValid
} from "../utils/isValid";

export default function FormProject({project, setProject, onSubmit, newImages = null, setNewImages = null}) {

    const [titleIsInvalid, setTitleIsInvalid] = useState(false);
    const [tagIsInvalid, setTagIsInvalid] = useState(false);
    const [imagesIsInvalid, setImagesIsInvalid] = useState(false);
    const [createdAtIsInvalid, setCreatedAtIsInvalid] = useState(false);
    const [typeIsInvalid, setTypeIsInvalid] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setProject({
            ...project,
            [name]: value
        })
    }

    const checkBeforeSubmit = () => {
        let errorFound = false;
        if (!stringIsValid(project.type)) {
            errorFound = true;
            setTypeIsInvalid(true);
        }
        if (!stringIsValid(project.title)) {
            errorFound = true
            setTitleIsInvalid(true);
        } else {
            setTitleIsInvalid(false);
        }
        if (!arrayIsValid(project.tag)) {
            errorFound = true
            setTagIsInvalid(true);
        }
        if (!createdAtIsValid(project.createdAt)) {
            errorFound = true
            setCreatedAtIsInvalid(true);
        }
        if (newImages == null){
            if (!arrayIsValid(project.images)) {
                errorFound = true;
                setImagesIsInvalid(true);
            }
        }else {
            if (!imageArrayEditIsValid(project.images, newImages)){
                errorFound = true;
                setImagesIsInvalid(true);
            }
        }


        return errorFound
    }
    const handleSubmit = () => {
        // Je vérifie que toute les data sont bonnes
        if (!checkBeforeSubmit()) {
            // Upload on a first Time all images
           onSubmit();
        }
    }
    return (
        <Box sx={{height: 'auto', minHeight: '80vh', width: '100%', mt: 2}}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth variant="filled" error={typeIsInvalid}>
                            <InputLabel id="type-de-projet-label">Type de projet</InputLabel>
                            <Select
                                labelId="type-de-projet-label"
                                id="type-de-projet"
                                value={project.type}
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
                            value={project.title}
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
                            value={project.description}
                            setValue={(value) => setProject({
                                ...project,
                                description: value
                            })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Autocomplete
                            multiple
                            id="tags-filled"
                            options={[]}
                            defaultValue={project.tag.map((option) => option)}
                            freeSolo
                            onChange={(event, newValue) => {
                                setProject({
                                    ...project,
                                    tag: newValue
                                })
                                arrayIsValid(newValue) ?
                                    setTagIsInvalid(false) :
                                    setTagIsInvalid(true)
                            }}
                            name="tag"
                            renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                    <Chip variant="outlined" label={option} {...getTagProps({index})} />
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
                    <Grid item xs={12} md={4}>
                        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
                            <DatePicker
                                maxDate={new Date()}
                                label="Créer le"
                                value={project.createdAt}
                                onChange={(newValue) => {
                                    setProject({
                                        ...project,
                                        createdAt: newValue
                                    })
                                    createdAtIsValid(newValue) ?
                                        setCreatedAtIsInvalid(false) :
                                        setCreatedAtIsInvalid(true)
                                }}
                                renderInput={(params) =>
                                    <TextField
                                        {...params}
                                        error={createdAtIsInvalid}
                                        helperText={createdAtIsInvalid && "Saisie une date"}
                                        fullWidth
                                    />
                                }
                             />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TextField
                            variant="filled"
                            id="videoLink"
                            label="Lien vidéo"
                            name="videoLink"
                            fullWidth
                            value={project.videoLink}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>

                        <GlobalMultipleImagesUpload
                            images={project.images}
                            setImages={(value) => {
                                setProject({
                                    ...project,
                                    images: value
                                })
                            }}
                            editView={newImages !== null}
                            imagesInvalid={imagesIsInvalid}
                            setImagesInvalid={setImagesIsInvalid}
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
                        {newImages === null ?
                        "Créer mon nouveau projet" :
                        "Modifier mon projet"}
                    </Button>
                </Grid>
            </Container>
        </Box>
    );
}