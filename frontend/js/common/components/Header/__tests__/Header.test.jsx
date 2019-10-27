import React from 'react';
import { mount } from 'enzyme';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import * as reduxMock from 'react-redux';

import Header from '../index';

describe('<Header />', () => {
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

    component = mount(<Header />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('renders the correct action', () => {
    reduxMock.useSelector = (fn) => {
      expect(component.find(Avatar).length).toEqual(0);

      const state = {
        auth: {
          isLoggedIn: true,
        },
        currentUser: {
          user: {
            first_name: 'Test',
            last_name: 'User',
          },
          loading: false,
        },
      };

      return fn(state);
    };

    reload();

    expect(component.find(Avatar).length).toEqual(1);
  });
});
