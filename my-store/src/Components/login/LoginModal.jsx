import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import * as Services from "../../config/Services";

import "../../assets/styles/loginModal.css";

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const uid = userCredential.user.uid;
      // Assign default role
      await Services.assignUserRole(uid, email);
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
      const userCredential = await signInWithPopup(auth, provider);
      const uid = userCredential.user.uid;
      const email = userCredential.user.email;

      await Services.handleGoogleSignIn(uid, email);

      onClose();
    } catch (error) {
      console.error("Error in Google sign-in:", error);
    }
  };

  const handleBackdropClick = (event) => {
    // Check if the click is on the backdrop (modal) and not the content
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Log In to your account</button>
        <button onClick={signInGoogle}>Sign In with Google</button>
      </div>
    </div>
  );
};

export default LoginModal;
