import { auth } from "../firebase/credenciales";
import { signOut } from "firebase/auth";

export default async function LogOut(){
    try {
        await signOut(auth)
    } catch (err) {
        console.log(err)
    }
}