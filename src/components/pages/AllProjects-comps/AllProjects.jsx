import React from 'react';
import { Link } from 'react-router-dom';

import DIPCar from '/images/projectsImages/DIPCar.webp';
import fer from '/images/projectsImages/fer.webp';
import pneumonia_classifier from '/images/projectsImages/pneumonia-classifier.webp';
import emotion_recognition from '/images/projectsImages/models_accuracy.webp';

import cbir from '/images/projectsImages/block_diagram.webp';
import youtubeV from '/images/projectsImages/youtubeV.webp';
import imagesearch from '/images/projectsImages/imagesearch.webp';
import country_information from '/images/projectsImages/country-information.webp';

const AllProjects = () => {
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
        {
            id: 5,
            src: cbir,
            description: 'Content Based Image Retrieval: Built a system using ORB features and FAISS indexing to retrieve similar images. Processed datasets of cars, cricket balls, and bats for accurate query matching.',
            code: 'https://github.com/ImranNawar/CBIR',
        },
        {
            id: 6,
            src: youtubeV,
            description: 'Developed a Streamlit app to generate summaries of YouTube transcripts via Gemini API. Participated in the Gemini API Developer Competition.',
            demo: 'https://youtubev-transcript-summarizer.streamlit.app/',
            code: 'https://github.com/ImranNawar/youtubeV-transcript-summarizer',
        },
        // {
        //     id: 7,
        //     description: 'RFID based Door Lock.',
        //     code: 'https://github.com/wajht7553/RFID_based_door_lock',
        // },
        // {
        //     id: 8,
        //     description: 'ORB feature descriptor.',
        //     code: 'https://github.com/ImranNawar/orb_feature_descriptor',
        // },
        {
            id: 7,
            src: imagesearch,
            description: 'Image search: React app for searching images via Unsplash API.',
            demo: 'https://imrannawar.github.io/imagesearch/',
            code: 'https://github.com/ImranNawar/imagesearch',
        },
        {
            id: 8,
            src: country_information,
            description: 'Country Information: Get Country Information by Country Name.',
            demo: 'https://country-information-gamma.vercel.app/',
            code: 'https://github.com/ImranNawar/country-information',
        },
    ];

    const handleClick = (url) => {
        const newWindow = window.open(url, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    };

    return (
        <section
            name="Projects"
            className="relative w-full text-white min-h-screen h-unset pt-16"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="mb-4">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">
                        Projects
                    </h2>
                    <p className="py-6">Check out some of my work here</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8 mb-6">
                    {projects.map(({ id, src, description, demo, code }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto"
                        >
                            {src ? (
                                <img
                                    src={src}
                                    alt="project"
                                    className="rounded-md duration-200 hover:scale-105"
                                />
                            ) : (
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {description.split(':')[0]}
                                    </h3>
                                </div>
                            )}
                            <div className="p-4">
                                <p className="text-sm text-gray-300 mb-2">
                                    {description}
                                </p>
                                <div className="flex items-center justify-center">
                                    {demo && (
                                        <button
                                            onClick={() => handleClick(demo)}
                                            className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125"
                                        >
                                            Live App
                                        </button>
                                    )}
                                    <button
                                        onClick={() => handleClick(code)}
                                        className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-125"
                                    >
                                        GitHub Repository
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <Link
                    to="/"
                    className="text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300"
                >
                    <span className="">
                        <i className="bx bx-home-heart mr-2"></i>
                    </span>
                    Go back
                </Link>
            </div>
        </section>
    );
};

export default AllProjects;