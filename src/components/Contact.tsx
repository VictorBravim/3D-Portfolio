// Contact.tsx
'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useInView } from 'react-intersection-observer';

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
                <div className="flex flex-col lg:flex-row">
                    <div className='flex w-full lg:w-1/2'>
                        <div className='hidden lg:flex' style={{ position: 'relative', width: '100%', height: '100%' }}>
                            {inView && (
                                <iframe
                                    src='https://my.spline.design/untitled-0016fc8c54d600c8f21f166056fa2a18/'
                                    frameBorder='0'
                                    width='100%'
                                    height='100%'
                                    className="w-full h-full"
                                    loading="lazy"
                                    title="iframe"
                                ></iframe>
                            )}
                            <div style={{ position: 'absolute', bottom: 20, right: 20, width: '140px', height: '38px', backgroundColor: 'black' }}></div>
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