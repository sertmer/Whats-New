import React from 'react';
import App from './App';
import { shallow } from 'enzyme'


it('should match the snapshot with all data passed in correctly', () => {
  const wrapper = shallow(<App />)

  expect(wrapper).toMatchSnapshot()
})
