import React from 'react';

const Experience = () => {
  return (
    <section name="Experience" className="relative text-white p-4 mt-20 py-10 max-w-[1000px] mx-auto">
      <h2 className='text-4xl font-bold inline border-b-4 mb-6 border-primary-color/40 sm:text-5xl'>Experience</h2>
      <div className="space-y-8 mt-6 mb-4">

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 duration-500">
          <h3 className="text-2xl font-bold text-green-400">Digital Image Processing Lab (DIP Lab)</h3>
          <p className="text-lg text-gray-400">July 2024 - Present</p>
          <h4 className="text-xl font-semibold mt-2">Research Assistant</h4>
          <p className="text-gray-300 mb-4">Peshawar, Pakistan</p>
          <ul className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              <span className='font-bold'>Major research topics: </span>Autonomous Navigation, Object Detection, Image Segmentation.
            </li>
            <li>Conducting research for democratizing Autonomous Driving research.</li>
            <li>
              Teaching Assistant for courses:
              <ul className="list-disc list-inside ml-5">
                <li><a  className='text-blue-500' href='https://github.com/qazimsajjad/Data-Visualization'>Data Visualization (DSC 635)</a></li>
                <li>Digital Image Processing (COMP416)</li>
                <li>Advanced Programming (COMP327)</li>
              </ul>
            </li>
          </ul>
        </div>


        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 duration-500">
          <h3 className="text-2xl font-bold text-green-400">Corvit Systems</h3>
          <p className="text-lg text-gray-400">Jan 2025 - Mar 2025, May 2025 - Present</p>
          <h4 className="text-xl font-semibold mt-2">Course Instructor</h4>
          <p className="text-gray-300 mb-4">Islamabad, Pakistan</p>
          <ul className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              Instructor for "Artificial Intelligence (Machine Learning & Deep Learning)" course in collaboration with the National Vocational & Technical Training Commission (NAVTTC) [Jan 2025 - Mar 2025]
            </li>
            <li>
              Teaching "HCCDA-AI: Huawei Cloud Certified Developer Associate - Artificial Intelligence" certification course on weekends [May 2025 - Present]
            </li>
          </ul>
        </div>


        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 duration-500">
          <h3 className="text-2xl font-bold text-green-400">Digital Image Processing Lab (DIP Lab)</h3>
          <p className="text-lg text-gray-400">Nov 2023 - June 2024</p>
          <h4 className="text-xl font-semibold mt-2">Undergraduate Student Researcher</h4>
          <p className="text-gray-300 mb-4">Peshawar, Pakistan</p>
          <ul className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              Developed an <span className="font-medium">autonomous navigation prototype</span> for a BS thesis using affordable hardware like Jetson Nano.
            </li>
            <li>
              Designed and built an autonomous car from scratch:
              <ul className="list-disc list-inside ml-5">
                <li>Integrated hardware components.</li>
                <li>Optimized pretrained deep learning models for object detection and road segmentation.</li>
                <li>Implemented a control module for obstacle avoidance with a monocular camera.</li>
              </ul>
            </li>
            <li>
              Created an <span className="font-medium">RFID-based door lock system</span> using an Arduino microcontroller.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;