// Hero.tsx
import React, { useEffect, useState, Suspense, lazy } from 'react';

interface HeroProps {
    language: string;
}

const MobileIframe = lazy(() => import('./MobileIframe'));
const DesktopIframe = lazy(() => import('./DesktopIframe'));

const Hero: React.FC<HeroProps> = ({ language }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    return (
        <div id='hero' className="relative flex justify-center items-center h-screen bg-black">
            <div className="absolute top-0 left-0 w-full h-full">
                <Suspense fallback={
                    <div className="flex justify-center items-center h-full w-full">
                        <div className="loader"></div>
                    </div>
                }>
                    {isMobile !== null && (isMobile ? <MobileIframe /> : <DesktopIframe />)}
                </Suspense>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-16 bg-black"></div>
        </div>
    );
};

export default Hero;