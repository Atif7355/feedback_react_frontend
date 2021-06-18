import './App.css';
import Header from "./MyComponents/Header";
import { Feedback } from "./MyComponents/Feedback";
import { Footer } from "./MyComponents/Footer";
import { AddForm } from "./MyComponents/AddForm";
import { About } from "./MyComponents/About";
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let [mylist,setmylist]=useState([])
  useEffect(()=>{
    axios.get('https://feedback-backend-server.herokuapp.com/getalluser')
    .then(res=>{
      console.log(res);
      setmylist(res.data)
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
            <AddForm setmylist={setmylist}  />
             <Feedback mylist={mylist}  />
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
