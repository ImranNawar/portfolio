import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { Link } from "react-router-dom";

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/imran-nawar/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/ImranNawar'
        },
        // {
        //     id: 3,
        //     child: (
        //         <>
        //             Google Scholar <SiGooglescholar size={30} />
        //         </>
        //     ),
        //     href: 'https://scholar.google.com/citations?user=MY_SCHOLAR_ID',
        // },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:imran1nawar@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            to: '/resume',
            style: 'rounded-br-md',
            isRoute: true
        }
    ]

    return (
        <div className="hidden desktop:flex flex-col top-[35%] left-0 fixed z-30">
            <ul>
                {links.map(({ id, child, href, to, style, isRoute }) => (
                    <li
                        key={id}
                        className={`flex justify-between items-center w-40 h-14 px-4 bg-primary-color/90 ml-[-100px] duration-500 hover:rounded-md hover:ml-[-10px] ${style}`}
                    >
                        {isRoute ? (
                            <Link
                                to={to}
                                className="flex justify-between items-center w-full text-black font-semibold ml-4"
                            >
                                {child}
                            </Link>
                        ) : (
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-black font-semibold ml-4"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLinks;
