import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialization = () => {
    initializeApp(firebaseConfig);
};

export default initialization

/*
steps-1 for authentication 
----------------
initialize step
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

step-2: setup component 
1.create Login component
2.create Register component
3.create Route for Login and Register component

step-3: set auth system
1.set up sign in method
2.set up sign out method
3.use state
4.signOut and signIn state change / special observer
5.return necessary methods and state from usefirebase

step-4: create Auth context Hook (useAuth)
1.create a Auth context 
2.create context provider
3.use Auth Provider
4.set context value
5.create useAuth Hooks

step-5: create private route
1.create private route
2.set private route
*/