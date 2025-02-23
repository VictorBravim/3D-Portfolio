import React, { useEffect, useState } from 'react';

interface HeroProps {
    language: string;
    onLoad: () => void;
}

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

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (isMobile) {
        return null;
    }

    return (
        <div id='hero' className="relative flex justify-center items-center h-screen bg-black">
            <div className="absolute top-0 left-0 w-full h-full">
                <iframe
                    src='https://my.spline.design/untitled-3a40c92785ec96acc0872aa6f6c9934a/'
                    frameBorder='0'
                    width='100%'
                    height='100%'
                    className="w-full h-full"
                    title="3D Model"
                    onLoad={handleLoad}
                ></iframe>
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