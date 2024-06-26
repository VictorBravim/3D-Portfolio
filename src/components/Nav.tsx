// Nav.tsx
'use client'
import { HiX } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/assets/Logo.webp';
import About from './About';
import Hero from './Hero';
import Projects from "./Projects";
import Contact from "./Contact";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [heroLoaded, setHeroLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');
    const [language, setLanguage] = useState<string>('PT');
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleHeroLoad = () => {
        setHeroLoaded(true);
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 600) {
                setActiveSection('hero');
            } else if (scrollPosition >= 600 && scrollPosition < 1400) {
                setActiveSection('about');
            } else if (scrollPosition >= 1400 && scrollPosition < 2200) {
                setActiveSection('projects');
            } else {
                setActiveSection('contact');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        handleResize();
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleLanguage = () => {
        setLanguage(language === 'PT' ? 'EN' : 'PT');
    };

    return (
        <div className="relative">
            {(isMobile || heroLoaded) && (
                <div className="relative">
                    <div className={`lg:hidden w-full h-screen bg-black p-4 z-10 lg:p-6 fixed top-0 transition-transform duration-300 transform ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                        <div className="flex flex-col items-center mt-24 h-full">
                            <button
                                className={`block mt-10 text-md font-light lg:inline-block lg:mt-0 cursor-pointer hover:text-gray-text mr-0 lg:mr-6 transition duration-500 
                                ${activeSection === 'about' ? 'text-gray-custom' : 'text-gray-text'}`}
                                onClick={() => scrollToSection('about')}>
                                {language === 'PT' ? 'SOBRE' : 'ABOUT'}
                            </button>
                            <button
                                className={`block mt-10 text-md font-light lg:inline-block lg:mt-0 cursor-pointer hover:text-gray-text mr-0 lg:mr-6 transition duration-500 
                                ${activeSection === 'projects' ? 'text-gray-custom' : 'text-gray-text'}`}
                                onClick={() => scrollToSection('projects')}>
                                {language === 'PT' ? 'PROJETOS' : 'PROJECTS'}
                            </button>
                            <button
                                className={`block mt-10 text-md font-light lg:inline-block lg:mt-0 cursor-pointer hover:text-gray-text transition duration-500 
                                ${activeSection === 'contact' ? 'text-gray-custom' : 'text-gray-text'}`}
                                onClick={() => scrollToSection('contact')}>
                                {language === 'PT' ? 'CONTATO' : 'CONTACT'}
                            </button>
                            <button className="mt-10 text-md font-light lg:inline-block lg:mt-0 border-b border-t border-white cursor-pointer hover:text-gray-text transition duration-500" onClick={toggleLanguage}>
                                {language === 'PT' ? 'EN' : 'PT'}
                            </button>
                        </div>
                    </div>
                    <nav className="bg-black bg-opacity-50 px-6 lg:px-0 py-4 pt-6 fixed w-full lg:w-4/5 left-1/2 transform -translate-x-1/2 top-0 z-10">
                        <div className="max-w-8xl mx-auto flex justify-between items-center">
                            <div className="flex items-center flex-shrink-0 text-gray-custom">
                                <Image src={logo} alt="Logo" width={35} height={50} priority className="w-auto h-auto mr-2 ml-4 lg:ml-0" />
                            </div>
                            <div className="hidden lg:block">
                                <div className="flex items-center">
                                    <button
                                        className={`block mt-4 text-md font-light lg:inline-block lg:mt-0 cursor-pointer mr-12 transition duration-500 
                                        ${activeSection === 'hero' ? 'text-white' : 'text-white'}`}
                                        onClick={() => scrollToSection('hero')}>
                                        {language === 'PT' ? 'HOME' : 'HOME'}
                                    </button>
                                    <button
                                        className={`block mt-4 text-md font-light lg:inline-block lg:mt-0 cursor-pointer mr-12 transition duration-500 
                                        ${activeSection === 'about' ? 'text-white' : 'text-white'}`}
                                        onClick={() => scrollToSection('about')}>
                                        {language === 'PT' ? 'SOBRE' : 'ABOUT'}
                                    </button>
                                    <button
                                        className={`block mt-4 text-md font-light lg:inline-block lg:mt-0 cursor-pointer mr-12 transition duration-500 
                                        ${activeSection === 'projects' ? 'text-white' : 'text-white'}`}
                                        onClick={() => scrollToSection('projects')}>
                                        {language === 'PT' ? 'PROJETOS' : 'PROJECTS'}
                                    </button>
                                    <button
                                        className={`block mt-4 text-md font-thin lg:inline-block lg:mt-0 cursor-pointer transition duration-500 
                                        ${activeSection === 'contact' ? 'text-white' : 'text-white'}`}
                                        onClick={() => scrollToSection('contact')}>
                                        {language === 'PT' ? 'CONTATO' : 'CONTACT'}
                                    </button>
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center flex-shrink-0 text-white">
                                <button className="mr-4" onClick={toggleLanguage}>
                                    {language === 'PT' ? 'EN' : 'PT'}
                                </button>
                            </div>
                            <div className="block lg:hidden">
                                <button
                                    className="flex items-center mx-3 my-2 rounded text-gray-custom hover"
                                    type="button"
                                    onClick={toggleMenu}
                                    aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}>
                                    {menuOpen ? <HiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
                                </button>
                            </div>
                        </div>
                    </nav>
                </div>
            )}
            <Hero language={language} onLoad={handleHeroLoad} />
            <About language={language} />
            <Projects language={language} />
            <Contact language={language} />
        </div>
    );
}