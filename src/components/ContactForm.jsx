import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { validateEmail } from '../utils/helpers';

import Modal from './Modal/Modal';

function MessageSuccess() {
    return <p>Message was successfully sent!</p>;
}

function MessageFailure(props) {
    return <p>Error: {props}</p>;
}

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [textarea, setTextarea] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState('');

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (name === '' || email === '' || textarea === '') {
            setModalText('🙅‍♂️ Please fill out all fields in the contact form 🙈');
            open();
            return;
        }

        if (!validateEmail(email)) {
            setModalText('📨 Please use a valid email address 📛');
            open();
            return;
        }

        emailjs.sendForm('service_godqp55', 'template_0wjvcaw', form.current, 'DlWDHZAAI3RXiqFg7').then(
            (result) => {
                console.log(result.text);
                // Clear all input values
                setName('');
                setEmail('');
                setTextarea('');
                setModalText('🙌Congratulations email has been sent!!!🎉');
                open();
            },
            (error) => {
                console.log(error.text);
                setModalText(`😭 Error: ${error.text} 📛`);
                open();
            }
        );
    };
    return (
        <div className="contact-container">
            <h2 className="contact-container__title">Contact Me</h2>
            <form className="contact-container__form" ref={form} onSubmit={sendEmail}>
                <div className="contact-container__name-input ">
                    <label className="contact-container__label" htmlFor="user_name">
                        Name
                    </label>
                    <input
                        className="contact-container__input"
                        id="user_name"
                        type="text"
                        name="user_name"
                        onChange={(e) => setName(e.target.value)}
                        value={name || ''}
                        placeholder="Enter your name..."
                    />
                </div>
                <div className="contact-container__email-input">
                    <label className="contact-container__label" htmlFor="user_email">
                        Email
                    </label>
                    <input
                        className="contact-container__input"
                        id="user_email"
                        type="email"
                        name="user_email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email || ''}
                        placeholder="Enter your email..."
                    />
                </div>
                <div className="contact-container__message-input">
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="contact-container__textarea"
                        id="message"
                        name="message"
                        onChange={(e) => setTextarea(e.target.value)}
                        value={textarea || ''}
                        placeholder="Please enter your message here..."
                    />
                </div>
                <div className="contact-container__send-btn-container">
                    <motion.input
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="contact-container__send-btn btn-general submit-button"
                        type="submit"
                        value="Send"
                    />
                </div>
            </form>
            {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} text={modalText} />}
        </div>
    );
};
export default ContactForm;
