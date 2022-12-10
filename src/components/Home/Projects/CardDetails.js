import React from 'react';

const CardDetails = ({project}) => {
    const {title,details} = project
    return (
        <div className='bg-base-200 p-5 rounded-lg'>
        {/* <img src="https://source.unsplash.com/random/300x300/?1" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" /> */}
        <div className="mt-6 mb-2">
            <h2 className="text-xl font-semibold tracking-wide text-primary">{title}</h2>
        </div>
        <p className="dark:text-gray-100">{details}</p>
    </div>
    );
};

export default CardDetails;