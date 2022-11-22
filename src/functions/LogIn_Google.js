import { auth } from "../firebase/credenciales";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

export default async function LogInGoogle(email, password){
    try {
        const provider = new GoogleAuthProvider()
        const resul =  await signInWithPopup(auth, provider)
    } catch (err) {
        console.log(err)
    }
}