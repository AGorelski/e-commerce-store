import { createUserWithEmailAndPassword, signInWithGoogle, signOut } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useState } from "react"


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            
        } catch (error) {
            console.error(error);
        }
    };

    const signInGoogle = async () => {
        try {
            await signInWithGoogle(auth)
            
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth)
            
        } catch (error) {
            console.error(error);
        }
    };
    return(
        <div>
            <input type="text" placeholder="Email..." onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInGoogle}>Sign In with Google</button>

            <button onClick={logout}>Log Out</button>
        </div>
    )
};
