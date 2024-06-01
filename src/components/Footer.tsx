'use client'
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFigma } from 'react-icons/fa';

export default function Footer() {
    return (
        <motion.footer
            className="bg-black text-white py-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
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
        </motion.footer>
    );
}