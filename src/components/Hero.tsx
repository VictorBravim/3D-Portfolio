// Hero.tsx
import React, { useEffect, useState } from 'react';

interface HeroProps {
    language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='hero' className="relative flex justify-center items-center h-screen bg-black">
            {isMobile ? (
                <iframe src='https://my.spline.design/untitledcopy-8e50161f2447a131e6cc910f59acead3/' frameBorder='0' width='100%' height='100%' className="absolute top-0 left-0 w-full h-full"></iframe>
            ) : (
                <iframe src='https://my.spline.design/untitled-3a40c92785ec96acc0872aa6f6c9934a/' frameBorder='0' width='100%' height='100%' className="absolute top-0 left-0 w-full h-full"></iframe>
            )}
            <div className="absolute bottom-0 right-0 w-48 h-16 bg-black"></div>
        </div>
    );
};

export default Hero;