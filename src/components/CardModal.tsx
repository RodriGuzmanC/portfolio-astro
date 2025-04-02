import { motion } from 'framer-motion';
import React, { useState } from 'react'

export default function CardModal(
    { children, title, body, technologies, details }:
        { children: React.ReactNode, title: string, body: string, technologies: string[], details: { screenshot: string, description: string }[] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div onClick={() => setIsOpen(true)}>
                {children}
            </div>
            {isOpen && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 z-50 block`}
                    onClick={() => setIsOpen(false)} // Cerrar el modal al hacer clic en el fondo
                >
                    <div
                        className="sm:max-w-[700px] max-h-[80vh] overflow-hidden flex flex-col bg-gray-900 p-6 mx-auto my-16 rounded-md"
                        onClick={(e) => e.stopPropagation()} // Prevenir que el clic en el modal cierre el modal
                    >
                        <div className="mb-4">
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <p className="text-sm text-gray-500">Tecnologías: {technologies.map((tech) => {
                                return <span key={tech} className="">{tech} </span>
                            })}</p>
                        </div>

                        <div className="overflow-y-auto pr-2 flex-grow">
                            <div className="space-y-6 pb-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Descripción del proyecto</h3>
                                    <p className="text-muted-foreground text-base">{body}</p>
                                </div>

                                <div className="space-y-8">
                                    <h3 className="text-lg font-medium">Screenshots del proyecto</h3>
                                    {details.map((detail, index) => (
                                        <div key={index} className="space-y-2 border-b pb-6 last:border-0">
                                            <div className="rounded-md overflow-hidden">
                                                <img
                                                    src={detail.screenshot || "/placeholder.svg"}
                                                    alt={`Screenshot ${index + 1} de ${detail.description}`}
                                                    width={600}
                                                    height={400}
                                                    className="w-full object-cover"
                                                />
                                            </div>
                                            <p className="text-sm text-muted-foreground pt-2">{detail.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Botón para cerrar el modal */}
                        {/*<button
                            className="mt-4 text-blue-500 hover:underline"
                            onClick={() => setIsOpen(false)}
                        >
                            Cerrar
                        </button>*/}
                    </div>
                </div>
            )}
        </div>
    )
}
