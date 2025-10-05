import React from 'react';
import { FaGithub } from "react-icons/fa";

const Experience = () => {
  return (
    <section name="Experience" className="relative text-white p-4 mt-20 py-10 max-w-[1000px] mx-auto">
      <h2 className='text-4xl font-bold inline border-b-4 mb-6 border-primary-color/40 sm:text-5xl'>Experience</h2>
      <div className="space-y-6 mt-6 mb-4">

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 duration-500">
          <h3 className="text-2xl font-bold text-green-400">Digital Image Processing Lab (DIP Lab)</h3>
          <p className="text-lg text-gray-400">July 2024 - Present</p>
          <h4 className="text-xl font-semibold mt-2">Research Assistant</h4>
          <p className="text-gray-300 mb-4">Peshawar, Pakistan</p>
          <ul className="list-decimal list-inside space-y-2 text-gray-300">
            <li>
              <span className='font-bold'>Major research topics: </span>Scene Understanding, Autonomous Navigation, Multimodal Vision-Language Models.
            </li>
            <li>
              Teaching Assistant for courses:
              <ul className="list-disc list-inside ml-5">
                <li><a className='text-blue-500' href='https://github.com/qazimsajjad/Data-Visualization'>Data Visualization (DSC 635)</a></li>
                <li>Digital Image Processing (COMP416)</li>
                <li>Advanced Programming (COMP327)</li>
                <li>Information Retrieval (COMP423)</li>
                <li>Artificial Neural Networks (COMP413)</li>
              </ul>
            </li>
          </ul>
        </div>


        <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl hover:scale-105 duration-500">
          <h3 className="text-2xl font-bold text-green-400">Corvit Networks</h3>
          <p className="text-lg text-gray-400">Jan 2025 - Aug 2025</p>
          <h4 className="text-xl font-semibold mt-2">Artificial Intelligence Instructor</h4>
          <p className="text-gray-300 mb-4">Islamabad, Pakistan</p>
          <ul className="list-decimal list-inside space-y-6 text-gray-300">
            <li>
              Delivered the "𝐀𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 (𝐌𝐚𝐜𝐡𝐢𝐧𝐞 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 & 𝐃𝐞𝐞𝐩 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠)" course at Corvit Networks,
              as part of the Prime Minister’s Special Initiative for Youth in collaboration with NAVTTC. (Jan 2025 – Mar 2025)
              <div className="flex justify-center mt-2">
                <a
                  href="https://github.com/ImranNawar/navttc-ai-workspace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-white flex items-center gap-2"
                >
                  <FaGithub size={20} /> View Repo
                </a>
              </div>
            </li>

            <li>
              Delivered the "𝗛𝗖𝗖𝗗𝗔-𝗔𝗜" (Huawei Certified Developer Associate – Artificial Intelligence) course at Corvit Networks,
              as part of the Huawei's mission to empower youth across Pakistan in collaboration with NAVTTC. (May 2025 – Aug 2025)
              <div className="flex justify-center mt-2">
                <a
                  href="https://github.com/ImranNawar/artificial-intelligence-course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-white flex items-center gap-2"
                >
                  <FaGithub size={20} /> View Repo
                </a>
              </div>
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
              Worked on <span className="font-medium">autonomous navigation project</span> for BS thesis using Jetson Nano.
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