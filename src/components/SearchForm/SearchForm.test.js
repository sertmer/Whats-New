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

  it('should reset state when resetInputs is called',() => {
    const expected = {search: ''}
    const defaultState = {search: 'string'}

    wrapper.setState(defaultState)
    wrapper.instance().resetInputs()

    expect(wrapper.state()).toEqual(expected)
  })

  it('should run handleClick when the button is clicked', () => {
    wrapper.instance().handleClick = jest.fn()
    wrapper.find('button').simulate('click')

    expect(wrapper.instance().handleClick).toHaveBeenCalled()
  })

  it('should call searchCurrentPage & resetInputs when handleClick is invoked', () => {
    const mockQuery = 'string'
    wrapper.instance().resetInputs = jest.fn()
    wrapper.instance().handleClick(mockQuery)

    expect(mockSearchCurrentPage).toHaveBeenCalled()
    expect(wrapper.instance().resetInputs).toHaveBeenCalled()
  })

})