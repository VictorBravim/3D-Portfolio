import React from 'react';

const MobileIframe: React.FC = () => {
    return (
        <iframe 
            src='https://my.spline.design/untitledcopy-8e50161f2447a131e6cc910f59acead3/' 
            frameBorder='0' 
            width='100%' 
            height='100%' 
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
        ></iframe>
    );
};

export default MobileIframe;