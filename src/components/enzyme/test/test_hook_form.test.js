import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from './testUtils'

import TestHookForm from '../test_hook_form'

const setup = () => {
  return shallow(<TestHookForm />)
}

describe('<TestHookForm />', () => {
  describe('Render', () => {
    it('should render without error', () => {
      const wrapper = setup()
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Interactions', () => {
    it('should update the change value onChange', () => {
      const event = { target: { value: 'sample text-1' } }
      const wrapper = setup()
      const input = findByTestAttr(wrapper, 'form-input')
      input.simulate('change', event)

      const textValue = findByTestAttr(wrapper, 'text-value')
      expect(textValue.text()).toBe(`Change: ${event.target.value}`)
    })

    it('should update the submit value onSubmit', () => {
      const event = {
        preventDefault: () => {},
        target: { text1: { value: 'sample text-2' } }
      }
      const wrapper = setup()
      const form = findByTestAttr(wrapper, 'form')
      form.simulate('submit', event)

      const textValue = findByTestAttr(wrapper, 'submit-value')
      expect(textValue.text()).toBe(`Submit Value: ${event.target.text1.value}`)
    })
  })
})
