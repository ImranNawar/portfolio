import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import About_Me from "./homepage-comps/About_Me"
import Experience from "./homepage-comps/Experience"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'
import Miscellaneous from './homepage-comps/Miscellaneous'

const HomePage = () => {
    const certificates = [
        {image: '/images/certificates/Neural Networks and Deep Learning.webp'},
        {image: '/images/certificates/Machine Learning Specialization.webp'},
        {image: '/images/certificates/Computer Vision Basics.webp'},
        {image: '/images/certificates/Fundamentals of Digital Image and Video Processing.webp'},
        {image: '/images/certificates/Supervised Machine Learning Regression and Classification.webp'},
        {image: '/images/certificates/Unsupervised Learning Recommenders Reinforcement Learning.webp'},
        {image: '/images/certificates/Advance Learning Algorithms.webp'},
        {image: '/images/certificates/Mathematics for ML Linear_Algebra.webp'},
        {image: '/images/certificates/Matrix Algebra for Engineers.webp'},
        {image: '/images/certificates/Introduction to Statistics.webp'},
        {image: '/images/certificates/Python for Data Science AI and Development.webp'},
        {image: '/images/certificates/Getting started with AI on Jetson Nano.webp'},
        {image: '/images/certificates/Introduction to Python.webp'},
        {image: '/images/certificates/Python (Basic).webp'},
        {image: '/images/certificates/Introduction to CPP.webp'},
        {image: '/images/certificates/HTML and CSS in Depth.webp'},
        {image: '/images/certificates/Javascript Basics.webp'},
        {image: '/images/certificates/Principles of Javascript.webp'},
        {image: '/images/certificates/React Basics.webp'},
        {image: '/images/certificates/Getting started with Git.webp'},
        {image: '/images/certificates/Frontend Developer Capstone.webp'},
        {image: '/images/certificates/Coding interview preparation.webp'},
        {image: '/images/certificates/Web Development Fundamentals.webp'},
        {image: '/images/certificates/GPT4o_code and conquer hackathon.webp'},
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <About_Me />
            <Experience />
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Miscellaneous />
            <Contact />
        </>
    )
}

export default HomePage