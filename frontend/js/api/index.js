import Request from './Request';

export default {
  login: (username, password) => Request.request('post', '/api/login', { username, password }, false),
  validateToken: () => Request.request('get', '/api/validate_token', {}, true),
  user: new Request('/user'),
};
