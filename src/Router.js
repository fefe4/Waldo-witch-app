import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "firebase/auth";
import './App.css';
import Level1 from "./components/Level1"
import Highscore from "./components/Highscore"
import Home from "./components/Home"




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
