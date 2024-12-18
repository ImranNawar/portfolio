import React from 'react'
import html from "../../../assets/html.png"
import css from "../../../assets/css.png"
import javascript from "../../../assets/javascript.png"
import react from "../../../assets/react.png"
import tailwind from "../../../assets/tailwind.png"
import git from "../../../assets/git.png"
import python from "../../../assets/python.png"
import pytorch from "../../../assets/pytorch.svg"
import opencv from "../../../assets/opencv.png"
import cpp from "../../../assets/cpp.png"
import scikitlearn from "../../../assets/scikitlearn.png"

import { Link as ScrollLink } from 'react-scroll';

const Techs = () => {

    const techs = [
        {
            id: 1,
            src: python,
            title: 'PYTHON',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: pytorch,
            title: 'PYTORCH',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: opencv,
            title: 'OPENCV',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: cpp,
            title: 'C++',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: scikitlearn,
            title: 'SCIKIT-LEARN',
            style: 'shadow-white'
        },
        {
            id: 6,
            src: git,
            title: 'Git',
            style: 'shadow-sky-400'
        },
    ]

    return (
        <section name='Technologies' className='relative w-full md:h-screen h-unset'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div>
                    <h2 className='text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl' >Technologies</h2>
                    <p className='py-6'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0'>

                    {
                        techs.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img className='w-20 mx-auto py-2 md:py-6' src={src} alt="" />
                                <p className='mt-4'>{title}</p>
                            </div>

                        ))
                    }
                </div>
            </div>

            {/* <ScrollLink to="Education" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink> */}
        </section>
    )
}

export default Techs
