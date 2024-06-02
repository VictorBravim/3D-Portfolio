// MobileIframe.tsx
import React from 'react';

interface MobileIframeProps {
    onLoad: () => void;
}

const MobileIframe: React.FC<MobileIframeProps> = ({ onLoad }) => {
    return (
        <iframe src='https://my.spline.design/untitledcopy-8e50161f2447a131e6cc910f59acead3/' frameBorder='0' width='100%' height='100%' className="w-full h-full" onLoad={onLoad}></iframe>
    );
};

export default MobileIframe;