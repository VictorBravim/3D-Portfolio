// MobileImage.tsx
import React from 'react';
import Image from 'next/image';

interface MobileImageProps {
    onLoad: () => void;
}

const MobileImage: React.FC<MobileImageProps> = ({ onLoad }) => {
    return (
        <Image 
            src='/Mobile.png' 
            alt='Mobile Image' 
            layout='fill' 
            objectFit='cover' 
            onLoadingComplete={onLoad}
        />
    );
};

export default MobileImage;