import React from 'react';
import CardDetails from './CardDetails';

const Card = () => {
    const projects = [
        {
            id: 1,
            title: 'Ancient Shot',
            details: 'A full stack project for historical photos. User have to login to see the features.  Used MongoDB to store data. CRUD operations (Create and Read) implemented on this project. User can give reviews about pictures and can see others review.'
        },
        {
            id: 2,
            title: 'iSells.com',
            details: 'This is a full stack project for reselling iPhones. User have to click on categories which they want to buy. Used MongoDB to store data and has Authentication System',
        },
        {
            id: 3,
            title: 'WDev Quiz',
            details: 'This is an online quiz application page. You can give quiz on a selected topic. If you click on right answer, you will get a correct toast otherwise you will get an incorrect toast. ',
        }
    ]
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