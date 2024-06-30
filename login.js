// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOAQlTUEE90FUjTQ_9MDq9EE94R_mIluA",
  authDomain: "loginform-1d8db.firebaseapp.com",
  projectId: "loginform-1d8db",
  storageBucket: "loginform-1d8db.appspot.com",
  messagingSenderId: "987262015472",
  appId: "1:987262015472:web:b23ffcb023a9b99699af35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById('submit');
  if (submit) {
    submit.addEventListener("click", function(event){
      event.preventDefault();

      const rollno = document.getElementById('rollno').value;
      const password = document.getElementById('password').value;

      if (rollno && password) {
        // Create a fake email using the roll number
        const email = `${rollno}@yourdomain.com`;

        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Logging in");
            window.location.href = "index.html";
            // You can store the roll number in the user's profile or database if needed
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
          });
      } else {
        alert("Please enter both roll number and password");
      }
    });
  } else {
    console.error("Submit button not found");
  }
});