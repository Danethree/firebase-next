
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA0rpMwMhrplxM9pEw0UHKZkf1G_NG3_48",
    authDomain: "user-register-bdd31.firebaseapp.com",
    projectId: "user-register-bdd31",
    storageBucket: "user-register-bdd31.appspot.com",
    messagingSenderId: "579625677744",
    appId: "1:579625677744:web:16495eaca80cd53c2fdc75"
  };

   if(!firebase.apps.length)
   {
    firebase.initializeApp(firebaseConfig);
   }
  export default firebase;