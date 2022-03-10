import React, {useState} from "react";
import axios from "axios";
import ProjectService from "../../../services/project.service";
import FormProject from "./FormProject";

export default function EditProject({setPageToDisplay, projectSelected}) {
    const [project, setProject] = useState(projectSelected);
    const [newImages, setNewImages] = useState([]);

    const handleSubmit = () => {
        // Upload on a first Time all images
        const formUploadData = new FormData();
        newImages.forEach(file => formUploadData.append('multipleImages', file));
        axios.post('http://localhost:9000/api/project/multiple-upload', formUploadData)
            .then((newFileName) => {
                // If upload good, create newproject
                let imagesKeep = project.images
                newFileName.data.map((fileName) => {
                    imagesKeep.push(fileName);
                })
                ProjectService.updateProject(project, imagesKeep)
                    .then((res) => {
                        // Add project done redirect to index and display popup to say is good
                        setPageToDisplay({
                            name: "index",
                            valueSelected: null
                        });
                    })
            })
            .catch((error) => {
                //TODO :Display error if upload don t work
                console.log(error)
            });
    }
    return (
        <FormProject
            project={project}
            setProject={setProject}
            newImages={newImages}
            setNewImages={setNewImages}
            onSubmit={handleSubmit}

        />
    );
}