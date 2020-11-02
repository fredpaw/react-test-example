import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAttr, testStore } from '../utils';

const setup = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  // console.log(wrapper.debug());
  return wrapper;
}

describe('App Component', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: 'Example title 1',
          body: 'Some text'
        },
        {
          title: 'Example title 2',
          body: 'Some text'
        },
        {
          title: 'Example title 3',
          body: 'Some text'
        },
      ]
    }
    wrapper = setup(initialState);
  });

  it('Should render without errors', () => {
    const component = findByTestAttr(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

  it('Should update the hideBtn state on class component', () => {
    const instance = wrapper.instance();
    instance.updateState();
    const newState = instance.state.hideBtn;
    expect(newState).toBe(true);
  });
})
