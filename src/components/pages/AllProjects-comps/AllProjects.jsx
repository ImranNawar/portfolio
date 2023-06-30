import React from 'react'
import { Link } from 'react-router-dom'

import restaurant from '/images/projectsImages/restaurant.webp'
import islamiacollegepeshawar from '/images/projectsImages/islamia-college-peshawar.webp'
import newswebsite from '/images/projectsImages/news-website.webp'
import imagesearch from '/images/projectsImages/imagesearch.webp'
import modernuiux from '/images/projectsImages/modern-ui-ux.webp'
import todolist from '/images/projectsImages/todo-list.png';
import hotel from '/images/projectsImages/hotel.webp'
import knowledgeresume from '/images/projectsImages/knowledge-resume.png'
import userForm from '/images/projectsImages/userForm.webp'

const AllProjects = () => {

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
        },
        {
            id: 7,
            src: hotel,
            demo: 'https://github.com/ImranNawar/web_small_projects/tree/main/Hotel%20Website',
            code: 'https://github.com/ImranNawar/web_small_projects/tree/main/Hotel%20Website'
        },
        {
            id: 8,
            src: knowledgeresume,
            demo: 'https://github.com/ImranNawar/web_small_projects/tree/main/Knowledge%20Resume',
            code: 'https://github.com/ImranNawar/web_small_projects/tree/main/Knowledge%20Resume'
        },
        {
            id: 9,
            src: userForm,
            demo: 'https://github.com/ImranNawar/web_small_projects/tree/main/User%20form',
            code: 'https://github.com/ImranNawar/web_small_projects/tree/main/User%20form'
        },
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
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-10'>
        
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>

                <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                    {
                        projects.map(({ id, src, demo, code }) => (
                                <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                    <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify-center'>
                                        <button onClick={() => handleClickDemo(demo)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Demo</button>
                                        <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex justify-center'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    )
}

export default AllProjects
