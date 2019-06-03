import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Loading from 'js/common/components/Loading';
import { validateToken, logout } from 'js/redux/auth';

export default function AuthenticatedRoute({ path, component }) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function renderComponent() {
    if (!auth.hasAuthed && !auth.loading) dispatch(validateToken());

    if (auth.hasAuthed && !auth.isLoggedIn) {
      dispatch(logout());
      return <Redirect to="/login" />;
    }

    if (auth.hasAuthed && auth.isLoggedIn) return React.createElement(component);

    return <Loading />;
  }

  return <Route path={path} render={renderComponent} />;
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
  path: PropTypes.string.isRequired,
};
