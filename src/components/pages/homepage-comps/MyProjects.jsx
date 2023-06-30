import React from 'react'
import imagesearch from '/images/projectsImages/imagesearch.webp'
import restaurant from '/images/projectsImages/restaurant.webp'
import newswebsite from '/images/projectsImages/news-website.webp'
import islamiacollegepeshawar from '/images/projectsImages/islamia-college-peshawar.webp'
import modernuiux from '/images/projectsImages/modern-ui-ux.webp'
import todolist from '/images/projectsImages/todo-list.png';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const MyProjects = () => {

    const projects = [
        {
            id: 1,
            src: restaurant,
            demo: 'https://6498045c6963c4000802cb66--thunderous-faun-6dde52.netlify.app/',
            code: 'https://github.com/ImranNawar/restaurant'
        },
        {
            id: 2,
            src: todolist,
            demo: 'https://imrannawar.github.io/ToDoList.github.io/',
            code: 'https://github.com/ImranNawar/ToDoList.github.io'
        },
        {
            id: 3,
            src: modernuiux,
            demo: 'https://imrannawar.github.io/modern-ui-ux/',
            code: 'https://github.com/ImranNawar/modern-ui-ux'
        },
        {
            id: 4,
            src: imagesearch,
            demo: 'https://imrannawar.github.io/imagesearch/',
            code: 'https://github.com/ImranNawar/imagesearch'
        },
        {
            id: 5,
            src: islamiacollegepeshawar,
            demo: 'https://imrannawar.github.io/Islamia-College-Peshawar/',
            code: 'https://github.com/ImranNawar/Islamia-College-Peshawar'
        },
        {
            id: 6,
            src: newswebsite,
            demo: 'https://github.com/ImranNawar/web_small_projects/tree/main/NewsGrid%20Website',
            code: 'https://github.com/ImranNawar/web_small_projects/tree/main/NewsGrid%20Website'
        }
    ]

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    }
    

    return (
        <section name="Projects" className='relative w-full text-white md:h-screen h-unset'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='mb-4'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1'>Projects</h2>
                    <p className='py-6'>Check out some of my work here</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>

                <div className='flex justify-end mr-4'>
                    <Link to='projects' className='hover:underline hover:underline-offset-4 hover:text-primary-color/60 cursor-pointer text-gray-300 flex items-center'>
                        See more projects
                        <MdOutlineKeyboardArrowRight size={20} />
                        </Link>
                </div>
            </div>

            <ScrollLink to="Technologies" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    )
}

export default MyProjects
