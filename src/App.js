import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { AddForm } from "./MyComponents/AddForm";
import { About } from "./MyComponents/About";
import axios from 'axios'
import React, {useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  useEffect(()=>{
    axios.get('https://feedback-backend-server.herokuapp.com/getalluser')
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])


  return ( 
    <> 
    <Router>
      <Header title="Feedbacks" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddForm/>
            </>)
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
