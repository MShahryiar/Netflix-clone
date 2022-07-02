import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebaseHandler';

function App() {
  const user = null;

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //Logged In
        console.log(userAuth);
      }
      else{
        // Logged Out
      }
    })

    return unsubscribe;

  },[]);

  
  return (
    <div className="app">
      <BrowserRouter>
      {
        !user  ? (
          <LoginScreen/>
        ) : (

        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
        </Routes>
        )
      
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
