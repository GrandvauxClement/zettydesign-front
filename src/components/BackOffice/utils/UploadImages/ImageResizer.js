// re size the image
import Resizer from "react-image-file-resizer";
import ImageURIToBlob from "./ImagesURIToBlob";

export default function ImageResizer(
    file,
    maxWidth,
    maxHeight,
    minWidth,
    minHeight,
    quality,
    mimeType) {
    return new Promise((resolve) => {

        Resizer.imageFileResizer(
            file,
            maxWidth,
            maxHeight,
            mimeType === "image/png" ? "PNG" : "JPEG",
            quality,
            0,
            (uri) => {
                resolve(ImageURIToBlob(uri))
            },
            "base64",
            minWidth,
            minHeight
        );

    })

}