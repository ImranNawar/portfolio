import React, { useEffect } from 'react'
import NavbarResume from './resumepage-comps/NavbarResume'
import Resume from './resumepage-comps/Resume';

const ResumePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <NavbarResume />
            <Resume />
        </>
    )
}

export default ResumePage
