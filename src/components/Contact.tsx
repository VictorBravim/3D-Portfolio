// Contact.tsx
'use client';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contato() {
    const isBrowser = typeof window !== 'undefined';

    if (!isBrowser) {
        return null;
    }

    emailjs.init('TvVDzHFLwBkyukoGy');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_bravim', 'template_2cunb5k', e.currentTarget, 'TvVDzHFLwBkyukoGy')
            .then((result) => {
                console.log(result.text);
                toast.success('Mensagem enviada com sucesso!');
            }, (error) => {
                console.log(error.text);
                toast.error('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
            });

        e.currentTarget.reset();
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div id="contact" className="bg-none py-20 h-full">
            <div className="w-full lg:w-4/5 bg-black p-12 mx-auto px-4">
                <div className="flex flex-col lg:flex-row">
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        className='flex w-full lg:w-1/2'
                    >
                        <div className='hidden lg:flex' style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <iframe src='https://my.spline.design/untitled-0016fc8c54d600c8f21f166056fa2a18/' frameBorder='0' width='100%' height='100%' className="w-full h-full"></iframe>
                            <div style={{ position: 'absolute', bottom: 20, right: 20, width: '140px', height: '38px', backgroundColor: 'black' }}></div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        className="w-full lg:w-1/2"
                    >
                        <motion.form onSubmit={handleSubmit} variants={containerVariants}>
                            <motion.div className="mb-4" variants={itemVariants}>
                                <label htmlFor="user_name" className="block text-gray-300 font-semibold mb-2">Nome</label>
                                <input type="text" id="user_name" name="user_name" className="w-full bg-black text-gray-300 border-b border-white py-2 px-3 focus:outline-none focus:border-blue-500" />
                            </motion.div>
                            <motion.div className="mb-4" variants={itemVariants}>
                                <label htmlFor="user_email" className="block text-gray-300 font-semibold mb-2">Email</label>
                                <input type="email" id="user_email" name="user_email" autoComplete="email" className="w-full bg-black text-gray-300 border-b border-white py-2 px-3 focus:outline-none focus:border-blue-500" />
                            </motion.div>
                            <motion.div className="mb-6" variants={itemVariants}>
                                <label htmlFor="mensagem" className="block text-gray-300 font-semibold mb-2">Mensagem</label>
                                <textarea id="mensagem" name="message" rows={4} className="w-full text-gray-300 bg-black border-b border-white py-2 px-3 focus:outline-none focus:border-blue-500" />
                            </motion.div>
                            <motion.button type="submit" className="bg-gray-custom text-white font-semibold py-2 px-4 border-b border-white hover:bg-transparent hover:text-gray-custom transition-colors duration-300" variants={itemVariants}>
                                Enviar Mensagem
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}