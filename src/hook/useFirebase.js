import { useState } from "react"
import initializeAuthentication from './../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return {
        user,
        error,
        signInUsingGoogle
    }
}

export default useFirebase;