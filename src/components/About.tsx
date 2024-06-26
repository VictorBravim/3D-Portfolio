// About.tsx
'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/Logo.webp';
import { FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGit, FaSass, FaAngular, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiPhp, SiAdobephotoshop, SiFigma } from 'react-icons/si';
import SkillsChart from './SkillsChart';
import FadeInSection from './FadeInSection';

interface AboutProps {
    language: string;
}

const skills = [
    <FaHtml5 key="html" />,
    <FaCss3Alt key="css" />,
    <FaJs key="js" />,
    <FaReact key="react" />,
    <FaNode key="node" />,
    <FaGit key="git" />,
    <FaSass key="sass" />,
    <SiTypescript key="typescript" />,
    <SiNextdotjs key="nextjs" />,
    <SiTailwindcss key="tailwindcss" />,
    <FaAngular key="angular" />,
    <FaVuejs key="vuejs" />,
    <SiFirebase key="firebase" />,
    <FaBootstrap key="bootstrap" />,
    <SiPhp key="php" />,
    <SiAdobephotoshop key="photoshop" />,
    <SiFigma key="figma" />,
];

const About: React.FC<AboutProps> = ({ language }) => {
    const skillsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined' && skillsRef.current) {
                const scrollPosition = window.scrollY;
                skillsRef.current.style.transform = `translateX(${scrollPosition * -0.2}px)`;
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div id='about' className="bg-black text-white py-40 pt-20 px-5 md:px-20" 
          style={{ 
            backgroundImage: "url('/bg.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
            <div className="container mx-auto flex flex-col space-y-10">
                <FadeInSection>
                    <div className='flex flex-col lg:flex-row mb-12'>
                        <div className="flex flex-col w-full lg:w-1/2 mb-10">
                            <div className="flex flex-col md:flex-row items-center md:mr-8">
                                <Image src={logo} alt="Victor Bravim" className="rounded-full mb-4 md:mb-0" style={{ height: "175px", width: "auto" }} />
                                <div className="text-center md:text-left md:ml-8">
                                    <h1 className="text-4xl font-bold mb-1">Victor Bravim</h1>
                                    <p className="text-lg">Front-End Developer</p>
                                    <p className="text-lg mb-2">UI Designer</p>
                                    <div className="flex justify-center lg:justify-start gap-4 text-3xl">
                                        <a href="https://github.com/VictorBravim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                            <FaGithub />
                                        </a>
                                        <a href="https://www.linkedin.com/in/VictorBravim/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                            <FaLinkedin />
                                        </a>
                                        <a href="https://www.instagram.com/victorbravim_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                            <FaInstagram />
                                        </a>
                                        <a href="https://www.figma.com/@VictorBravim" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                            <SiFigma />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:text-left mt-4 md:mt-0 max-w-lg">
                                <p className="text-lg">
                                    {language === 'PT' ? (
                                        "Olá! Sou Victor Bravim, um desenvolvedor front-end de 19 anos de Lorena, SP. Tenho experiência em JavaScript, TypeScript, PHP e trabalhei com frameworks como Next.js, React, Vue.js e Angular. Também domino Bootstrap e tenho experiência em criação de landing pages e websites utilizando MongoDB e Firebase. Além disso, possuo habilidades em Node.js, SQL, Git, UI design utilizando Figma e Photoshop, e conhecimentos básicos em modelagem 3D no Spline."
                                    ) : (
                                        "Hello! I'm Victor Bravim, a 19-year-old front-end developer from Lorena, SP. I have experience in JavaScript, TypeScript, PHP, and worked with frameworks like Next.js, React, Vue.js, and Angular. I also master Bootstrap and have experience in creating landing pages and websites using MongoDB and Firebase. Additionally, I have skills in Node.js, SQL, Git, UI design using Figma and Photoshop, and basic knowledge in 3D modeling in Spline."
                                    )}
                                </p>
                                <div className='w-full flex justify-center lg:justify-start items-center mt-4'>
                                    <a href="/CV.pdf" download="CV.pdf" aria-label="Baixar meu currículo em PDF">
                                        <h1 className='border-b border-white text-2xl' style={{ textShadow: '1px 0 12px rgba(0, 0, 0, 0.6)' }}>
                                            {language === 'PT' ? (
                                                "Baixar CV"
                                            ) : (
                                                "Download CV"
                                            )}
                                        </h1>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-[75%] flex items-center justify-center lg:justify-end'>
                            <SkillsChart />
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="relative w-full overflow-hidden skills-container">
                        <div className="skills-overlay"></div> 
                        <div ref={skillsRef} className="flex w-full gap-4 text-6xl whitespace-nowrap skills-icons">
                            {skills.concat(skills).map((icon, index) => (
                                <span key={index} className="hover:text-gray-400 transition duration-300">
                                    {icon}
                                </span>
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default About;