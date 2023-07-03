import React from 'react';

const Services = () => {
  return (
    <section name="Services" className='relative text-white p-4 mt-20 py-10 max-w-[1000px] mx-auto'>
      <h2 className='text-4xl font-bold mb-4'>WHAT I DO?</h2>
      <h2 className='text-4xl mb-4'>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div className='bg-gray-700 rounded-lg p-6 h-full shadow-md hover:scale-105 duration-500 py-2'>
          <h3 className='text-3xl font-semibold mb-4 text-green-500'>JavaScript Developer</h3>
          <p className='text-lg'>
            I am a JavaScript developer with 1 years of experience. I am proficient in building websites using JavaScript and am ready to assist you with any kind of JavaScript-powered website you desire.
          </p>
        </div>
        <div className='bg-gray-700 rounded-lg p-6 h-full shadow-md hover:scale-105 duration-500 py-2'>
          <h3 className='text-3xl font-semibold mb-4 text-green-500'>React Developer</h3>
          <p className='text-lg'>
            I chose the React framework due to its immense popularity in the web development world. As a React developer, I specialize in creating dynamic and responsive websites using React. Feel free to reach out for any kind of website you need with React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
