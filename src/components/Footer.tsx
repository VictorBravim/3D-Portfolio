// Footer.tsx
'use client'
import { FaGithub, FaLinkedin, FaInstagram, FaFigma } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <footer ref={ref} className={`bg-black text-white py-6 fade-in-section ${inView ? 'is-visible' : ''}`}>
            <div className="container mx-auto flex justify-center lg:justify-between items-center">
                <div className="hidden lg:flex gap-4">
                    <a href="https://github.com/VictorBravim" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/VictorBravim/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://www.instagram.com/victorbravim_/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-2xl hover:text-gray-400" />
                    </a>
                    <a href="https://www.figma.com/@victorbravim" target="_blank" rel="noopener noreferrer">
                        <FaFigma className="text-2xl hover:text-gray-400" />
                    </a>
                </div>
                <p className="text-sm">&copy; {new Date().getFullYear()} VictorBravim. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
