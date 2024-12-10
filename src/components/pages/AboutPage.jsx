import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NavbarExpertise from '../pages/aboutpage-comps/NavbarExpertise'
import AboutSectionAbout from '../pages/aboutpage-comps/AboutSectionAbout'
import Expertise from '../pages/aboutpage-comps/Expertise';
import Github from './aboutpage-comps/Github';

const AboutPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavbarExpertise />
            <AboutSectionAbout/>
            <Github />
            <Expertise />

            <div className='relative flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end hover:scale-110 duration-300 mb-10'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>

        </>
    )
}

export default AboutPage