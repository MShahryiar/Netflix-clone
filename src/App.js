import React, { useEffect } from 'react';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebaseHandler';
import { useDispatch, useSelector } from "react-redux";
import { login,logout, selectUser } from './features/userSlice';
 
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //Logged In
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
        );
      }
      else{
        // Logged Out
        dispatch(logout());
      }
    })

    return unsubscribe;

  },[dispatch]);

  
  return (
    <div className="app">
      <BrowserRouter>
      {
        !user  ? (
          <LoginScreen/>
        ) : (

        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path="/profile" element={<ProfileScreen/>}/>
        </Routes>
        )
      
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
