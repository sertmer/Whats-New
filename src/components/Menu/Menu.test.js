import React from 'react'
import Menu from './Menu'
import { shallow } from 'enzyme'

describe('Menu', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Menu 
      changeCurrentPage={jest.fn()}
      />)

    expect(wrapper).toMatchSnapshot()
  })
})