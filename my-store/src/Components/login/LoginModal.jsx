import React, { useState } from 'react';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase';

import "../../assets/styles/loginModal.css"

const LoginModal = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            onClose();
        } catch (error) {
            console.error(error);
        }
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onClose();
        } catch (error) {
            console.error("Error signing in:", error.message);
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
                <button onClick={signUp}>Sign Up</button>
                <button onClick={signIn}>Log In to your account</button>
                <button onClick={signInGoogle}>Sign In with Google</button>
            </div>
        </div>
    );
};

export default LoginModal;
