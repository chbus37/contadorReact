import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types';
import Title from './Title';



export default function CounterApp({ value }) {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(0);
    }
  return (
    <>
      <Title title="Contador" />
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleSubstract }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
