import React, { useContext, useEffect } from 'react';
import './Sidebar.css';
import Traceability from './Traceability.js'
import Statistics from './statistics.js'
import LandingPage from './LandingPage.js'
import { ShowContext } from '../App'
import { animateScroll as scroll } from 'react-scroll';


function Sidebar() {

  const scrollForm = window.screen.width < 1024 ? 390 : 780;

  // me traigo valores del contexto
  const { formToShow, positionScrollForm } = useContext(ShowContext);

  // le doy un valor a los estados de cada objeto
  const [formToShowValue, setFormToShowValue] = formToShow;
  const [positionScrollFormValue, setPositionScrollFormValue] = positionScrollForm;

  useEffect(() => {
    scroll.scrollTo(positionScrollFormValue)
  }
  )

  const classButtonArchiveOVER = formToShowValue === 'Overview' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveTick = formToShowValue === 'Tickets' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveTEAMS = formToShowValue === 'Teams' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveSETT = formToShowValue === 'Settings' ? 'archiveBtnOn' : 'archiveBtnOff';
  const classButtonArchiveLOG = formToShowValue === 'Logout' ? 'archiveBtnOn' : 'archiveBtnOff';

  let form = '';

  if (formToShowValue === 'Overview') form = <Statistics/>
  if (formToShowValue === 'Tickets') form = <Traceability />
  if (formToShowValue === 'Teams') form = <LandingPage />
  if (formToShowValue === 'Settings') form = <LandingPage />
  if (formToShowValue === 'Logout') form = <LandingPage />

  return (
    <div className='containerSidebar'>
      
        <button  className={classButtonArchiveOVER}
          onClick={() => {
            setFormToShowValue('Overview');
            setPositionScrollFormValue(scrollForm);
          }}>Overview</button>
         <button className={classButtonArchiveTick}
          onClick={() => {
            setFormToShowValue('Tickets');
            setPositionScrollFormValue(scrollForm)
          }}>Tickets</button>
        <button className={classButtonArchiveTEAMS} onClick={() => {
          setFormToShowValue('Teams');
          setPositionScrollFormValue(scrollForm)
        }}>Teams</button>
        <button className={classButtonArchiveSETT} onClick={() => {
          setFormToShowValue('Settings');
          setPositionScrollFormValue(scrollForm);
        }}>Settings</button>
        <button className={classButtonArchiveLOG} onClick={() => {
          setFormToShowValue('Logout');
          setPositionScrollFormValue(scrollForm);
        }}>Logout</button>
      
      {form}
    </div>
  );
}

export default Sidebar;