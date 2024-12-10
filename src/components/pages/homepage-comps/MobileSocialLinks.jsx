import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiGooglescholar } from "react-icons/si";
import { Link } from "react-router-dom";

const MobileSocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} /> LinkedIn
                </>
            ),
            href: 'https://www.linkedin.com/in/imran-nawar-a2a47a24a/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} /> GitHub 
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
                    <HiOutlineMail size={20} /> Mail
                </>
            ),
            href: 'mailto:imran1nawar@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                    <BsFillPersonLinesFill size={20} /> Resume 
                </>
            ),
            to: 'resume',
            style: 'rounded-br-md',
            isRoute: true
        }
    ]

    return (
        <div className="flex mt-4 desktop:hidden">
            <ul className="flex gap-2 flex-wrap justify-center">
                {links.map(({ id, child, href, to, style, isRoute }) => (
                    <li
                        key={id}
                        className={
                            "flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" +
                            " " +
                            style
                        }
                    >
                        {isRoute ? (
                            <Link
                                to={to}
                                className="flex gap-3 items-center w-full text-white text-sm"
                            >
                                {child}
                            </Link>
                        ) : (
                            <a
                                href={href}
                                className="flex gap-3 items-center w-full text-white text-sm"
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

export default MobileSocialLinks;
