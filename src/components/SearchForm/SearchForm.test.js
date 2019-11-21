import React from 'react'
import SearchForm from './SearchForm'
import { shallow } from 'enzyme'

describe('SearchForm', () => {
  let wrapper
  let mockSearchCurrentPage = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<SearchForm 
      searchCurrentPage={mockSearchCurrentPage}
      />)
  })

  it('should match the snapshot with all data passed in correctly', () => {  
    expect(wrapper).toMatchSnapshot()
  })

  it('should update state when handleChange is invoked', () => {
    const mockEvent = {target: {name: 'search', value: 'search query'}}

    expect(wrapper.state('search')).toEqual('')

    wrapper.instance().handleChange(mockEvent)
    
    expect(wrapper.state('search')).toEqual('search query')
  })
})