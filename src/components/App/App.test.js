import React from 'react';
import App from './App';
import { shallow } from 'enzyme'


describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should match the snapshot with all data passed in correctly', () => {   
    expect(wrapper).toMatchSnapshot()
  })

  it('Should update state when changeCurrentPage is invoked', () => {
    const mockEntertainment = [{
      id: 1,
      headline: 'string',
      img: 'string',
      url: 'string', 
      description: 'string'
    }]
    const mockLocal = [{
      id: 1,
      headline: 'string',
      img: 'string',
      url: 'string', 
      description: 'string'
    }]
    const expected = {currentPage: mockEntertainment}
    const defaultState = {currentPage: mockLocal}

    wrapper.setState(defaultState)
    expect(wrapper.state()).toEqual(defaultState)

    wrapper.instance().changeCurrentPage(mockEntertainment)
    expect(wrapper.state()).toEqual(expected)
  })

})


