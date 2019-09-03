import React, { Component, useState } from 'react';
import { Link } from "react-router-dom";
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button';
import {Menu} from 'primereact/menu';
import {Toolbar} from 'primereact/toolbar';





export default function Navbar(params) {
  const[visible, setVisible] = useState(false);
  const items = [
    {label: 'Home', icon: 'pi pi-fw pi-home', command:()=>{ window.location="/home";}},
    {label: 'About', command:()=>{ window.location="/about";}},
    {label: 'Login', command:()=>{ window.location="/login";}}

  ];
  let menu;

  return (

    <nav >
      <Toolbar>
        <Menu model={items} popup={true} ref={el => {menu=el}} />
        <Button label="Show" icon="pi pi-bars" onClick={(event)=>menu.toggle(event)}/>
      </Toolbar>
    </nav>
    )
    
    
}
