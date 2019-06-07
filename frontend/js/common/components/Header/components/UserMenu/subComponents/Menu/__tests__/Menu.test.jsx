import React from 'react';
import { mount } from 'enzyme';

import MenuItem from '@material-ui/core/MenuItem';

import * as reduxMock from 'react-redux';
import * as mockAuth from 'js/redux/auth';

import Menu from '../index';

describe('<Menu />', () => {
  let component;
  let dispatch;

  const reload = () => {
    component.unmount();
    component.mount();
  };

  beforeEach(() => {
    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = mount(<Menu open />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('has a logout function', () => {
    const logout = jest.fn();

    mockAuth.logout = () => logout;

    component
      .find(MenuItem)
      .last()
      .simulate('click');

    expect(dispatch).toHaveBeenCalledWith(logout);
  });
});
