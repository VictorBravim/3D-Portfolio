// FadeInSection.tsx
'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface FadeInSectionProps {
    children: React.ReactNode;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <div ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    );
};

export default FadeInSection;