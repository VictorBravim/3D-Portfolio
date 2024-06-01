// Page.tsx
import React from 'react';
import Nav from '@/components/Nav';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Page: React.FC = () => {
    return (
        <div>
            <Nav />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default Page;