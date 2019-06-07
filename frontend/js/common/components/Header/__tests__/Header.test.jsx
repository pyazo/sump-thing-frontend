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

  it('renders default text', () => {
    const text = component
      .find(Typography)
      .first()
      .text();

    expect(text).toEqual('Sump Thing');
  });

  it('renders a passed in text', () => {
    component = mount(<Header text="test" />);

    const text = component
      .find(Typography)
      .first()
      .text();

    expect(text).toEqual('test');
  });

  it('renders the correct action', () => {
    const user = {
      first_name: 'Test',
      last_name: 'User',
    };

    component = mount(<Header user={user} />);

    reduxMock.useSelector = (fn) => {
      expect(component.find(Avatar).length).toEqual(0);

      const state = {
        auth: {
          isLoggedIn: true,
        },
        currentUser: {
          loading: false,
        },
      };

      return fn(state);
    };

    reload();

    expect(component.find(Avatar).length).toEqual(1);
  });
});
