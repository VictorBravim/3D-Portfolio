// About.tsx
'use client'
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/Logo.webp';
import { FaGithub, FaLinkedin, FaInstagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGit, FaSass, FaAngular, FaVuejs, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase, SiPhp, SiAdobephotoshop, SiFigma } from 'react-icons/si';
import SkillsChart from './SkillsChart';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

    const controls = useAnimation();
    const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        if (aboutInView) {
            controls.start('visible');
        }
    }, [controls, aboutInView]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined' && skillsRef.current) {
                const scrollPosition = window.scrollY;
                skillsRef.current.style.transform = `translateX(${scrollPosition * -0.2}px)`;
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div id='about' className="bg-black text-white py-40 px-5 md:px-20">
            <div className="container mx-auto flex flex-col space-y-10">
                <motion.div
                    ref={aboutRef}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className='flex flex-col lg:flex-row'
                >
                    <motion.div variants={itemVariants} className="flex flex-col w-full lg:w-1/2 mb-10">
                        <div className="flex flex-col md:flex-row items-center md:mr-8">
                            <Image src={logo} alt="Victor Bravim" width={180} height={150} className="rounded-full mb-4 md:mb-0" />
                            <div className="text-center md:text-left md:ml-8">
                                <h1 className="text-4xl font-bold mb-1">Victor Bravim</h1>
                                <p className="text-lg">Front-End Developer</p>
                                <p className="text-lg mb-2">UI Designer</p>
                                <div className="flex justify-left gap-4 text-3xl">
                                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                        <FaGithub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                        <FaLinkedin />
                                    </a>
                                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
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
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className='w-full lg:w-1/2'>
                        <SkillsChart />
                    </motion.div>
                </motion.div>
                <div className="relative w-full overflow-hidden mb-10">
                    <div ref={skillsRef} className="flex w-full gap-4 text-6xl whitespace-nowrap">
                        {skills.concat(skills).map((icon, index) => (
                            <span key={index} className="hover:text-gray-400 transition duration-300">
                                {icon}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;