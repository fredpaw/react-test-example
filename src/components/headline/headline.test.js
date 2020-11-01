import React from 'react';
import { shallow } from 'enzyme';
import Headline from './headline';
import { findByTestAttr, checkProps } from '../../../utils';

const setup = (props = {}) => shallow(<Headline {...props} />)

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeAll(() => {
      const props = {
        header: 'Test Header',
        desc: 'Test Desc',
      }
      wrapper = setup(props);
    })

    it('Should render without errors', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    })

    it('Should render a H1', () => {
      const h1 = findByTestAttr(wrapper, 'header');
      expect(h1.length).toBe(1);
    })

    it('Should render a Desc', () => {
      const desc = findByTestAttr(wrapper, 'desc');
      expect(desc.length).toBe(1);
    })
  });

  describe('Have NO props', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = setup();
    })

    it('Should not render', () => {
      const component = findByTestAttr(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0)
    })
  })
  
  describe('Checking PropTypes', () => {
    it('Should not throw a warning', () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [{
          fName: 'Test fName',
          lName: 'Test lName',
          email: 'test@email.com',
          age: 23,
          onlineStatus: true
        }]
      }

      const propsError = checkProps(Headline, expectedProps);

      expect(propsError).toBeUndefined();
    })
  })
  
})
