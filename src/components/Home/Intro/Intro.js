import React from 'react';

const Intro = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold"><span className='text-primary'>Anha</span> Samea Antora</h1>
                    <h2 className='text-2xl font-medium pt-3 text-info'>Web Developer</h2>
                    <p className="py-6">With more than one year of experience as an web developer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <a href='Resume.pdf' download='' ><button className="btn btn-outline btn-secondary">Download Resume</button></a>
                    {/* <Pdf></Pdf> */}
                </div>
            </div>
        </div>
    );
};

export default Intro;