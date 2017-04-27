import React from 'react';
import { shallow } from 'enzyme';

import FilterLink from '../../containers/FilterLink';

import Footer from '../Footer';


describe('A suite for <Footer /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('should render 4 FilterLink component', () => {
    expect(wrapper.find(FilterLink).length).toBe(4);
  });

  it('should render <FilterLink /> first props filter', () => {
    const arr = wrapper.find(FilterLink);
    expect(arr.first().props()).toEqual({"children": "ALL", "filter": "SHOW_ALL"});
  });
});