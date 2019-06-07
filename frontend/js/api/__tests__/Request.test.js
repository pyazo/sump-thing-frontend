import * as mockAxios from 'axios';
import Request from '../Request';


describe('Request', () => {
  let test;

  beforeEach(() => {
    test = new Request('/test');
  });

  it('has all endpoints by default', async () => {
    try {
      const list = await test.list();
      const get = await test.get(0);
      const create = await test.create({ name: 'test' });
      const remove = await test.remove(0);
      const update = await test.update(0, { name: 'test2' });

      expect(list).toBeDefined();
      expect(get).toBeDefined();
      expect(create).toBeDefined();
      expect(remove).toBeDefined();
      expect(update).toBeDefined();
    } catch (err) {
      console.error(err);
    }
  });

  it('calls the correct endpoint with the list call', async () => {
    mockAxios.default = jest.fn();

    try {
      await test.list();
    } catch (err) {
      console.error(err);
    }

    const { url, method } = mockAxios.default.mock.calls[0][0];

    expect(url).toBe('http://localhost/test');

    expect(method).toBe('GET');
  });

  it('calls the correct endpoint with the get call', async () => {
    mockAxios.default = jest.fn();

    try {
      await test.get(0);
    } catch (err) {
      console.error(err);
    }


    const { url, method } = mockAxios.default.mock.calls[0][0];

    expect(url).toBe('http://localhost/test/0');

    expect(method).toBe('GET');
  });

  it('calls the correct endpoint with the create call', async () => {
    mockAxios.default = jest.fn();

    try {
      await test.create({});
    } catch (err) {
      console.error(err);
    }

    const { url, method } = mockAxios.default.mock.calls[0][0];

    expect(url).toBe('http://localhost/test');

    expect(method).toBe('POST');
  });

  it('calls the correct endpoint with the remove call', async () => {
    mockAxios.default = jest.fn();

    try {
      await test.remove(0);
    } catch (err) {
      console.error(err);
    }

    const { url, method } = mockAxios.default.mock.calls[0][0];

    expect(url).toBe('http://localhost/test/0');

    expect(method).toBe('DELETE');
  });

  it('calls the correct endpoint with the update call', async () => {
    mockAxios.default = jest.fn();

    try {
      await test.update(0, {});
    } catch (err) {
      console.error(err);
    }

    const { url, method } = mockAxios.default.mock.calls[0][0];

    expect(url).toBe('http://localhost/test/0');

    expect(method).toBe('PUT');
  });

  it('only exposes the methods asked for', async () => {
    const listOnly = new Request('/list', false, ['list']);

    let error;

    try {
      await listOnly.list();

      await listOnly.get(0);
    } catch (err) {
      error = err;
    }

    expect(mockAxios.default).toHaveBeenCalled();
    expect(error.message).toBe('getByIdNotValid');
  });
});
