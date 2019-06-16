import React from 'react';
import { mount } from 'enzyme';

import * as reduxMock from 'react-redux';

import Signup from '../index';

describe('<Signup />', () => {
  let component;
  let dispatch;

  beforeEach(() => {
    reduxMock.useSelector = jest.fn();
    reduxMock.useSelector.mockReturnValue({});

    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = mount(<Signup />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
