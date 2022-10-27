import React, {useState} from "react";
import ProjectService from "../../../services/project.service";
import FormProject from "./FormProject";
import {parseProjectDataToFormData} from "./utils/parseProjectDataToFormData";

export default function AddProject({setPageToDisplay}) {
    const [newProject, setNewProject] = useState({
        title: '',
        description: [
            {
                type: 'paragraph',
                children: [
                    {text: ''},
                ],
            }
        ],
        tag: [],
        images: [],
        createdAt: new Date(),
        type: '',
        videoLink: ''
    });

    const handleSubmit = () => {
        // Upload on a first Time all images
        ProjectService.addProject(parseProjectDataToFormData(newProject))
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
            project={newProject}
            setProject={setNewProject}
            onSubmit={handleSubmit}
        />
    );
}