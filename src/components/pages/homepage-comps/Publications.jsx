import React from 'react'

const Publications = () => {
    const publications = [
        {
            id: 1,
            title: "NeuroShield-IoE: A Cognitive, Quantum-Resilient, and Self-Evolving Cybersecurity Framework for the Internet of Energy",
            authors: "Shehzad Ali*, Imran Nawar*, Ik Hyun Lee, Muhammad Sajjad, Aziz Alotaibi, Victor Hugo C. de Albuquerque, Khan Muhammad",
            venue: "IEEE Network",
            year: "2025",
            status: "Published",
            doi: "10.1109/MNET.2025.3620641",
            url: "https://ieeexplore.ieee.org/document/11235518",
            statusStyle: "bg-green-500/20 border border-green-500"
        },
        {
            id: 2,
            title: "Democratizing Autonomous Driving Research via Economical Hardware",
            authors: "Imran Nawar, Wajahat Ullah, Muhammad Sajjad",
            venue: "Springer IJIRA",
            year: "2026",
            status: "Under Review",
            statusStyle: "bg-yellow-500/20 border border-yellow-500"
        },
    ]

    return (
        <section name='Publications' className='relative w-full md:min-h-screen h-unset'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>

                <div className='mb-8'>
                    <h2 className='text-4xl font-bold inline pb-1 border-b-4 border-primary-color/40 sm:text-5xl'>Publications</h2>
                    <p className='py-6'>Research papers and publications</p>
                </div>

                <div className='space-y-6 pb-8'>
                    {publications.map(({ id, title, authors, venue, year, status, doi, url, statusStyle }) => (
                        <div 
                            key={id} 
                            className='bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-primary-color/60 transition-all duration-300 hover:shadow-lg hover:shadow-primary-color/20'
                        >
                            {/* Status Badge */}
                            <div className='flex items-start justify-between mb-3 gap-4'>
                                <div className='flex-1'>
                                    <h3 className='text-lg font-semibold text-primary-color mb-2 leading-tight'>
                                        {title}
                                    </h3>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusStyle}`}>
                                    {status}
                                </span>
                            </div>

                            {/* Authors */}
                            <p className='text-sm text-gray-400 mb-2'>
                                <span className='text-gray-500 font-semibold'>Authors: </span>
                                {authors}
                            </p>

                            {/* Publication Details */}
                            <div className='flex flex-wrap gap-4 items-center text-sm text-gray-300 mb-4'>
                                <div>
                                    <span className='text-gray-500'>Venue: </span>
                                    <span className='text-gray-300'>{venue}</span>
                                </div>
                                <div>
                                    <span className='text-gray-500'>Year: </span>
                                    <span className='text-gray-300'>{year}</span>
                                </div>
                            </div>

                            {/* Links */}
                            <div className='flex flex-wrap gap-3'>
                                {url && (
                                    <a 
                                        href={url} 
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center px-4 py-2 bg-primary-color/20 border border-primary-color/50 rounded-md text-primary-color hover:bg-primary-color/40 hover:text-black transition-all duration-300 text-sm font-semibold'
                                    >
                                        <i className='bx bx-link-external mr-2 text-base'></i>
                                        Read Paper
                                    </a>
                                )}
                                {doi && (
                                    <a 
                                        href={`https://doi.org/${doi}`} 
                                        target='_blank' 
                                        rel='noopener noreferrer'
                                        className='inline-flex items-center px-4 py-2 bg-gray-700/30 border border-gray-600 rounded-md text-gray-300 hover:bg-gray-700/60 hover:text-white transition-all duration-300 text-sm font-semibold'
                                    >
                                        <i className='bx bx-book mr-2 text-base'></i>
                                        DOI: {doi}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Collaborators Section */}
                <div className='mt-12 pt-8 border-t border-gray-700'>
                    <h3 className='text-2xl font-bold text-primary-color mb-6'>Research Collaborators</h3>
                    
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {/* Dr. Khan Muhammad */}
                        <div className='bg-gray-900/50 backdrop-blur-sm rounded-lg p-5 border border-gray-700 hover:border-primary-color/60 transition-all duration-300'>
                            <h4 className='text-lg font-semibold text-gray-100 mb-1'>Dr. Khan Muhammad</h4>
                            <p className='text-sm text-gray-400 mb-2'>
                                <span className='text-gray-500 font-semibold'>Affiliation: </span>
                                VIS2KNOW Lab, Sung Kyun Kwan University, South Korea
                            </p>
                            <p className='text-xs text-gray-400'>
                                <span className='text-gray-500 font-semibold'>Collaboration: </span>
                                Co-authored 2 research papers
                            </p>
                        </div>

                        {/* Dr. Maqsood Mahmud */}
                        <div className='bg-gray-900/50 backdrop-blur-sm rounded-lg p-5 border border-gray-700 hover:border-primary-color/60 transition-all duration-300'>
                            <h4 className='text-lg font-semibold text-gray-100 mb-1'>Dr. Maqsood Mahmud</h4>
                            <p className='text-sm text-gray-400 mb-2'>
                                <span className='text-gray-500 font-semibold'>Affiliation: </span>
                                Ulster University, Ireland
                            </p>
                            <p className='text-xs text-gray-400'>
                                <span className='text-gray-500 font-semibold'>Collaboration: </span>
                                Research proposal collaboration
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publications

