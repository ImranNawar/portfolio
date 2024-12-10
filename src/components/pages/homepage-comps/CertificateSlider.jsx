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
        <section name="Education" className="relative w-full min-h-screen py-16 md:py-24 text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="mb-2">
                    <h2 className="text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1">Education</h2>
                    <div className="space-y-6 mt-4">
                        <Dropdown
                            title="Bachelor of Science in Computer Science"
                            subtitle="Islamia College University, Peshawar (2020-24)"
                            description="My undergraduate degree had a strong focus on deep learning, computer vision, and autonomous navigation.
                                        My final year project was titled 𝐃𝐞𝐞𝐩 𝐋𝐞𝐚𝐫𝐧𝐢𝐧𝐠 𝐀𝐬𝐬𝐢𝐬𝐭𝐞𝐝 𝐀𝐮𝐭𝐨𝐧𝐨𝐦𝐨𝐮𝐬 𝐍𝐚𝐯𝐢𝐠𝐚𝐭𝐢𝐨𝐧 𝐨𝐯𝐞𝐫 𝐄𝐜𝐨𝐧𝐨𝐦𝐢𝐜𝐚𝐥 𝐇𝐚𝐫𝐝𝐰𝐚𝐫𝐞."
                        />
                        <Dropdown
                            title="Intermediate in Computer Science (HSSC)"
                            subtitle="Islamia College, Peshawar (2018-20)"
                            description="I completed my Higher Secondary education in Computer Science at Islamia College, Peshawar, a renowned institution in KPK and Pakistan."
                        />
                    </div>
                    <p className="py-6 text-2xl">Check out some of my certificates</p>
                </div>


                <div className="w-[90%] lg:w-full mx-auto">
                    <Slider {...settings} className="grid w-[90%] lg:w-full mx-auto">
                        {certificates.map((certificate, index) => (
                            <div onClick={() => openCertificateModal(certificate.image)} key={index} className="p-4 cursor-zoom-in">
                                <img src={certificate.image} alt="Certificate" className="mx-auto w-full h-[200px] lg:h-[220px] rounded-md object-contain" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink> */}

            <CertificateModal selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        </section>
    );
};

export default CertificateSlider;
