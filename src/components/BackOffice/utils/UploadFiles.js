import React, { useRef } from 'react';
import {Grid} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const MultipleUpload = ({updateFiles, files, test}) => {
    const inputRef = useRef(null);
    const formRef = useRef(null);

    const handleClick = () => inputRef && inputRef.current && inputRef.current.click();
    const handleFiles = (e) =>{
        updateFiles(e.target.files ? Array.from(e.target.files) : []);

    }

   /* const handleSubmit = (e) => {
        e.preventDefault();
        if (files.length > 0) {
            console.log(files);
            const formData = new FormData();
            files.forEach(file => formData.append('multipleImages', file));
            axios.post('http://localhost:9000/api/project/multiple-upload', formData)
                .then(data => setMessage(data.data.message))
                .catch((error) => setMessage('Error'));
            updateFiles([]);
            formRef.current && formRef.current.reset();
            setTimeout(() => {
                setMessage('');
            }, 4000);
        }
    }*/

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

export default MultipleUpload;