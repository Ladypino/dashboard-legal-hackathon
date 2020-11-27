
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Traceability from './pages/Traceability';
import Statistics from './pages/statistics.js';

import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './pages/landingPage'
import DonationPage from './pages/donationPage';
import AboutUs from './pages/aboutUsPage';
// import DataGridDemo from './components/intranetData/intranetTable';
import IntranetPage from './pages/intranet';
import Login from './components/demo/login'
import Sidebar from './pages/sidebar';

export const ShowContext = React.createContext(null);

function App() {
  const [formToShow, setFormToShow] = useState('Overview');
  const [positionScrollForm, setPositionScrollForm] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/Overview" exact >
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <Sidebar/>
          </ShowContext.Provider>
        </Route>
        
        
      </Switch>
    </Router >
  );
}
export default App;