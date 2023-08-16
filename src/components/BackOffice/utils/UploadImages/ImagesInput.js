import {useState} from "react";
import {ContainerImages, DivImage, DivInput, DivLoader, DivTemplate} from "./images.view";

const ImagesInput = ({
                         images,
                         setImages,
                         updateImages,
                         removeImage,
                         editView,
                         error
                     }) =>
{
    const [loading, setLoading] = useState(false);

    // save ref for dragImage
    const [dragSelect, setDragSelect] = useState();
    const [dragEnter, setDragEnter] = useState();

    const handleDragSelect = (event, item) => {

        event.dataTransfer.effectAllowed = "move";
        if(item !== dragSelect) setDragSelect(item)
    };

    const handleDragEnter = (event, item) => {
        if(item !== dragEnter && item !== dragSelect) {
            event.preventDefault();
            event.dataTransfer.dropEffect = "move"
            setDragEnter(item)
        }
    };

    /**
     * Change place of an element on an array
     * @param {*} array use
     * @param {*} old_index of the element to move
     * @param {*} new_index of the element you want
     * @returns
     */
    function arrayMove(arr, old_index, new_index) {
        let newArray = arr
        // switch position
        newArray.splice(new_index, 0, arr.splice(old_index, 1)[0]);
        return newArray
    };

    const drop = () => {

        if(typeof dragEnter !== 'undefined' && typeof dragSelect !== 'undefined' ) {
            setImageAsync()
        }
    }

    async function setImageAsync () {
        setLoading(true)
        await setImages(arrayMove( images, dragSelect, dragEnter ));
        setLoading(false)
    }

    async function handleUpdateImages(files) {
        setLoading(true);
        await updateImages(files);

    }

    async function handleRemoveImage(i) {
        await removeImage(i);
    }

    function ImagesInputContentItem(images) {
        const res = [];
        for (let i = 0; i < 8; i++) {
            if (typeof images !== "undefined") {
                if (images.length > i) {
                    // Image
                    res.push(DivImage(
                        i,
                        handleDragSelect,
                        handleDragEnter,
                        drop,
                        images,
                        editView,
                        handleRemoveImage
                    ));
                } else if (loading && images.length >= i) {
                    // Loader
                    res.push(DivLoader( i ));
                } else if ((!loading && images.length === i) || (loading && images.length + 1 === i)) {
                    // Input
                    res.push(DivInput(
                        i,
                        error,
                        images,
                        setLoading,
                        handleUpdateImages
                    ));
                } else {
                    // Empty template
                    res.push(DivTemplate( i ));
                }
            } else {
                // Empty template
                res.push(DivTemplate( i ));
            }
        }
        return res
    }

    return ContainerImages(ImagesInputContentItem(images))
}

export default ImagesInput