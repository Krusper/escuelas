import { auth } from "../firebase/credenciales";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function LogInEmail(email, password){
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        console.log(user)
    } catch (err) {
        console.log(err)
    }
}