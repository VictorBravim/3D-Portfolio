// Projects.tsx
'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaAngular, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import Image from 'next/image';
import mymovies from '@/assets/mymovies.webp';
import norishi from '@/assets/Norishi.webp';
import exotics from '@/assets/exotics.webp';
import webstore from '@/assets/webstore.webp'
import cafty from '@/assets/cafty.webp';
import arenax from '@/assets/arenax.webp';

const projects = [
    {
        title: 'ArenaX',
        description: 'Landing Page',
        imageUrl: arenax,
        technologies: [<FaAngular key="angular" />, <SiNextdotjs key="next" />, <SiTailwindcss key="tailwind" />],
        liveUrl: 'https://arena-x-zeta.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/ArenaX',
    },
    {
        title: 'Cafty',
        description: 'Landing Page',
        imageUrl: cafty,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://cofty.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Cafty',
    },
    {
        title: 'WebStore',
        description: 'Template',
        imageUrl: webstore,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://web-store-pi.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/WebStore',
    },
    {
        title: 'Exotics',
        description: 'Landing Page',
        imageUrl: exotics,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://exotics.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Exotics',
    },
    {
        title: 'Norishi',
        description: 'Single Page',
        imageUrl: norishi,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://norishi.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Norishi',
    },
    {
        title: 'MyMovies',
        description: 'Single Page',
        imageUrl: mymovies,
        technologies: [<FaVuejs key="vue" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />],
        liveUrl: 'https://my-movies-peach.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/MyMovies',
    },
];

const Projects: React.FC = () => {
    return (
        <div id='projects' className="bg-black text-white p-10 py-32">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <FadeInSection key={index}>
                            <div className="relative group">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-70 object-cover object-center group-hover:grayscale-0 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center">
                                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                    <p className="mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.map((icon, i) => (
                                            <span key={i} className="text-2xl">{icon}</span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black text-xl font-bold py-2 px-4">
                                                Live Preview
                                            </a>
                                        )}
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-white flex items-center text-black text-xl font-bold py-2 px-4">
                                                <FaGithub />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div
            ref={ref}
            className={`fade-in-section ${inView ? 'is-visible' : ''}`}
        >
            {children}
        </div>
    );
};

export default Projects;
