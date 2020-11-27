import React, {useState} from 'react';
import './styles/iconBurgerToggle.css';
import Sidebar from './sidebar';

function IconSidebar() {
  let [ burgerOn, setBurgerOn ]= useState(false);
    
  return (
    <div>
      <span className='iconBurgerToggle' onClick={()=>setBurgerOn(!burgerOn)}>&#9776;</span>
      <Sidebar burgerOn={burgerOn} setBurgerOn={setBurgerOn}/>
    </div>
  );
}

export default IconSidebar;
