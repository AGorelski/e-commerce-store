import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase';

import "../../assets/styles/loginModal.css"

const LoginModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const signInGoogle = async () => {
        try {
            await signInWithPopup(auth, provider);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
                <button onClick={signIn}>Sign In</button>
                <button onClick={signInGoogle}>Sign In with Google</button>
            </div>
        </div>
    );
};

export default LoginModal;
