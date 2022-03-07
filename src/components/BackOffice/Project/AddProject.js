import React, {useState} from "react";
import {Box, Container, FormControl, Grid, Paper, Typography, InputLabel, Select, MenuItem} from "@mui/material";
import theme from "../../../theme";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextEditor from "../utils/TextEditor/TextEditor";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

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
        workState: [],
        images: [],
        createdAt: '',
        type: '',
        videoLink: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProject({
            ...newProject,
            [name]: value
        })
        console.log(newProject);
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

                <Box sx={{height: '70vh', width: '100%', mt: 2}}>
                    <Container>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth variant="filled">
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
                                    options={newProject.workState.map((option) => option)}
                                    freeSolo
                                    onChange={(event, newValue) => {
                                        setNewProject({
                                            ...newProject,
                                            workState: newValue
                                        })
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
                                            label="tag"
                                            placeholder="Ajoute tes tags représentant ton projects"
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Basic example"
                                        value={newProject.createdAt}
                                        onChange={(newValue) => {
                                            setNewProject({
                                                ...newProject,
                                                workState: newValue
                                            })
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Container>

                </Box>
            </Box>
        </Paper>
    );
}