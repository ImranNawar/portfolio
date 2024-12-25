import React, { useEffect } from "react";

const Resume = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex justify-center items-center p-10 pb-5">
            <div className="w-full max-w-4xl bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <iframe
                    src="/Imran_Nawar_CV.pdf"
                    title="Imran's Resume"
                    className="w-full h-[800px]"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
};

export default Resume;
