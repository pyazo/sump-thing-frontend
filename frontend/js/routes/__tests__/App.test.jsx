import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import configureStore from 'js/store';

import App from '../App';

const store = configureStore();

describe('<App />', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <App>
          { [] }
        </App>
      </Provider>
    ).dive();
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
