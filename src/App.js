import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { selectUser, login, logout } from "./features/userSlice";
import Imessage from './Imessage.js';
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [user])
  return (
    <div className="App">
      {user ? <Imessage /> : <Login />}
    </div>
  );
}

export default App;
