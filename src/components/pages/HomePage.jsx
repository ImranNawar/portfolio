import React, { useEffect } from 'react'
import Navbar from "./homepage-comps/Navbar"
import Home from "./homepage-comps/Home"
import About from "./homepage-comps/About"
import MyProjects from "./homepage-comps/MyProjects"
import Techs from "./homepage-comps/Techs"
import Contact from "./homepage-comps/Contact"
import CertificateSlider from './homepage-comps/CertificateSlider'

const HomePage = () => {
    const certificates = [
        {image: './images/certificates/Meta Front-End Developer.webp'},
        {image: '/images/certificates/HTML and CSS in Depth.webp'},
        {image: '/images/certificates/Javascript Basics.webp'},
        {image: '/images/certificates/Principles of Javascript.webp'},
        {image: '/images/certificates/Introduction to Frontend Development.webp'},
        {image: '/images/certificates/React Basics.webp'},
        {image: '/images/certificates/Getting started with Git.webp'},
        {image: '/images/certificates/Principles of UX UI Design.webp'},
        {image: '/images/certificates/Frontend Developer Capstone.webp'},
        {image: '/images/certificates/Coding interview preparation.webp'},
        {image: '/images/certificates/Introduction to HTML.webp'},
        {image: '/images/certificates/Introduction to CSS.webp'},
        {image: '/images/certificates/Introduction to Javascript.webp'},
        {image: '/images/certificates/Introduction to C++.webp'},
        {image: '/images/certificates/Web Development Fundamentals.webp'},
        {image: '/images/certificates/Build a twitter clone frontend with reactjs.webp'},
        {image: '/images/certificates/nesternship.webp'},
        {image: '/images/certificates/GSSoC-_23-Badge.webp'},
        {image: '/images/certificates/Introduction to Python.webp'},
    ];


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <Navbar />
            <Home />
            <About />
            <MyProjects />
            <Techs />
            <CertificateSlider certificates={certificates} />
            <Contact />
        </>
    )
}

export default HomePage