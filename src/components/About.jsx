import React, { Component, useState} from 'react'
import OperatorFrom from './OperatorFrom';


export default function About () {
  const [counter, setCounter] = useState(0);
  return (
      <div className="about">
        <h2>You are About!</h2>
        <OperatorFrom operator={'-'}/>
        <OperatorFrom operator={'+'}/>
        <OperatorFrom operator={'*'}/>


      </div>
  )
}