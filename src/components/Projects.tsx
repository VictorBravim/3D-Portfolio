// Projects.tsx
'use client';
import React, { useState } from 'react';
import { FaGithub, FaAngular, FaVuejs } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import FadeInSection from './FadeInSection';
import Image from 'next/image';
import mymovies from '@/assets/mymovies.webp';
import norishi from '@/assets/Norishi.webp';
import exotics from '@/assets/exotics.webp';
import webstore from '@/assets/webstore.webp'
import cofty from '@/assets/cofty.webp';
import arenax from '@/assets/arenax.webp';

interface ProjectsProps {
    language: string;
}

const projects = [
    {
        title: 'Exotics',
        description: 'Landing Page',
        category: 'web',
        imageUrl: exotics,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://exotics.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Exotics',
    },
    {
        title: 'Cofty',
        description: 'Landing Page',
        category: 'web',
        imageUrl: cofty,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://cofty.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Cafty',
    },
    {
        title: 'ArenaX',
        description: 'Landing Page',
        category: 'web',
        imageUrl: arenax,
        technologies: [<FaAngular key="angular" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />],
        liveUrl: 'https://arena-x-zeta.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/ArenaX',
    },
    {
        title: 'WebStore',
        description: 'Template',
        category: 'web',
        imageUrl: webstore,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://web-store-pi.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/WebStore',
    },
    {
        title: 'Norishi',
        description: 'Single Page',
        category: 'web',
        imageUrl: norishi,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://norishi.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Norishi',
    },
    {
        title: 'MyMovies',
        description: 'Single Page',
        category: 'design',
        imageUrl: mymovies,
        technologies: [<FaVuejs key="vue" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />],
        liveUrl: 'https://my-movies-peach.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/MyMovies',
    },
    {
        title: 'Project 7',
        description: 'Design Project',
        category: 'design',
        imageUrl: mymovies,
        technologies: [<FaVuejs key="vue" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />],
        liveUrl: 'https://project7.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Project7',
    },
    {
        title: 'Project 8',
        description: 'Web Project',
        category: 'web',
        imageUrl: webstore,
        technologies: [<FaAngular key="angular" />, <SiTypescript key="typescript" />, <SiTailwindcss key="tailwind" />],
        liveUrl: 'https://project8.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Project8',
    },
    {
        title: 'Project 9',
        description: 'Design Project',
        category: 'design',
        imageUrl: cofty,
        technologies: [<SiTypescript key="typescript" />, <SiNextdotjs key="nextjs" />, <SiTailwindcss key="tailwindcss" />],
        liveUrl: 'https://project9.vercel.app/',
        repoUrl: 'https://github.com/VictorBravim/Project9',
    },
];

const Projects: React.FC<ProjectsProps> = ({ language }) => {
    const [filter, setFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(6);

    const handleLoadMore = () => {
        setVisibleProjects(prev => prev + 3);
    };

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

    return (
        <section id='projects' className="bg-black text-white p-10 py-32"
        style={{ 
            backgroundImage: "url('/bg2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="container mx-auto">
                <FadeInSection>
                    <div className='flex flex-col lg:flex-row justify-between'>
                        <div className="flex justify-start mb-8">
                            <button
                                className={`px-4 py-2 mr-2 ${filter === 'all' ? 'bg-white text-black' : 'text-white bg-transparent'} border border-white`}
                                onClick={() => setFilter('all')}
                            >
                                    {language === 'PT' ? (
                                        "Todos"
                                    ) : (
                                        "All"
                                    )}
                            </button>
                            <button
                                className={`px-4 py-2 mx-2 ${filter === 'web' ? 'bg-white text-black' : 'text-white bg-transparent'} border border-white`}
                                onClick={() => setFilter('web')}
                            >
                                Web
                            </button>
                            <button
                                className={`px-4 py-2 mx-2 ${filter === 'design' ? 'bg-white text-black' : 'text-white bg-transparent'} border border-white`}
                                onClick={() => setFilter('design')}
                            >
                                Design
                            </button>
                        </div>
                        {visibleProjects < filteredProjects.length && (
                            <div className="flex justify-end mb-8">
                                <button
                                    className="bg-transparent text-white text-xl font-bold py-2 px-4 border border-white transition hover:bg-white hover:text-black"
                                    onClick={handleLoadMore}
                                >
                                    {language === 'PT' ? (
                                        "Carregar Mais"
                                    ) : (
                                        "Show More"
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </FadeInSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.slice(0, visibleProjects).map((project, index) => (
                        <FadeInSection key={index}>
                            <div className="relative group">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="w-full h-70 object-cover object-center group-hover:grayscale-0 transition duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-center p-4">
                                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                                    <p className="mb-4">{project.description}</p>
                                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                                        {project.technologies.map((icon, i) => (
                                            <span key={i} className="text-2xl">{icon}</span>
                                        ))}
                                    </div>
                                    <div className="flex space-x-4">
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black text-xl font-bold py-2 px-4 transition hover:bg-gray-200">
                                                Live Preview
                                            </a>
                                        )}
                                        {project.repoUrl && (
                                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="bg-white flex items-center text-black text-xl font-bold py-2 px-4 transition hover:bg-gray-200">
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
        </section>
    );
};

export default Projects;