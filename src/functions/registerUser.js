import { auth } from "../firebase/credenciales";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default async function RegisterUser(email, password){
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        console.log(user)
    } catch (err) {
        console.log(err,'err')
    }
}