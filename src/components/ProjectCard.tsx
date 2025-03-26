import { motion } from 'framer-motion';
import React from 'react'
import { useState } from 'react';

export default function ProjectCard(
    { href, title, body, technologies, image, details } :
    { href: string, title: string, body: string, technologies: string[], image: string, details: { screenshot: string, description: string }[] }
) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <li className="link-card relative">
                <div className="flex flex-col space-y-5 justify-between" onClick={() => setIsOpen(true)}>
                    <img src={image} alt="imagen proyecto" className="rounded-xl"></img>
                    <h2 className="color-blue">
                        {title}
                    </h2>
                    <p className="t-body">
                        {body}
                    </p>
                    <p>Tecnologias</p>
                    <div className="flex flex-row justify-start flex-wrap gap-2">
                        {technologies.map(skill => (
                            <div className="capsule">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </li>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50" onClick={() => setIsOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-gray-900 text-white p-6 rounded-lg max-w-3xl w-full relative overflow-y-auto max-h-[80vh]"
                        onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-2 right-2 text-white" onClick={() => setIsOpen(false)}>
                            X
                        </button>
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {technologies.map((skill, index) => (
                                <div key={index} className="capsule bg-blue-500 text-white px-2 py-1 rounded-md">
                                    {skill}
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">{body}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {details.map((detail, index) => (
                                <div>
                                    <img key={index} src={detail.screenshot} alt="detalle proyecto" className="rounded-lg"></img>
                                    <p>{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    )
}
