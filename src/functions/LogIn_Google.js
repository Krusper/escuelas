import { auth } from "../firebase/credenciales";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";




export default async function LogInGoogle(email, password){

    const navigate = useNavigate()
    try {
        const provider = new GoogleAuthProvider()
        const resul =  await signInWithPopup(auth, provider)
        navigate('/')
    } catch (err) {
        console.log(err)
    }
}