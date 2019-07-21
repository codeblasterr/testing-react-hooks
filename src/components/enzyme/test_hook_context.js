import React from 'react'

import { useAppContext } from '../store/context'

const TestHookContext = () => {
  const context = useAppContext()

  return (
    <div>
      <button onClick={context.changeTextProp} data-test="change-text-button">
        Change Text
      </button>
      <p data-test="context-text">{context.stateProp}</p>
    </div>
  )
}

export default TestHookContext
