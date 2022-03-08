import React, {useState} from "react";
import axios from "axios";
import ProjectService from "../../../services/project.service";
import FormProject from "./FormProject";

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
        createdAt: null,
        type: '',
        videoLink: ''
    });

    const handleSubmit = () => {
        // Upload on a first Time all images
        const formUploadData = new FormData();
        newProject.images.forEach(file => formUploadData.append('multipleImages', file));
        axios.post('http://localhost:9000/api/project/multiple-upload', formUploadData)
            .then((newFileName) => {
                // If upload good, create newproject
                ProjectService.addProject(newProject, newFileName.data)
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
            project={newProject}
            setProject={setNewProject}
            onSubmit={handleSubmit}
        />
    );
}