import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const NavbarMiscellaneous = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 flex justify-between h-20 items-center py-4 px-2 text-white mx-auto md:px-24 md:py-0 w-full z-30 transition-colors duration-700 
      ${isScrolled ? 'bg-gray-950/90' : 'bg-gray-950/50'}`}
    >
      <div className='flex flex-row gap-4 items-center'>
        <NavLink
          to='/'
          className='text-[1.1rem] lg:text-[1.3rem] hover:text-primary-color hover:scale-125 duration-500'
        >
          <i className='bx bx-home-heart mr-2'></i>
          Home
        </NavLink>
      </div>
    </header>
  )
}

export default NavbarMiscellaneous