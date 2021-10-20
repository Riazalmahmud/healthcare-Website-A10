


import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from 'react';


import firebaseInitialization from './Firebase.init';
firebaseInitialization();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})

    const [isLoding, setIsLoding] = useState(true)



    const googleSignIn = new GoogleAuthProvider();
    const githubSignIng = new GithubAuthProvider();
    const auth = getAuth();
    const handaleGoogleSignIn = () => {
        setIsLoding(true)
        signInWithPopup(auth, googleSignIn)
            .then((result) => {
                setUser(result.user)
                // const user = result.user;
                console.log(user)

            }).catch((error) => {
                setError(error)

            }).finally(() => setIsLoding(false));

    }

    const githubSignIn = () => {
        setIsLoding(true)
        signInWithPopup(auth, githubSignIng)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error)

            }).finally(() => setIsLoding(false))
    }


    const handleUserRegister = (email, password) => {
        setIsLoding(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

            }).catch((error) => {
                setError(error)

            }).finally(() => setIsLoding(false));
    };

    const handleUserLogin = (email, password) => {
        setIsLoding(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {

            }).catch((error) => {
                setError(error)

            }).finally(() => setIsLoding(false))
    };

    const handleLogout = () => {
        setIsLoding(true)
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch((error) => {
                setError(error)

            }).finally(() => setIsLoding(false));

    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
        });
    }, [])

    return {
        user,
        handaleGoogleSignIn,
        isLoding,
        githubSignIn,
        handleLogout,
        handleUserRegister,
        handleUserLogin


    }


};

export default useFirebase;