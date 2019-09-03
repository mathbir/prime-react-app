import React, { Component, Fragment, useState, useEffect } from 'react'
import Form from './Form';



export default function Login () {

    const[text, setText] = useState("");

    const handleText = (e) => {
        console.log("typing", e.currentTarget.value);
        setText(e.currentTarget.value);
    }


    return (
        <div className="login">
            <h2>Login</h2>
            <div>
                
                <Form eventFromParent={handleText} />

                
            </div>

        </div>
    )
}