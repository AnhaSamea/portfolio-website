import React, { useEffect, useState } from 'react';
import CardDetails from './CardDetails';

const Card = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('projects.json')
        .then(res=> res.json())
        .then(data=> setProjects(data))
    },[])
    return (
       <div className='mt-8 '>
         <h1 className='text-center font-bold text-2xl text-info'>My Projects</h1>
         <div className="grid sm:grid-cols-11 md:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
           
            {
                projects.map(project=> <CardDetails key={project.id} project={project}></CardDetails>)
            }
        </div>
       </div>
    );
};

export default Card;