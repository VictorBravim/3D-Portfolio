import React from 'react';

const DesktopIframe: React.FC = () => {
    return (
        <iframe 
            src='https://my.spline.design/untitled-3a40c92785ec96acc0872aa6f6c9934a/' 
            frameBorder='0' 
            width='100%' 
            height='100%' 
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
        ></iframe>
    );
};

export default DesktopIframe;
