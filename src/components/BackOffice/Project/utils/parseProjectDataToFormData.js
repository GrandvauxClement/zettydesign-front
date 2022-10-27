
export const parseProjectDataToFormData = (project) => {

    const formUploadData = new FormData();
    project.images.forEach(file => formUploadData.append('images', file));
    formUploadData.append('title', project.title);
    formUploadData.append('type', project.type);
    formUploadData.append('description', JSON.stringify(project.description));
    formUploadData.append('tag', JSON.stringify(project.tag));
    formUploadData.append('createdAt', project.createdAt);
    formUploadData.append('videoLink', project.videoLink);

    return formUploadData
}