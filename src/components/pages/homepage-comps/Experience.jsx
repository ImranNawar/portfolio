import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Experience = () => {
  return (
    <section
      name="Experience"
      className="relative text-white p-4 mt-16 py-8 max-w-[1000px] mx-auto"
    >
      <h2 className="text-3xl font-bold inline border-b-4 mb-5 border-primary-color/40 sm:text-4xl">
        Experience
      </h2>

      <div className="space-y-5 mt-5 mb-4">

        {/* Digital Image Processing Lab */}
        <div className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl hover:scale-105 duration-500">

          <h3 className="text-xl font-bold text-green-400">
            Digital Image Processing Lab (DIP Lab)
          </h3>

          <p className="text-sm sm:text-base text-gray-400 mt-1">
            Peshawar, Pakistan
          </p>

          {/* Research Assistant */}
          <div className="mt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
              <h4 className="text-lg font-semibold">
                Research Assistant
              </h4>

              <p className="text-sm sm:text-base text-gray-400">
                July 2024 - Aug 2026
              </p>
            </div>

            <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300 mt-2.5">

              <li>
                Co-authored{' '}
                <span className="font-medium">
                  “NeuroShield-IoE: A Cognitive, Quantum-Resilient and
                  Self-Evolving Cybersecurity Framework for the Internet of Energy”
                </span>
                , published in{' '}
                <span className="font-medium">
                  IEEE Network (Impact Factor: 6.3, Q1)
                </span>
                .
              </li>

              <li>
                Co-authored{' '}
                <span className="font-medium">
                  “Democratizing Autonomous Driving Research via Economical Hardware”
                </span>
                , currently under review at IJVAS.
              </li>

              <li>
                Contributed to a{' '}
                <span className="font-medium">
                  UKRI-EPSRC NIA proposal
                </span>{' '}
                on AI risk modelling and differential privacy for healthcare
                systems (APP86824), with{' '}
                <span className="font-medium">
                  Dr. Maqsood Mahmud (Ulster University)
                </span>
                , currently under review.
              </li>

              <li>
                Worked as a Teaching Assistant for five courses:
                <ul className="list-disc list-inside ml-5 mt-1.5 space-y-0.5">
                  <li>
                    <a
                      className="text-blue-500 hover:text-white"
                      href="https://github.com/qazimsajjad/Data-Visualization"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Data Visualization (DSC 635)
                      <FaGithub className="inline ml-1" />
                    </a>
                  </li>

                  <li>Digital Image Processing (COMP416)</li>
                  <li>Information Retrieval (COMP423)</li>

                  <li>
                    <a
                      className="text-blue-500 hover:text-white"
                      href="https://github.com/qazimsajjad/Machine-Learning-Course"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Artificial Intelligence (COMP315)
                      <FaGithub className="inline ml-1" />
                    </a>
                  </li>

                  <li>Advanced Machine Learning (CSC 731)</li>
                </ul>
              </li>

            </ul>
          </div>

          {/* Undergraduate Student Researcher */}
          <div className="mt-5 pt-4 border-t border-gray-700">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
              <h4 className="text-lg font-semibold">
                Undergraduate Student Researcher
              </h4>

              <p className="text-sm sm:text-base text-gray-400">
                Nov 2023 - June 2024
              </p>
            </div>

            <ul className="list-decimal list-inside space-y-2 text-sm sm:text-base text-gray-300 mt-2.5">

              <li>
                Designed and built an{' '}
                <span className="font-medium">
                  autonomous navigation prototype
                </span>{' '}
                on Jetson Nano edge hardware for my BS thesis.
              </li>

              <li>
                Developed an{' '}
                <span className="font-medium">
                  RFID-based door lock system
                </span>{' '}
                using an Arduino microcontroller.
              </li>

            </ul>
          </div>

        </div>


        {/* Corvit Networks */}
        <div className="bg-gray-800 rounded-lg p-5 shadow-lg hover:shadow-xl hover:scale-105 duration-500">

          <h3 className="text-xl font-bold text-green-400">
            Corvit Networks
          </h3>

          <p className="text-sm sm:text-base text-gray-400 mt-1">
            Islamabad, Pakistan
          </p>

          <div className="mt-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5">
              <h4 className="text-lg font-semibold">
                Artificial Intelligence Instructor
              </h4>

              <p className="text-sm sm:text-base text-gray-400">
                Dec 2024 - Aug 2025
              </p>
            </div>

            <ul className="list-decimal list-inside space-y-4 text-sm sm:text-base text-gray-300 mt-2.5">

              <li>
                Designed and delivered the{' '}
                <span className="font-medium">
                  Artificial Intelligence (Machine Learning & Deep Learning)
                </span>{' '}
                course at Corvit Networks under the Prime Minister's Special
                Initiative for Youth in collaboration with NAVTTC, training
                20 students (Dec 2024 - Mar 2025).

                <div className="flex justify-center mt-1.5">
                  <a
                    href="https://github.com/ImranNawar/navttc-ai-workspace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-white flex items-center gap-2"
                  >
                    <FaGithub size={18} /> View Repo
                  </a>
                </div>
              </li>

              <li>
                Delivered the{' '}
                <span className="font-medium">
                  HCCDA-AI (Huawei Cloud Certified Developer Associate -
                  Artificial Intelligence)
                </span>{' '}
                course at Corvit Networks as part of Huawei's initiative to
                empower youth across Pakistan in collaboration with NAVTTC,
                training 50 students (May 2025 - Aug 2025).

                <div className="flex justify-center mt-1.5">
                  <a
                    href="https://github.com/ImranNawar/artificial-intelligence-course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-white flex items-center gap-2"
                  >
                    <FaGithub size={18} /> View Repo
                  </a>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;