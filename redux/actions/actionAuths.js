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
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbdgU0w14bjeAhEehLczfZ6-BT6KV8v3E", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
        if (!res.ok) {
            throw new Error("Oups, cette email est déjà utilisé")

        }
        
     







        /*{
            "kind": "identitytoolkit#SignupNewUserResponse",
            "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MDM2NzRlZGE0YmU5NzcyNWI3M2QwZGMwMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3Jlb2xpc2UtMzZhZmEiLCJhdWQiOiJjcmVvbGlzZS0zNmFmYSIsImF1dGhfdGltZSI6MTY1OTQ0MjUxMCwidXNlcl9pZCI6ImlyUGs2U2dCT3dRdFByOWFkTGdWTlczM3hqazIiLCJzdWIiOiJpclBrNlNnQk93UXRQcjlhZExnVk5XMzN4amsyIiwiaWF0IjoxNjU5NDQyNTEwLCJleHAiOjE2NTk0NDYxMTAsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiam9obkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.BX_vHA154PJACiCy8uW8nRBwACs_KL872427RDgr54ZL1OCZ_YZjYkEFuE1VBMvm9coDwOuwlZE2PLpIUsIkwp356ih8VMfZ4F_M2qqZQjsjTqNH4qtVpWpsQldFaW9CS6SFrvBnO41_WALJNb0ZxEceh1RvV46cVSXZtgnP6QNAYN5ZpLYm3iGVozCmg936tLoYmwpHAsb1NGMHvNN60eVvo3q94qClOQn7ne_Wa1g4GKMQi5D67H63MMr0DlBbEDzVbcJhG434pYgTqiQgnQ_QvOchu89edonCI2iHVK-FNkmr56Pk-WPLmow80DuHMA5G30mFDqqK7rzgWWTqXg",
            "email": "john@gmail.com",
            "refreshToken": "AOEOulbcpQLl06UDD6S0MY2tsfjhahbxU84AvZUuH7utu6UULUPQPoa5waVsp6Yib0VMBBgdkVntQlQtTXp85qN2hd7QFzVFLbt35v8FuKG0dqMbagPeqYwn0vEgOGM5aNHTiWBxJm-BlIBbr9Dy5N5XQGO2q9gMlrNUXXXjDJcgosy68vyTNMsKF7PbnK2nwfA0Lbgh7h6uNGotaiVt6SctxxyYoWZD8Q",
            "expiresIn": "3600",
            "localId": "irPk6SgBOwQtPr9adLgVNW33xjk2"
          }*/






        //HTTP request
    }
}

//action connexion
export const actionLogin = (body) => {

    const { email, password} = body


    return async (disparch) => {
        const data = JSON.stringify({
            "email": email,
            "password": password,
            "returnSecureToken": true
        })
        const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbdgU0w14bjeAhEehLczfZ6-BT6KV8v3E", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })

        const dataRes = await res.json()

        console.log(dataRes)
        if (!res.ok) {
            throw new Error("Oups, nous avons un problème lors de la connexion")

        }
        
     







        /*{
            "kind": "identitytoolkit#SignupNewUserResponse",
            "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA2M2E3Y2E0M2MzYzc2MDM2NzRlZGE0YmU5NzcyNWI3M2QwZGMwMWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3Jlb2xpc2UtMzZhZmEiLCJhdWQiOiJjcmVvbGlzZS0zNmFmYSIsImF1dGhfdGltZSI6MTY1OTQ0MjUxMCwidXNlcl9pZCI6ImlyUGs2U2dCT3dRdFByOWFkTGdWTlczM3hqazIiLCJzdWIiOiJpclBrNlNnQk93UXRQcjlhZExnVk5XMzN4amsyIiwiaWF0IjoxNjU5NDQyNTEwLCJleHAiOjE2NTk0NDYxMTAsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiam9obkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.BX_vHA154PJACiCy8uW8nRBwACs_KL872427RDgr54ZL1OCZ_YZjYkEFuE1VBMvm9coDwOuwlZE2PLpIUsIkwp356ih8VMfZ4F_M2qqZQjsjTqNH4qtVpWpsQldFaW9CS6SFrvBnO41_WALJNb0ZxEceh1RvV46cVSXZtgnP6QNAYN5ZpLYm3iGVozCmg936tLoYmwpHAsb1NGMHvNN60eVvo3q94qClOQn7ne_Wa1g4GKMQi5D67H63MMr0DlBbEDzVbcJhG434pYgTqiQgnQ_QvOchu89edonCI2iHVK-FNkmr56Pk-WPLmow80DuHMA5G30mFDqqK7rzgWWTqXg",
            "email": "john@gmail.com",
            "refreshToken": "AOEOulbcpQLl06UDD6S0MY2tsfjhahbxU84AvZUuH7utu6UULUPQPoa5waVsp6Yib0VMBBgdkVntQlQtTXp85qN2hd7QFzVFLbt35v8FuKG0dqMbagPeqYwn0vEgOGM5aNHTiWBxJm-BlIBbr9Dy5N5XQGO2q9gMlrNUXXXjDJcgosy68vyTNMsKF7PbnK2nwfA0Lbgh7h6uNGotaiVt6SctxxyYoWZD8Q",
            "expiresIn": "3600",
            "localId": "irPk6SgBOwQtPr9adLgVNW33xjk2"
          }*/






        //HTTP request
    }
}