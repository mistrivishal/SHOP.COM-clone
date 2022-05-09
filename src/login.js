// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { getDatabase,ref,update } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR5zqqCggiYONEPLnnBXwFfc7eq_yyO18",
  authDomain: "signup-6b16b.firebaseapp.com",
  databaseURL: "https://signup-6b16b-default-rtdb.firebaseio.com",
  projectId: "signup-6b16b",
  storageBucket: "signup-6b16b.appspot.com",
  messagingSenderId: "980295878149",
  appId: "1:980295878149:web:e5231bec8ab6986e6d3e6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);


document.getElementById("shop_login_form").addEventListener("submit", function (event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // ...
    //         set(ref(database, 'users/' + user.uid), {
    //             email: email,
    //             password: password,
                
    //         })
    //             .then(() => {
    //                 // Data saved successfully!
    //                 console.log("created")
    //                 alert("account created successfully")
    //             })
    //             .catch((error) => {
    //                 // The write failed...
    //                 alert(error)
    //             });





    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         // ..
    //         console.log(errorMessage)
    //         alert("Error:" + errorCode)
    //     });



    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    var logDat=new Date();
      update(ref(database, 'users/' + user.uid), {
                    last_login:logDat
                    
                })
                    .then(() => {
                        // Data saved successfully!
                        console.log("created")
                        alert("Logged in successfully")
                        window.location.href = "/index.html"
                    })
                    .catch((error) => {
                        // The write failed...
                        alert(error)
                    });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage)
    });

})