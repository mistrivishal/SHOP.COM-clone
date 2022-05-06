// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWNYPDpvIpp4xA_Mz0sc5B6uldb_Qgv_c",
    authDomain: "setup-dc13f.firebaseapp.com",
    projectId: "setup-dc13f",
    storageBucket: "setup-dc13f.appspot.com",
    messagingSenderId: "366492053525",
    appId: "1:366492053525:web:a58b32973a2f75f0465e1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);


document.getElementById("signup_form").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("form-email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            set(ref(database, 'users/' + user.uid), {
                email: email,
                password: password,
                
            })
                .then(() => {
                    // Data saved successfully!
                    console.log("created")
                    alert("account created successfully")
                })
                .catch((error) => {
                    // The write failed...
                    alert(error)
                });





        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage)
            alert("Error:" + errorCode)
        });


})