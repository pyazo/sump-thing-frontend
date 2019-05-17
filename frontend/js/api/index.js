import Request from './Request';

export default {
  login: (username, password) => Request.request('post', '/api/login', { username, password }, false),
};
