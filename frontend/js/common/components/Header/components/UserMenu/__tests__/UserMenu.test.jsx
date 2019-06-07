import React from 'react';
import { mount } from 'enzyme';

import * as reduxMock from 'react-redux';

import UserMenu from '../index';

describe('<UserMenu />', () => {
  let component;

  beforeEach(() => {
    const user = {
      first_name: 'Test',
      last_name: 'User',
    };

    reduxMock.useSelector = jest.fn();
    reduxMock.useDispatch = jest.fn();

    component = mount(<UserMenu user={user} />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('opens the menu', () => {
    const menuOpen = () => component
      .find('Menu')
      .first()
      .props()
      .open;

    expect(menuOpen()).toBe(false);

    component
      .find('button')
      .first()
      .simulate('click');

    expect(menuOpen()).toBe(true);
  });
});
