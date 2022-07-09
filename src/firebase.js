import { initializeApp } from 'firebase/app';
import { getFirestore  } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCgsQ4FfUKv-N7G9cdYqeUF4SfjQKNrnPo",
//     authDomain: "clone-4d9f9.firebaseapp.com",
//     projectId: "clone-4d9f9",
//     storageBucket: "clone-4d9f9.appspot.com",
//     messagingSenderId: "280217334538",
//     appId: "1:280217334538:web:28b78e5b101b89476740f3"
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDdFFDP1ytGAUOqNlVZCGmpagVAA0kRqW0",
  authDomain: "linkedin2-cb324.firebaseapp.com",
  projectId: "linkedin2-cb324",
  storageBucket: "linkedin2-cb324.appspot.com",
  messagingSenderId: "636948012771",
  appId: "1:636948012771:web:c9b97a5d02653d71bc6fd6"
};
  initializeApp(firebaseConfig);
  const db = getFirestore();
  const auth = getAuth();

  export {db,auth};