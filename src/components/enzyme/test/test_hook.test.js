import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from './testUtils'

import TestHook from '../test_hook'

const defaultProps = {
  name: '',
  changeName: jest.fn()
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<TestHook {...setupProps} />)
}

describe('<TestHook />', () => {
  describe('Render', () => {
    it('should render without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Interactions', () => {
    it('should call `changeName()` on button click', () => {
      const changeName = jest.fn()
      const wrapper = setup({ changeName })
      const button = findByTestAttr(wrapper, 'change-name-button')
      button.simulate('click')
      expect(changeName).toHaveBeenCalled()
    })

    it('should update the text when `State Change Button` is clicked', () => {
      const wrapper = setup()
      const button = findByTestAttr(wrapper, 'change-state-button')
      button.simulate('click')

      const paragraph = findByTestAttr(wrapper, 'paragraph-state')
      expect(paragraph.text()).toBe('Initial State Changed')
    })
  })
})
