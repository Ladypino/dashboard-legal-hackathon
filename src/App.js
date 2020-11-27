
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Traceability from './pages/Traceability';
import Statistics from './pages/statistics.js';


function App() {


  return (
    <Router>
      <Switch>
        <Route path="/Traceability" exact >
        <Traceability />
        </Route>

         <Route path="/Statistics" exact >
            <Statistics />
         </Route>
         
        
       
      </Switch>
    </Router >
  );
}
export default App;