import React, { useRef } from 'react';
import {Box, Grid, Typography} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Api from "../../../api";
import ProjectService from "../../../services/project.service";

export const MultipleUpload = ({updateFiles, files}) => {
    const inputRef = useRef(null);
    const formRef = useRef(null);

    const handleClick = () => inputRef && inputRef.current && inputRef.current.click();
    const handleFiles = (e) =>{
        updateFiles(e.target.files ? Array.from(e.target.files) : []);

    }

    const removeImageUpload = (x) => {

        const newFiles = files.filter((file) => {
            return file.name !== x.name
        })
        updateFiles(newFiles);

    }

    return (
        <form ref={formRef}>
            <div className="upload-box" onClick={handleClick}>
                Click & Sélectionne les fichiers à télécharger (Multiple) <hr />
            </div>
            <Grid container spacing={2}>
                {files.map((x, index) =>
                    <Grid item md={3} xs={6} key={index}>
                        <React.Fragment>
                            <Grid container direction="row" alignItems="center">
                                <img alt="upload" src={URL.createObjectURL(x)} style={{width: '80%'}}/>
                                <DeleteForeverIcon color="error" onClick={() => removeImageUpload(x)} sx={[{'&:hover' : { cursor: 'pointer'}}]}/>
                            </Grid>

                        </React.Fragment>
                    </Grid>
                )}
            </Grid>
            <input
                type="file"
                ref={inputRef}
                onChange={handleFiles}
                style={{ display: 'none' }}
                multiple
            />
        </form>
    )
}


export const EditMultipleUpload = ({updateFiles, files, newImages, setNewImages}) => {
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const urlImage = Api.baseUrl + 'public/images/projets/';

    const handleClick = () => inputRef && inputRef.current && inputRef.current.click();
    const handleFiles = (e) =>{
        setNewImages(e.target.files ? Array.from(e.target.files) : []);

    }

    const removeImageUpload = (x) => {
        const filesSelected = newImages.filter((file) => {
            return file.name !== x.name
        })
        setNewImages(filesSelected);
    }

    const removeImageOnServer = (fileName) => {
        ProjectService.removeImage(fileName)
            .then((res) => {
                const filesSelected = files.filter((file) => {
                    return file !== fileName
                })
                updateFiles(filesSelected);
            })
            .catch(err => console.log(err));
    }

    return (
        <Box>
            <Typography variant="h4"> Tes anciennes images</Typography>
            <Grid container spacing={2}>
                {files.map((imageName, index) =>
                    <Grid item md={3} xs={6} key={index}>
                        <React.Fragment>
                            <Grid container direction="row" alignItems="center">
                                <img alt="upload" src={`${urlImage}${imageName}`} style={{width: '80%'}}/>
                                <DeleteForeverIcon color="error" onClick={() => removeImageOnServer(imageName)} sx={[{'&:hover' : { cursor: 'pointer'}}]}/>
                            </Grid>

                        </React.Fragment>
                    </Grid>
                )}
            </Grid>
            <form ref={formRef}>
                <div className="upload-box" onClick={handleClick}>
                    Click & Sélectionne les fichiers à télécharger (Multiple) <hr />
                </div>
                <Grid container spacing={2}>
                    {newImages.map((x, index) =>
                        <Grid item md={3} xs={6} key={index}>
                            <React.Fragment>
                                <Grid container direction="row" alignItems="center">
                                    <img alt="upload" src={URL.createObjectURL(x)} style={{width: '80%'}}/>
                                    <DeleteForeverIcon color="error" onClick={() => removeImageUpload(x)} sx={[{'&:hover' : { cursor: 'pointer'}}]}/>
                                </Grid>

                            </React.Fragment>
                        </Grid>
                    )}
                </Grid>
                <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFiles}
                    style={{ display: 'none' }}
                    multiple
                />
            </form>
        </Box>
    )
}
