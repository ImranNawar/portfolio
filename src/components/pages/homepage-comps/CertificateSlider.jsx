import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link as ScrollLink } from 'react-scroll';
import CertificateModal from './CertificateModal';

const CertificateSlider = ({ certificates }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToScroll: 1,
        draggable: true,
        rows: 2,
        responsive: [
            {
                breakpoint: 3000,
                settings: {
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            },
            {
                breakpoint: 280,
                settings: 'unslick' // destroys slick
            }
        ]
    };

    const openCertificateModal = (image) => {
        setSelectedImage(image);
    };

    const Dropdown = ({ title, subtitle, description }) => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };

        return (
            <div className={`bg-gray-800 p-4 rounded-md ${isOpen ? 'bg-opacity-75' : ''}`}>
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={toggleDropdown}
                >
                    <h3 className="text-3xl font-bold text-green-400">{title}</h3>
                    <i
                        className={`bx ${isOpen ? 'bx-chevron-up' : 'bx-chevron-down'
                            } text-xl text-primary-color`}
                    ></i>
                </div>
                <h4 className="text-xl mt-1 text-white">{subtitle}</h4>
                {isOpen && <p className="text-lg mt-2">{description}</p>}
            </div>
        );
    };

    return (
        <section name="Education" className="relative w-full h-unset md:h-screen text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="mb-2">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">Education</h2>
                    <div className="space-y-6 mt-4">
                        <Dropdown
                            title="Intermediate in Computer Science (HSSC)"
                            subtitle="Islamia College, Peshawar (2018-20)"
                            description="I did my Higher Secondary education from a very well-known college of KPK as well as all over Pakistan, the Islamia College Peshawar. I did my higher secondary education in Computer Science."
                        />
                        <Dropdown
                            title="Bachelor of Science in Computer Science"
                            subtitle="Islamia College University, Peshawar (2020-24)"
                            description="I started my bachelor's degree in Computer Science in 2020 from Islamia College University, Peshawar and will continue until 2024."
                        />
                        <Dropdown
                            title="My Web Development Journey"
                            description="I started web development in 2022 and have been consistently learning. Now I have skills in JavaScript and ReactJs, as well as other technologies like HTML, CSS, SCSS, Tailwind CSS, and GitHub. I am still learning new technologies and polishing my skills. For more details, check out my project section."
                        />
                    </div>
                    <p className="py-6 text-2xl">Check out some of my certificates</p>
                </div>


                <Slider {...settings} className="grid w-[90%] lg:w-full mx-auto">
                    {certificates.map((certificate, index) => (
                        <div onClick={() => openCertificateModal(certificate.image)} key={index} className="p-4 cursor-zoom-in">
                            <img src={certificate.image} alt="Certificate" className="mx-auto w-full h-[200px] lg:h-[220px] rounded-md object-contain" />
                        </div>
                    ))}
                </Slider>
            </div>

            {/* <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink> */}

            <CertificateModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </section>
    );
};

export default CertificateSlider;
