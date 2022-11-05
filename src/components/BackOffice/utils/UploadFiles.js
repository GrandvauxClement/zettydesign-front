import React from 'react';
import ImagesInput from "./UploadImages/ImagesInput";
import ImageResizer from "./UploadImages/ImageResizer";

export const GlobalMultipleImagesUpload = ({images,setImages, editView = false,imagesInvalid, setImagesInvalid}) => {

    async function removeImageHandler(img) {
        removeImage(img).then(() => {
            if(images.length === 0) { setImagesInvalid(true) }
        });
    }

    async function removeImage(img) {
        setImages(images.filter(item => item !== img))
    }

    async function setImage(img) {
        setImages(img)
    }

    function updateImageHandler(files) {

        imagesHandler(files).then(()=> {
            if(images.length >= 1) {
                setImagesInvalid(false)
            }
        })
    }

    // Optimize images to reduce their size in the server
    async function imagesHandler(files) {
        try {
            const filesNumber = files.length;
            let i = 0;

            const temp = [...images];
            while(i < filesNumber){
                const image = await ImageResizer(
                    files[i],
                    900,
                    900,
                    200,
                    200,
                    100,
                    files[i].type
                );
                if(images.length <= 7) {

                    temp.push(image);
                   // images.push(image);
                    i++
                } else { break }
            }
            setImages(temp);
        }catch (err) {
            console.log(err);
        }
    }

    return (
        <ImagesInput
            images={images}
            setImages={(img) => setImage(img)}
            updateImages={(files) => updateImageHandler(files)}
            removeImage={(img) => removeImageHandler(img)}
            editView={editView}
            error={imagesInvalid}
        />
    )
}
