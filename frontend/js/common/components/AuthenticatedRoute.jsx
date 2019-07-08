import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import Loading from 'js/common/components/Loading';
import { validateToken, logout } from 'js/redux/auth';

export default function AuthenticatedRoute({ path, component, exact }) {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function renderComponent() {
    if (!auth.hasAuthed && !auth.loading) dispatch(validateToken());

    // * This is safer than using a pure redirect because
    // * the Login component also redirects, this ensures
    // * no race conditions.
    if (auth.hasAuthed && !auth.isLoggedIn) dispatch(logout());

    if (auth.hasAuthed && auth.isLoggedIn) return React.createElement(component);

    return <Loading />;
  }

  return <Route path={path} exact={exact} render={renderComponent} />;
}

AuthenticatedRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.func,
  ]).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

AuthenticatedRoute.defaultProps = {
  exact: false,
};
