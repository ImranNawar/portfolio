import React from 'react'
import MobileSocialLinks from './MobileSocialLinks';
import styled from 'styled-components';

const StyledImg = styled.img`
  margin-top: 40px;
  width: 300px;
  height: auto;
  border-radius: 1rem;
  object-fit: cover;
  filter: drop-shadow(0px -4px 4px rgba(0, 255, 0, 0.5));

  @media (max-width: 600px) {
    margin-top: 20px;
    width: 180px;
  }
`;

const About_Me = () => {
  return (
    <section name="About_Me" className="relative w-full md:min-h-screen pt-16">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-center h-full px-2 py-12 md:gap-8">
        {/* LEFT SIDE*/}
        <div className="flex flex-col order-2 md:order-1 w-full md:w-1/2 text-white space-y-5">

          <h2 className="text-3xl font-bold text-green-400">About Me</h2>
          <p className="text-gray-300 text-justify">
            Hi there! I am a Research Assistant at the Digital Image Processing (DIP) Lab, Islamia College Peshawar advised by 
            <a
              href="https://scholar.google.com.pk/citations?user=E4-dElIAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline ml-1"
            >
              Dr. Muhammad Sajjad
            </a> and
            <a
              href="https://scholar.google.co.kr/citations?user=k5oUZyQAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline ml-1"
            >
              Dr. Khan Muhammad
            </a>.
            Previously, I have worked with Corvit Networks Islamabad as an AI Instructor.
            I completed my BS in Computer Science at Islamia College Peshawar in 2024.
          </p>
          <div className="flex space-x-6 mt-4">
            <img
              src="/images/logos/icp_logo.webp"
              alt="Islamia College Peshawar"
              className="w-28 h-28 rounded-md object-contain"
            />
            <img
              src="/images/logos/diplab_logo.webp"
              alt="Digital Image Processing Lab"
              className="w-28 h-28 rounded-md object-contain"
            />
            <div className="bg-white p-2 rounded-md flex items-center justify-center">
              <img
                src="/images/logos/corvit_logo.webp"
                alt="Corvit Networks Islamabad"
                className="w-24 h-24 object-contain"
              />
            {/* <p>I’m currently involved in 3 main projects: ----, ---, ---. Please feel free to contact at imran 1 nawar dot at gmail dot com for collaboration.</p> */}
            </div>
          </div>

          <h3 className="text-xl font-semibold text-green-400">Research Interests</h3>
          <p className="text-gray-300 text-justify">
            I am working at the intersection of computer vision and deep learning. 
            I am interested in developing multimodal vision-language models for video understanding,
            with interests in video question answering and open-vocabulary recognition.
            I am also passionate about applying AI in multidisciplinary domains to solve complex, real-world problems.
          </p>


          <MobileSocialLinks />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center order-1 md:order-2">
          <StyledImg
            src="/images/imranAI.webp"
            alt="Imran Nawar"
            className="shadow-2xl shadow-primary-color/20"
          />

          <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
            Imran Nawar
          </h1>
          <h2 className="text-lg md:text-xl text-gray-300 mt-1">
            Research Assistant at DIP Lab
          </h2>
        </div>

      </div>
    </section>
  );
}

export default About_Me;