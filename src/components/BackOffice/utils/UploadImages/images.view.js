// In this file you can find views use by the controller
// * 4 sub éléments printed in square
// * the container of all sub éléments
// * the form for show if premium option is selected
// this view call styled components

import { ImageInputContainer, ImageItem, ImageItemContainer, ImageLoader, ImageTemplate } from "./images.styles";
import { CircularProgress, Fab, Grid} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CloseIcon from '@mui/icons-material/Close';
import theme from "../../../../theme";
import { css, keyframes } from "@emotion/css";
import Api from "../../../../api";
import {urlAwsImageStorage} from "../../../../constant/globalConstant";

// DivLoader is one of the 4 sub éléments
// when the image becomes a BLOB this component will show the user that the application is loading
export function DivLoader (i) {

    return <Grid key={i} item xs={3}>
        <ImageLoader className={"placeholder"}>
            <CircularProgress />
        </ImageLoader>
    </Grid>
}

// DivTemplate is one of the 4 sub éléments
export function DivTemplate (i) {

    return <Grid key={i} item xs={3}>
        <ImageTemplate />
    </Grid>
}

// DivImage is one of the 4 sub éléments
export function DivImage (
    i,
    handleDragSelect,
    handleDragEnter,
    drop,
    images,
    editView,
    handleRemoveImage,
) {
    return <Grid key={i} item xs={3}>
        <div
            onDragStart={(e) => handleDragSelect(e, i)}
            onDragEnter={(e) => handleDragEnter(e, i)}
            onDragEnd={drop}
            id={"img-" + i}
            draggable={true}
            className={css` display: block; position: relative; `}
        >
            <Fab onClick={() => { handleRemoveImage(images[i]) }}
                 size="small"
                 color="primary"
                 aria-label="add"
                 sx={{
                     zIndex: "8",
                     position: "absolute",
                     top: "-16px",
                     right: "3rem",
                 }}>
                <CloseIcon />
            </Fab>
            <ImageItemContainer>
                <ImageItem
                    alt=""
                    draggable={false}
                    src={editView ? typeof images[i] === "string" ?
                            urlAwsImageStorage + images[i] :
                            URL.createObjectURL(images[i]) :
                        URL.createObjectURL(images[i])
                    }
                />
            </ImageItemContainer>
        </div>
    </Grid>
}

// DivInput is one of the 4 sub éléments
export function DivInput (
    i,
    error,
    images,
    setLoading,
    handleUpdateImages
) {
    const animation = keyframes`
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    `
    return <Grid key={i} item xs={3}>
        <ImageInputContainer sx={{ borderColor: error ? theme.palette.error.main : theme.palette.primary.main }}>
            <label htmlFor='super-images-upload'>
                <AddAPhotoIcon
                    color={error ? "error" : "primary"}
                    className={css` transition: 0.5s;
                        animation: ${animation} cubic-bezier(0, 0, 0, 1) 1s;
                        &:hover {
                            cursor: pointer;
                            color: ${error ? theme.palette.error.dark : theme.palette.primary.dark};
                        }
                    `}
                />
            </label>
            <input
                className={css`display: none; height: 0;`}
                accept="image/*,.pdf,.jpg"
                onChange={(e) => handleUpdateImages(e.target.files).then(() => {

                    setLoading(false);
                })}
                id='super-images-upload'
                type="file"
                multiple
            />
        </ImageInputContainer>
    </Grid>
}

// ContainerImages is the main container
export function ContainerImages (content) {
    return <>
        <div>
            <Grid container spacing={3}>
                {content}
            </Grid>
        </div>
    </>
}