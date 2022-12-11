import React from 'react';
import { useLoaderData} from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const Project = () => {
    const descriptions = useLoaderData();
    console.log(descriptions);
    return (
        <section className="py-6">
        {
            descriptions.descriptions.map(description => <ProjectDetails key={description.id} description={description}></ProjectDetails>)
        }
        </section>
    );
};

export default Project;