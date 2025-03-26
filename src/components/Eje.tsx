import { motion } from 'framer-motion';
import React, { useState } from 'react'

export default function Eje(
    { children, title, body, technologies, details }: 
    { children: React.ReactNode, title: string, body: string, technologies: string[], details: { screenshot: string, description: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(true)}>
                {children}
            </div>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50" onClick={() => setIsOpen(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="bg-gray-900 text-white p-6 rounded-lg max-w-5xl w-full relative overflow-y-auto max-h-[80vh]"
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
                        <p className='t-subtitle color-blue mb-4' >Conoce mas</p>
                        <div className="grid grid-cols-1 gap-4">
                            {details.map((detail, index) => (
                                <div className='flex gap-4 flex-col-reverse'>
                                    <img key={index} src={detail.screenshot} alt="detalle proyecto" className="rounded-lg" ></img>
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
