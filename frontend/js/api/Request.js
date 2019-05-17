import axios from 'axios';
import store from 'store';

function RequestException(message) {
  this.message = message;
  this.name = 'RequestException';
}

export default class Request {
  constructor(endpoint, auth = false, calls = ['list', 'getById', 'create', 'update', 'remove', 'listForAccount']) {
    this.endpoint = endpoint;
    this.calls = calls;
    this.auth = auth;
  }

  static request = async (method, endpoint, data = {}, auth = false) => {
    try {
      const authHeader = auth ? `Bearer ${store.get('token')}` : '';

      const options = {
        method,
        data,
        url: `${globals.API_URL}${endpoint}`,
        headers: {
          Authorization: authHeader,
          'Cache-Control': 'max-age=120',
        },
        responseType: 'json',
      };

      return await axios(options);
    } catch (err) {
      throw new RequestException(err);
    }
  }

  list = (auth = false) => {
    if (this.calls.includes('list')) {
      return Request.request('GET', this.endpoint, {}, this.auth || auth);
    }
    throw new RequestException('ListNotValid');
  }

  get = (id, auth = false) => {
    if (this.calls.includes('getById')) {
      return Request.request('GET', `${this.endpoint}/${id}`, {}, this.auth || auth);
    }
    throw new RequestException('getByIdNotValid');
  }

  create = (data, auth = false) => {
    if (this.calls.includes('create')) {
      return Request.request('POST', this.endpoint, data, this.auth || auth);
    }
    throw new RequestException('CreateNotValid');
  }

  remove = (id, auth = false) => {
    if (this.calls.includes('remove')) {
      return Request.request('delete', `${this.endpoint}/${id}`, {}, this.auth || auth);
    }
    throw new RequestException('RemoveNotValid');
  }

  update = (id, data, auth = false) => {
    if (this.calls.includes('update')) {
      return Request.request('put', `${this.endpoint}/${id}`, data, this.auth || auth);
    }
    throw new RequestException('UpdateNotValid');
  }

  listForAccount = (id, auth = false) => {
    if (this.calls.includes('listForAccount')) {
      return Request.request('GET', `${this.endpoint}/account/${id}`, {}, this.auth || auth);
    }

    throw new RequestException('ListForAccountNotValid');
  }
}
