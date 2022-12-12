import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams} from 'react-router-dom';
import ProjectDetails from './ProjectDetails';

const Project = ({params}) => {
    const {id} = useParams();

    // const details = useLoaderData();
    // console.log(details);
    const [details,setDetails] = useState([]);
    // console.log(details);
    useEffect(()=>{
        fetch('projects.json')
        .then(res=> res.json())
        .then(data=> console.log(data))
    },[])

    return (
        <section className="py-6">
        {/* {
           details?.descriptions?.map(detail=> <ProjectDetails key={detail.id} detail={detail}></ProjectDetails>)
        } */}
        </section>
    );
};

export default Project;