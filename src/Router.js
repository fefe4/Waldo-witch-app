import React from 'react'
import firebase from "firebase/app";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "firebase/auth";
import './App.css';
import Level1 from "./components/Level1"
import Highscore from "./components/Highscore"
import Home from "./components/Home"


const firebaseConfig = {
  apiKey: "AIzaSyCHbphswXX26C6pju5RQ4cYCFAaqtBiXpA",
    authDomain: "waldo-e2dae.firebaseapp.com",
    projectId: "waldo-e2dae",
    storageBucket: "waldo-e2dae.appspot.com",
    messagingSenderId: "826263199620",
    appId: "1:826263199620:web:c92fdf883340a7453f07d1",
    measurementId: "G-0Q2HHPSCSG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Level1" component={Level1} />
        <Route path="/highscore" component={Highscore} />
      </Switch>
    </BrowserRouter>
  );
};


export default Router;
