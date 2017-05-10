import React from 'react';
import { shallow } from 'enzyme';

import VisibleTodoList from '../../containers/VisibleTodoList';
import TodoInsert from '../TodoInsert';
import TodoReset from '../TodoReset';
import Footer from '../Footer';

import App from '../App';


describe('A suite for <App /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render <VisibleTodoList /> components', () => {
    expect(wrapper.find(VisibleTodoList).length).toBe(1);
  });

  it('should render <TodoInsert /> components', () => {
    expect(wrapper.find(TodoInsert).length).toBe(1);
  });

  it('should render <TodoReset /> components', () => {
    expect(wrapper.find(TodoReset).length).toBe(1);
  });

  it('should render <Footer /> components', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

});