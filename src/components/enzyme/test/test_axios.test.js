import React from 'react'
import { mount } from 'enzyme'
import { findByTestAttr } from './testUtils'

import TestAxios from '../test_axios'
import axiosMock from 'axios'

const defaultProps = {
  url: ''
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return mount(<TestAxios {...setupProps} />)
}

describe('<TestAxios />', () => {
  it('should render without error', () => {
    const wrapper = setup()
    expect(wrapper.exists()).toBe(true)
  })

  it('Async axios request works', async () => {
    axiosMock.get.mockResolvedValue({ data: { title: 'some title' } })

    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const wrapper = setup({ url })
    const text = findByTestAttr(wrapper, 'loader')
    expect(text.exists()).toBe(true)

    // const title = await findByTestAttr(wrapper, 'title')
    // expect(title.exists()).toBe(true)

    expect(axiosMock.get).toHaveBeenCalled()
    expect(axiosMock.get).toHaveBeenCalledWith(url)
  })
})
