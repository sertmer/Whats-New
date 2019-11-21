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
      headline: 'a',
      img: 'b',
      url: 'c', 
      description: 'd'
    }]
    const mockLocal = [{
      id: 1,
      headline: 'e',
      img: 'f',
      url: 'g', 
      description: 'h'
    }]
    const expected = {currentPage: mockEntertainment}
    const defaultState = {currentPage: mockLocal}

    wrapper.setState(defaultState)
    expect(wrapper.state()).toEqual(defaultState)

    wrapper.instance().changeCurrentPage(mockEntertainment)
    expect(wrapper.state()).toEqual(expected)
  })

  it('should update state to reflect searchCurrentPage results', () => {
    const mockLocal = [{
      id: 1,
      headline: 'e',
      img: 'f',
      url: 'g', 
      description: 'h'
    },
    {
      id: 2,
      headline: 'i',
      img: 'j',
      url: 'k', 
      description: 'l'
    },
    {
      id: 3,
      headline: 'm',
      img: 'n',
      url: 'o', 
      description: 'p'
    }]
    const defaultState = {currentPage: mockLocal}
    const query = 'i'
    const expected = {currentPage: [
        {
          id: 2,
          headline: 'i',
          img: 'j',
          url: 'k', 
          description: 'l'
        }
      ]
    }

    wrapper.setState(defaultState)

    wrapper.instance().searchCurrentPage(query)
    expect(wrapper.state()).toEqual(expected)
  })

})


