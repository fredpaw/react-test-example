import checkPropTypes from 'check-prop-types';
import CheckPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) => {
  return component.find(`[data-test="${attr}"]`)
}

export const checkProps = (component, expectedProps) => {
  return CheckPropTypes(component.propTypes, expectedProps, 'props', component.name);
}