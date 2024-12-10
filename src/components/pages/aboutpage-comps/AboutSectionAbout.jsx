import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const AboutSectionAbout = () => {
    return (
        <section name="About" className="relative w-full pt-16 h-auto">
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 py-16 md:py-24 lg:py-0 lg:flex-row lg:gap-8'>
                <div className='flex mt-8 md:mt-0 mb-11'>
                    <img src="/images/imran-videospage.webp" alt="My profile" className='rounded-2xl mx-auto w-2/3 max-w-lg md:max-w-sm object-cover md:w-[70rem] shadow-2xl shadow-primary-color/20' style={{ filter: 'drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5))' }} />
                </div>

                <div className='flex flex-col justify-center items-center h-[85%] md:h-full'>
                    <h1 className='text-4xl md:text-5xl font-bold text-white mb-2 md:mb-4 pt-4'>Who I am?</h1>

                    <div className='flex items-center bg-primary-color/20 rounded-md py-2 px-4'>
                        <img className='h-[30px] w-auto mr-2' src="/icons/pakistan.jpg" alt="Pakistan Flag" />
                        <h2 className='text-lg sm:text-xl md:text-2xl md:py-1 font-semibold text-white'>Pakistan - 23 years old</h2>
                    </div>

                    <p className='text-md md:text-lg text-gray-300 py-4 max-x-md text-justify'>
                        I’m Imran Nawar, a dedicated AI and Computer Vision Researcher with a Bachelor's degree in Computer Science from Islamia College University, Peshawar.
                        My passion for technology has driven me to dive into both the theoretical and practical aspects of AI, focusing on Scene Understanding and Autonomous Systems.
                    </p>

                    <h2 className='text-lg md:text-xl font-bold text-white mb-2'>Research Interests</h2>
                    <ul className='text-md md:text-lg text-gray-300 max-x-md text-justify list-disc pl-5'>
                        <li>Computer Vision and Autonomous Systems: Scene Understanding and Autonomous Navigation</li>
                        <li>Machine Learning and Deep Learning: Algorithm optimization and real-time performance</li>
                    </ul>

                    {/* <h2 className='text-lg md:text-xl font-bold text-white mt-4 mb-2'>Technical Skills</h2>
                    <ul className='text-md md:text-lg text-gray-300 max-x-md text-justify list-disc pl-5'>
                        <li>Languages: Python, C, C++, JavaScript, HTML/CSS</li>
                        <li>Frameworks & Libraries: PyTorch, TensorRT, Scikit-learn, OpenCV, Detectron2, Hugging Face, Numpy, Pandas, Matplotlib, Seaborn, Streamlit</li>
                        <li>Tools: VS Code, Git, GitHub, Jupyter, Linux, Vercel, Netlify, Roboflow, MS Office, Draw.io, LaTeX, Markdown</li>
                        <li>Core Skills: Artificial Intelligence, Neural Networks, Data Visualization, Data Structures & Algorithms, Machine Learning, Deep Learning, Technical Writing, Presentation Skills</li>
                    </ul> */}
                </div>
            </div>
        </section>
    );
}

export default AboutSectionAbout;