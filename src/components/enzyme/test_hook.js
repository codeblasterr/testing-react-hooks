import React, { useState } from 'react'

const TestHook = props => {
  const [state, setState] = useState('Initial State')

  const changeState = () => {
    setState('Initial State Changed')
  }

  const changeNameToSteve = () => {
    props.changeName()
  }

  return (
    <div>
      <button onClick={changeState} data-test="change-state-button">
        State Change Button
      </button>
      <p data-test="paragraph-state">{state}</p>
      <button onClick={changeNameToSteve} data-test="change-name-button">
        Change Name
      </button>
      <p data-test="paragraph-name">{props.name}</p>
    </div>
  )
}

export default TestHook
