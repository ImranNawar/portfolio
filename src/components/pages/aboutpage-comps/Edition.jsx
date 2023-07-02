import React from 'react'

const Edition = () => {
    return (
        <section name="Edition" className='relative text-white p-4 py-10 grid gap-10 sm:grid-cols-2 max-w-[1000px] mx-auto'>
                <div className='grid place-items-center'>
                    <a href="https://www.youtube.com/channel/UCjtCZzmhh8fafKo5L-YbSyg" target='_blank' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end max-w-max'>
                        <i className='bx bxl-youtube mr-2 text-2xl' ></i>
                        Youtube channel
                    </a>
                </div>
            </section>
    )
}

export default Edition
