

import './Sidebar.css';
import Traceability from './Traceability.js'
import Statistics from './statistics.js'

import React, { useContext, useEffect } from 'react';

import { ShowContext } from '../../App'

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
    <div className='containerSectionArchiveBtnAndDonateForms'>
      <div className='sectionArchiveButtons'>
        <button className={classButtonArchiveOVER}
          onClick={() => {
            setFormToShowValue('Overview');
            setPositionScrollFormValue(scrollForm);
          }}>NDA</button>
        <button className={classButtonArchiveTick}
          onClick={() => {
            setFormToShowValue('Tickets');
            setPositionScrollFormValue(scrollForm)
          }}>CIBERSEGURIDAD</button>
        <button className={classButtonArchiveTEAMS} onClick={() => {
          setFormToShowValue('Teams');
          setPositionScrollFormValue(scrollForm)
        }}>LBA</button>
        <button className={classButtonArchiveSETT} onClick={() => {
          setFormToShowValue('Settings');
          setPositionScrollFormValue(scrollForm);
        }}>BHP</button>
        <button className={classButtonArchiveLOG} onClick={() => {
          setFormToShowValue('Logout');
          setPositionScrollFormValue(scrollForm);
        }}>ENEL</button>
      </div>
      {form}
    </div>
  );
}

export default Sidebar;