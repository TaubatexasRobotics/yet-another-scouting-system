import { useState } from "react";
import { auth } from "../config/Firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { signOut } from "firebase/auth";

export const Auth = () =>{

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.error(err);
        };
    };

    const LogIn = async () =>{
        try{
        signInWithEmailAndPassword(auth, email, password)
        }catch(err){
            console.error(err);
        }

    };



    const logOut = async () =>{
            try{
                await signOut(auth)
            }catch(err){
                console.error(err);
            };
    };

    //console.log(auth?.currentUser?.email);

    return (
    <div>
        <input placeholder="Email" onChange= {(e) => setEmail(e.target.value)}/>
        <input placeholder="Password(at least 6 char)" onChange= {(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign in</button>
        <button onClick={logOut}>logOut</button>
        <button onClick={LogIn}>LogIn</button>
    </div>
    );
};