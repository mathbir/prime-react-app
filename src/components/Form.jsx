import React, { Component, Fragment } from 'react';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';


const Form = ({eventFromParent}) => <>

    <p>Email: </p>
    <InputText id="in" placeholder="Email"  onChange={eventFromParent} />
    
    <p>Password: </p>
    <Password id="pass" placeholder="Password"  onChange={eventFromParent} />

    

</>

export default Form;