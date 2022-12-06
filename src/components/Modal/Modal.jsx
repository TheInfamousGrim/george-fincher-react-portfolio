import React from 'react';
import { motion } from 'framer-motion';

import Backdrop from '../Backdrop';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring',
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const Modal = ({ handleClose, text }) => (
    <Backdrop onClick={handleClose}>
        <motion.div
            className="modal orange-gradient"
            onClick={(e) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <ModalText text={text} />
            <ModalButton onClick={handleClose} label="Close" />
        </motion.div>
    </Backdrop>
);

const ModalText = ({ text }) => (
    <div className="modal-text">
        <h3>{text}</h3>
    </div>
);

const ModalButton = ({ onClick, label }) => (
    <motion.button
        className="btn-general"
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
    >
        {label}
    </motion.button>
);

export default Modal;
