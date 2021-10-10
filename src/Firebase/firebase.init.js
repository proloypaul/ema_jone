import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialization = () => {
    initializeApp(firebaseConfig);
};

export default initialization

/*
steps for authentication 
----------------
initialize step
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method

*/