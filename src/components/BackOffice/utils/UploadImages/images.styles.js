import { styled, keyframes } from '@mui/system';
import theme from '../../../../theme';

const opacityAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 100%;
    }`;
export const ImageItem = styled('img')({
    aspectRatio: "1 / 1",
    borderRadius: "0.5rem",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    animation: `${opacityAnimation} cubic-bezier(0, 0, 0, 1) 0.5s`,
    cursor: "grab",
    /* (Optional) Apply a "closed-hand" cursor during drag operation. */
    '&:active': {
        cursor: "grabbing",
    }
})

export const ImageItemContainer = styled('div')({
    aspectRatio: "1 / 1",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "0.5rem",
    maxWidth: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})

// This component print a loader when image is dowloading
export const ImageLoader = styled('div')({
    aspectRatio: "1 / 1",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "0.5rem",
    maxHeight: "200px",
    maxWidth: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
});

// This component is print when there is still room for image/images
export const ImageTemplate = styled('div')({
    aspectRatio: "1 / 1",
    border: `1px solid ${theme.palette.grey["200"]}`,
    borderRadius: "0.5rem",
    maxHeight: "200px",
    maxWidth: "200px",
});

// This component is the container of the input
export const ImageInputContainer = styled('div')({
    aspectRatio: "1 / 1",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "0.5rem",
    maxheight: "200px",
    maxWidth: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "0.5s"
});

export const FormGroupImage = styled('div')({
    backgroundColor: theme.palette.grey["100"],
    marginTop: "1rem",
    marginBottom: "1rem",
    padding: "8px",
    borderRadius: "8px",
    paddingLeft: "2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap"
});