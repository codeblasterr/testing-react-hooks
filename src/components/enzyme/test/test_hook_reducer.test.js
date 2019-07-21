import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from './testUtils'

import TestHookReducer from '../test_hook_reducer'
import * as Reducer from '../../store/reducer'
import * as ACTIONS from '../../store/actions'

const setup = () => {
  return shallow(<TestHookReducer />)
}

describe('<TestHookReducer />', () => {
  describe('Reducer & Actions', () => {
    it('should return the initial state', () => {
      expect(Reducer.initialState).toEqual({ stateprop1: false })
    })

    it('should change stateprop1 from false to true', () => {
      expect(Reducer.Reducer1(Reducer.initialState, ACTIONS.SUCCESS)).toEqual({
        stateprop1: true
      })
    })
  })

  describe('Render', () => {
    it('should render without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Interactions', () => {
    it('should render `stateprop1 is true` when `Success Button` is clicked', () => {
      const wrapper = setup()
      const button = findByTestAttr(wrapper, 'success-button')
      button.simulate('click')

      const divText = findByTestAttr(wrapper, 'text-state-change')
      expect(divText.text()).toBe('stateprop1 is true')
    })

    it('should render `stateprop1 is false` when `Failure Button` is clicked', () => {
      const wrapper = setup()
      const button = findByTestAttr(wrapper, 'failure-button')
      button.simulate('click')

      const divText = findByTestAttr(wrapper, 'text-state-change')
      expect(divText.text()).toBe('stateprop1 is false')
    })
  })
})
