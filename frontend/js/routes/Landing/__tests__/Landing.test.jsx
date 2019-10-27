import React from 'react';
import { mount } from 'enzyme';

import * as reduxMock from 'react-redux';

import Landing from '../index';

describe('<Landing />', () => {
  let component;
  let dispatch;

  beforeEach(() => {
    reduxMock.useSelector = jest.fn();
    reduxMock.useSelector.mockReturnValue({});

    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = mount(<Landing />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
