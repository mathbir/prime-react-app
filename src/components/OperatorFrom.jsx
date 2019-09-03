import React, { Component, useState} from 'react';
import {Button} from 'primereact/button';


export default function OperatorFrom ({operator}) {
  const [counter, setCounter] = useState(1);
  return (
      <>
        <p>Counter: {counter}</p>
        <Button onClick={() => setCounter(operators[operator](counter, 3))} label={operator}/>
      </>
  )

  
};
var operators = {
    '+': function(a, b) { return a + b },
    '*': function(a, b) { return a * b },
    '-': function(a, b) { return a - b }

     
}