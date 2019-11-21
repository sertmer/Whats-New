import React from 'react'
import NewsArticle from './NewsArticle'
import { shallow } from 'enzyme'

describe('NewsArticle', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsArticle 
      headline={'b'}
      description={'b'}
      img={'c'}
      url={'d'}
      /> )

    expect(wrapper).toMatchSnapshot()
  })
})