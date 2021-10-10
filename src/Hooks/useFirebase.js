import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";


initialization()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in using google 

    // const signInUsingGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             console.log(result.user);
    //         }).catch(error => {
    //             console.log(error.message)
    //             setError(error.message)
    //         });
    // };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // signOut process

    const signOutProcess = () => {
        signOut(auth).then(() => {
            // signOut successful 
            setUser({})
        }).catch(error => {
            setError(error.message);
        });
    };


    // logical signIn and signOut process
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    }, [])


    return{
        user,
        error, 
        signInUsingGoogle,
        signOutProcess
    }
};

export default useFirebase