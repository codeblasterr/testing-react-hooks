import React, { useReducer } from 'react'
import * as ACTIONS from '../store/actions'
import * as Reducer from '../store/reducer'

const TestHookReducer = () => {
  const [reducerState, dispatch] = useReducer(
    Reducer.Reducer1,
    Reducer.initialState
  )

  const dispatchActionSuccess = () => {
    dispatch(ACTIONS.SUCCESS)
  }

  const dispatchActionFailure = () => {
    dispatch(ACTIONS.FAILURE)
  }

  return (
    <div>
      <div data-test="text-state-change">
        {reducerState.stateprop1 ? (
          <p>stateprop1 is true</p>
        ) : (
          <p>stateprop1 is false</p>
        )}
      </div>
      <button onClick={dispatchActionSuccess} data-test="success-button">
        Success
      </button>
      <button onClick={dispatchActionFailure} data-test="failure-button">
        Failure
      </button>
    </div>
  )
}

export default TestHookReducer
