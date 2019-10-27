import React from 'react';
import { mount } from 'enzyme';

import * as reduxMock from 'react-redux';
import * as authMock from 'js/redux/auth';

import Signup from '../index';

describe('<Signup />', () => {
  let component;
  let dispatch;

  beforeEach(() => {
    reduxMock.useSelector = jest.fn();
    reduxMock.useSelector.mockReturnValue({});

    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = mount(<Signup />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('attempts to signup', () => {
    const signup = jest.fn();

    authMock.signup = () => signup;

    component
      .find('form')
      .simulate('submit');

    expect(dispatch).toHaveBeenCalledWith(signup);
  });
});
