import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from './testUtils'

import * as Context from '../../store/context'
import TestHookContext from '../test_hook_context'

const setup = () => {
  return shallow(<TestHookContext />)
}

const contextValues = { changeTextProp: jest.fn(), stateProp: 'some text' }

describe('<TestHookContext />', () => {
  describe('Context Mock', () => {
    it('it should mock the context', () => {
      jest
        .spyOn(Context, 'useAppContext')
        .mockImplementation(() => contextValues)
      const wrapper = setup()
      const paragraph = findByTestAttr(wrapper, 'context-text')
      expect(paragraph.text()).toBe('some text')
    })
  })

  describe('Interactions', () => {
    it('should call `changeTextProp()` on button click', () => {
      jest
        .spyOn(Context, 'useAppContext')
        .mockImplementation(() => contextValues)
      const wrapper = setup()
      const button = findByTestAttr(wrapper, 'change-text-button')
      button.simulate('click')
      expect(contextValues.changeTextProp).toHaveBeenCalled()
    })
  })
})
