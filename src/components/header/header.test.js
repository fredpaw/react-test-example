import React from 'react';
import { shallow } from 'enzyme';
import Header from './header';
import { findByTestAttr } from '../../../utils';

const setup = (props = {}) => {
  return shallow(<Header {...props} />)
}

describe('Header component', () => {
  let component;

  beforeAll(() => {
    component = setup();
  });

  it('Should render without errors', () => {
    const wrapper = findByTestAttr(component, 'headerComponent');
    expect(wrapper.length).toBe(1);
  });

  it('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logoIMG');
    expect(logo.length).toBe(1);
  });
});
