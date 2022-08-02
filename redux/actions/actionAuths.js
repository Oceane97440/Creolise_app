import { AUTH_USER } from "../constants"
import axios from "axios"
//action inscription
export const actionSignup = (body) => {

    const { email, password, nom, prenom, num } = body
   

    return async (disparch) => {
        const data = JSON.stringify({
            "email": email,
            "password": password,
            "returnSecureToken": true
        })
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbdgU0w14bjeAhEehLczfZ6-BT6KV8v3E",{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: data
        })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        console.log(res)
   








        //HTTP request
    }
}

//action connexion