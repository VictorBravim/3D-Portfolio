// Hero.tsx
import React, { useEffect, useState, Suspense, lazy } from 'react';

interface HeroProps {
    language: string;
    onLoad: () => void;
}

const MobileIframe = lazy(() => import('./MobileIframe'));
const DesktopIframe = lazy(() => import('./DesktopIframe'));

const Hero: React.FC<HeroProps> = ({ language, onLoad }) => {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleLoad = () => {
        setLoaded(true);
        onLoad();
    };

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
                    {isMobile !== null && (isMobile ? <MobileIframe onLoad={handleLoad} /> : <DesktopIframe onLoad={handleLoad} />)}
                </Suspense>
            </div>
            {!loaded && (
                <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center z-20">
                    <div className="loader"></div>
                </div>
            )}
            <div className="absolute bottom-0 right-0 w-48 h-16 bg-black"></div>
        </div>
    );
};

export default Hero;