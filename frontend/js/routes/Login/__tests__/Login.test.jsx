import React from 'react';
import { mount } from 'enzyme';
import Typography from '@material-ui/core/Typography';

import * as reduxMock from 'react-redux';
import * as authMock from 'js/redux/auth';

import Login from '../index';

describe('<Login />', () => {
  let component;
  let dispatch;

  const reload = () => {
    component.unmount();
    component.mount();
  };

  beforeEach(() => {
    reduxMock.useSelector = jest.fn();
    reduxMock.useSelector.mockReturnValue({});

    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = mount(<Login />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('attempts to login', () => {
    const login = jest.fn();

    authMock.login = () => login;

    component
      .find('form')
      .simulate('submit');

    expect(dispatch).toHaveBeenCalledWith(login);
  });

  it('displays an error', () => {
    const typographyCount = component.find(Typography).length;
    const auth = {
      error: 'test',
    };

    reduxMock.useSelector.mockReturnValue(auth);

    reload();

    const updatedTypographyCount = component.find(Typography);

    expect(updatedTypographyCount).toHaveLength(typographyCount + 1);
  });
});
