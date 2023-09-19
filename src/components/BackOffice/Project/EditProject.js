import React, {useState} from "react";
import ProjectService from "../../../services/project.service";
import FormProject from "./FormProject";
import {parseProjectDataToFormData} from "./utils/parseProjectDataToFormData";

export default function EditProject({setPageToDisplay, projectSelected}) {
    const [project, setProject] = useState({...projectSelected, createdAt: new Date(projectSelected.createdAt)});
    const [newImages, setNewImages] = useState([]);

    const handleSubmit = () => {
        // Upload on a first Time all images
        const formData = parseProjectDataToFormData(project)
        ProjectService.updateProject(project._id, formData)
            .then((res) => {
                // Add project done redirect to index and display popup to say is good
                setPageToDisplay({
                    name: "index",
                    valueSelected: null
                });
            })
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