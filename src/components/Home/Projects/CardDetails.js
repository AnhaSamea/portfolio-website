import React from 'react';
import { Link } from 'react-router-dom';

const CardDetails = ({project}) => {
    const {title,details,id} = project;
    return (
        <div className='bg-base-200 p-5 rounded-lg'>
        {/* <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" /> */}
        <div className="mt-6 mb-2">
            <h2 className="text-xl font-semibold tracking-wide text-primary">{title}</h2>
        </div>
        
        <p className="">{details}</p>
        <Link to={`/projetcs/${id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn btn-outline btn-secondary mt-5">Details</button></Link>
    </div>
    );
};

export default CardDetails;