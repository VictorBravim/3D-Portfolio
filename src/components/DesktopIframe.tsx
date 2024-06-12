// DesktopIframe.tsx
import React from 'react';

interface DesktopIframeProps {
    onLoad: () => void;
}

const DesktopIframe: React.FC<DesktopIframeProps> = ({ onLoad }) => {
    return (
        <iframe src='https://my.spline.design/untitled-3a40c92785ec96acc0872aa6f6c9934a/' frameBorder='0' width='100%' height='100%' className="w-full h-full" title="iframe" onLoad={onLoad}></iframe>
    );
};

export default DesktopIframe;