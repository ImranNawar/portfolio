import React from 'react';

const Expertise = () => {
  return (
    <section name="Expertise" className='relative text-white p-4 mt-20 py-10 max-w-[1000px] mx-auto'>
      <h2 className='text-3xl font-bold mb-4'>MY EXPERTISE AND RESEARCH INTERESTS</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <div className='bg-gray-700 rounded-lg p-6 h-full shadow-md hover:scale-105 duration-500 py-2'>
          <h3 className='text-3xl font-semibold mb-4 text-green-500'>AI and Computer Vision Research</h3>
          <p className='text-lg'>
            As a dedicated AI and Computer Vision Researcher, I specialize in exploring cutting-edge topics in Scene Understanding and Autonomous Navigation. My research focuses on real-world applications of AI in solving complex challenges.
          </p>
        </div>
        <div className='bg-gray-700 rounded-lg p-6 h-full shadow-md hover:scale-105 duration-500 py-2'>
          <h3 className='text-3xl font-semibold mb-4 text-green-500'>Machine Learning and Deep Learning</h3>
          <p className='text-lg'>
            With a strong background in machine learning and deep learning, I work on optimizing algorithms and enhancing real-time performance for applications in Computer Vision and AI.
          </p>
        </div>
        <div className='bg-gray-700 rounded-lg p-6 h-full shadow-md hover:scale-105 duration-500 py-2'>
          <h3 className='text-3xl font-semibold mb-4 text-green-500'>Frontend Development (Past Experience)</h3>
          <p className='text-lg'>
            My journey started with web development, where I honed my skills as a frontend developer, creating dynamic, user-friendly applications. This experience laid the foundation for my transition into AI research.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
