import React from 'react';
import { mount } from 'enzyme';

import Button from '@material-ui/core/Button';

import * as reduxMock from 'react-redux';
import * as routerMock from 'connected-react-router';

import UnauthedActions from '../index';

describe('<UnauthedActions />', () => {
  let component;
  let dispatch;

  const reload = () => {
    component.unmount();
    component.mount();
  };

  beforeEach(() => {
    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = mount(<UnauthedActions />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('takes you to the login page on login button click', () => {
    routerMock.push = jest.fn();

    const pushAction = jest.fn();

    routerMock.push.mockReturnValue(pushAction);

    reload();

    component
      .find(Button)
      .last()
      .simulate('click');

    expect(dispatch).toHaveBeenCalledWith('/login');
  });
});
