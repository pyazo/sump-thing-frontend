import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import * as reduxMock from 'react-redux';
import * as authMock from 'js/redux/auth';

import AuthenticatedRoute from '../AuthenticatedRoute';

describe('<AuthenticatedRoute />', () => {
  let root;
  let component;
  let dispatch;

  const reload = () => {
    root.unmount();
    root.mount();
  };

  beforeEach(() => {
    reduxMock.useSelector = jest.fn();
    reduxMock.useSelector.mockReturnValue({});

    dispatch = jest.fn();
    reduxMock.useDispatch = () => dispatch;

    root = mount(
      <MemoryRouter initialIndex={1} initialEntries={['/']}>
        <AuthenticatedRoute path="/" component={() => <Typography>authed</Typography>} />
      </MemoryRouter>
    );

    component = root
      .find(AuthenticatedRoute)
      .first();
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('validates the users token', () => {
    const auth = {
      hasAuthed: false,
      loading: false,
    };

    const validateToken = jest.fn();

    authMock.validateToken = () => validateToken;

    reduxMock.useSelector.mockReturnValue(auth);

    reload();

    expect(dispatch).toHaveBeenCalledWith(validateToken);
  });

  it('signs out a user who has invalid auth', () => {
    const auth = {
      hasAuthed: true,
      isLoggedIn: false,
    };

    const logout = jest.fn();

    authMock.logout = () => logout;

    reduxMock.useSelector.mockReturnValue(auth);

    reload();

    expect(dispatch).toHaveBeenCalledWith(logout);
  });

  it('renders the route if the user is authenticated', () => {
    const auth = {
      hasAuthed: true,
      isLoggedIn: true,
    };

    reduxMock.useSelector.mockReturnValue(auth);

    reload();

    expect(root.text()).toEqual('authed');
  });
});
