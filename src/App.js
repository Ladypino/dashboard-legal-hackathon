
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import Trazabilidad from './pages/Trazabilidad';
import TwoLevelPieChart from './pages/LandingPage'

export const ShowContext = React.createContext(null);

function App() {
  const [formToShow, setFormToShow] = useState('Huertas');
  const [positionScrollForm, setPositionScrollForm] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <Trazabilidad />
          </ShowContext.Provider>
        </Route>
        <Route path="/LandingPage" exact >
      
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <LandingPage />
          </ShowContext.Provider>
        </Route>
        
       
      </Switch>
    </Router >
  );
}
export default App;