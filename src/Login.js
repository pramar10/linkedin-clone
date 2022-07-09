import React from "react";
import { auth } from "./firebase";
import "./Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { login } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { updateProfile} from "firebase/auth";

const Login = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [profilePic, setProfilePic] = React.useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((currentUser) => {
        const user = currentUser.user;
         updateProfile(user,{
            'displayName': name,
            'photoURL': profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
        })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2011.png"
        alt=""
      />
      <form action="">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic Url (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?
        <span className="login_register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
