import React from 'react'
import MobileSocialLinks from './MobileSocialLinks';
import styled from 'styled-components';

const careerItems = [
  {
    date: '2020 – 2024',
    logo: '/images/logos/icp_logo.webp',
    org: 'Islamia College Peshawar',
    role: 'BS in Computer Science',
    logoBg: false,
  },
  {
    date: 'Nov 2023 – Present',
    logo: '/images/logos/diplab_logo.webp',
    org: 'DIP Lab',
    role: 'Research Assistant',
    logoBg: false,
  },
  {
    date: 'Jan 2025 – Aug 2025',
    logo: '/images/logos/corvit_logo.webp',
    org: 'Corvit Networks',
    role: 'AI Instructor',
    logoBg: true,
  },

];

const CareerTimeline = () => (
  <div className="mt-2 w-full">
    <h3 className="text-lg font-semibold text-green-400 mb-2">Career Trajectory</h3>
    {/* <div className="rounded-lg border border-gray-700/60 bg-gray-900/40 backdrop-blur-sm p-2 sm:p-5"> */}
      <div className="relative overflow-x-auto pb-1">
        <div className="relative min-w-[300px]">
          <div
            className="absolute left-[calc(100%/6)] right-[calc(100%/6)] top-[2.6rem] h-px bg-gray-600"
            aria-hidden="true"
          />
          <div className="flex justify-between items-start relative z-10">
            {careerItems.map(({ date, logo, org, role, logoBg }) => (
              <div
                key={org + date}
                className="group flex flex-col items-center flex-1 min-w-0 px-1"
              >
                <span className="text-[10px] sm:text-xs text-gray-400 mb-2.5 text-center leading-tight whitespace-nowrap">
                  {date}
                </span>
                <div className="w-3 h-3 rounded-full border-2 border-primary-color bg-gray-900 shrink-0 mb-3 transition-transform duration-300 group-hover:scale-125" />
                <div
                  className={`rounded-md flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${logoBg ? 'bg-white p-1.5' : 'p-0.5'
                    }`}
                >
                  <img
                    src={logo}
                    alt={org}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <p className="font-semibold text-[11px] sm:text-sm text-white mt-2 text-center leading-tight">
                  {org}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-0.5 leading-tight">
                  {role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    {/* </div> */}
  </div>
);

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
          <CareerTimeline />
          <h3 className="text-xl font-semibold text-green-400">Research Interests</h3>
          <p className="text-gray-300 text-justify">
            I am working at the intersection of computer vision and deep learning.
            I am passionate about applying AI in multidisciplinary domains to solve complex, real-world problems.
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