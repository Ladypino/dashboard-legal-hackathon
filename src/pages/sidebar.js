import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Traceability from './Traceability.js'


const Sidebar= (props) => {
  
  return (
    <div className='containerBurguerToggle'>
      <div className='boxSection'>
        <Link to="/Traceability" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'
           >Overview</p>
          </div>
        </Link>
        <Link to="/Statistics" className='oli'>
          <div className='boxSection'>
            
            <p className='textBurgerToggle'>Tickets</p>
          </div>
        </Link>
        <Link to="/Statistics" className='oli'>
          <div className='boxSection'
>
            <p className='textBurgerToggle'>Team</p>
          </div>
        </Link>
        <Link to="/" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'
         >Setting</p>
          </div>
        </Link>
        <Link to="/Donaciones" className='oli'>
          <div className='boxSection'>
            <p className='textBurgerToggle'
          >Logout</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;