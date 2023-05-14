import { useState } from "react";
import { auth } from "../config/Firebase.js"
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Auth = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () =>{
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        }catch(err){
            console.error(err);
        };


    // const signOut = async () =>{
    //     try{
    //         await signOut(auth)
    //     }catch(err){
    //         console.error(err);
    //     };
    };



    return (
    <div>
        <input placeholder="Email" onChange= {(e) => setEmail(e.target.value)}/>
        <input placeholder="Password" onChange= {(e) => setPassword(e.target.value)}/>
        <button onClick={signIn}>Sign in</button>
    </div>
    );
};