// Contact.tsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone } from 'react-icons/fi';

interface ContactProps {
    language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    emailjs.init('TvVDzHFLwBkyukoGy');

    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { user_name, user_email, message } = formData;

        if (!user_name || !user_email || !message) {
            toast.error('Por favor, preencha todos os campos.');
            return;
        }

        emailjs.sendForm('service_bravim', 'template_2cunb5k', e.currentTarget, 'TvVDzHFLwBkyukoGy')
            .then((result) => {
                console.log(result.text);
                toast.success('Mensagem enviada com sucesso!');
            }, (error) => {
                console.log(error.text);
                toast.error('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
            });

        e.currentTarget.reset();
        setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
    };

    return (
        <div id="contact" ref={ref} className={`bg-none py-20 h-full fade-in-section ${inView ? 'is-visible' : ''}`}
            style={{
                backgroundImage: "url('/bg.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            <div className="w-full lg:w-4/5 bg-black p-12 mx-auto px-5">
                <div className="flex flex-col lg:flex-row lg:gap-12">
                    <div className='flex w-full lg:w-1/2 flex-col'>
                        <div className='hidden lg:flex flex-col'>
                            <div className="w-full flex flex-col items-center justify-center bg-black text-gray-300 border border-white p-9 gap-2 mb-7">
                                <FiMail className="text-3xl mb-2 text-white" />
                                <p className="text-white text-xl font-semibold">Email</p>
                                <p className="text-white text-xl">victorrafaelbravim@gmail.com</p>
                            </div>
                            <div className="w-full flex flex-col items-center justify-center bg-black text-gray-300 border border-white p-9 gap-2">
                                <FiPhone className="text-3xl mb-2 text-white" />
                                <p className="text-white text-xl font-semibold">WhatsApp</p>
                                <p className="text-white text-xl">+55 12996839077</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="user_name" className="block text-gray-300 font-semibold mb-2">
                                    {language === 'PT' ? (
                                        "Nome"
                                    ) : (
                                        "Name"
                                    )}
                                </label>
                                <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleInputChange} className="w-full bg-black text-gray-300 border-b border-white py-2 px-3 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="user_email" className="block text-gray-300 font-semibold mb-2">Email</label>
                                <input type="email" id="user_email" name="user_email" autoComplete="email" value={formData.user_email} onChange={handleInputChange} className="w-full bg-black text-gray-300 border-b border-white py-2 px-3 focus:outline-none focus:border-blue-500" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="mensagem" className="block text-gray-300 font-semibold mb-2">
                                    {language === 'PT' ? (
                                        "Mensagem"
                                    ) : (
                                        "Message"
                                    )}
                                </label>
                                <textarea id="mensagem" name="message" rows={4} value={formData.message} onChange={handleInputChange} className="w-full text-gray-300 bg-black border-b border-white py-2 px-3 focus:outline-none focus:border-blue-500" />
                            </div>
                            <button type="submit" className="bg-gray-custom text-white font-semibold py-2 px-4 border-b border-white hover:bg-transparent hover:text-gray-custom transition-colors duration-300">
                                {language === 'PT' ? (
                                    "Enviar Mensagem"
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Contact;