import React from 'react';
import { Link } from 'react-router-dom';

import DIPCar from '/images/projectsImages/DIPCar.webp';
import fer from '/images/projectsImages/fer.webp';
import pneumonia_classifier from '/images/projectsImages/pneumonia-classifier.webp';
import emotion_recognition from '/images/projectsImages/models_accuracy.webp';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const MyProjects = () => {
    const projects = [
        {
            id: 1,
            src: DIPCar,
            description: 'Deep Learning Assisted Autonomous Navigation over Economical Hardware: Implemented a cost-effective autonomous driving system on NVIDIA Jetson Nano. Utilized SSD-MobileNet for object detection and FCN-ResNet34 for road segmentation.',
            code: 'https://github.com/wajht7553/DIPCar',
        },
        {
            id: 2,
            src: fer,
            description: 'Developed a model using the FER-2013 dataset to classify emotions. Achieved optimal performance with CLIP ViT-B/32, balancing accuracy and speed for real-time applications.',
            code: 'https://github.com/ImranNawar/facial-emotion-recognition',
        },
        {
            id: 3,
            src: pneumonia_classifier,
            description: 'Created a Streamlit app for pneumonia detection using ResNet18 with 80% test accuracy. Deployed on Hugging Face Spaces for real-world accessibility.',
            demo: 'https://huggingface.co/spaces/imran-nawar/pneumonia-classifier',
            code: 'https://github.com/ImranNawar/pneumonia-classifier',
        },
        {
            id: 4,
            src: emotion_recognition,
            description: 'Trained models to classify happy, sad, and surprise emotions using MediaPipe-extracted landmarks. Achieved 77.7% accuracy with Logistic Regression.',
            code: 'https://github.com/ImranNawar/emotion-recognition',
        },
    ];

    const handleClick = (url) => {
        const newWindow = window.open(url, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    };

    return (
        <section name="Projects" className='relative w-full text-white min-h-screen h-unset'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mb-4'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1'>Projects</h2>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div className='grid sm:grid-cols-2 gap-8 mb-6'>
                    {projects.map(({ id, src, description, demo, code }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                            <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105' />
                            <div className='p-4'>
                                <p className='text-sm text-gray-300 mb-2'>{description}</p>
                                <div className='flex items-center justify-center'>
                                    {demo && (
                                        <button
                                            onClick={() => handleClick(demo)}
                                            className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125'
                                        >
                                            Live App
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleClick(code)}
                                        className='w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125'
                                    >
                                        GitHub Repository
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-end mr-4'>
                    <Link
                        to='/projects'
                        className='inline-flex items-center px-4 py-2 text-gray-300 hover:text-primary-color/60 transition-all duration-300 cursor-pointer z-10 relative'
                    >
                        <span className='hover:underline hover:underline-offset-4'>See more projects</span>
                        <MdOutlineKeyboardArrowRight size={20} className='ml-1 transform transition-transform duration-300 group-hover:translate-x-1' />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MyProjects;
