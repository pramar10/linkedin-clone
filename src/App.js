import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import {useSelector,useDispatch} from 'react-redux'
import { logout, selectUser,login } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  React.useEffect(()=>{
    auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
    // logged in
    dispatch(
      login({
        email: userAuth.email,
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoUrl: userAuth.photoURL,
      })
    );
      }
      else{
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
    {/* header */}
    <Header />
    {!user? <Login />:
    (
    <div className="app_body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    )}

    </div>
  );
}

export default App;
