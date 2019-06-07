import React from 'react';
import { shallow } from 'enzyme';

import * as reduxMock from 'react-redux';

import Dashboard from '../index';

describe('<Dashboard />', () => {
  let component;
  let dispatch;

  beforeEach(() => {
    reduxMock.useSelector = jest.fn();
    reduxMock.useSelector.mockReturnValue({});

    dispatch = jest.fn();

    reduxMock.useDispatch = () => dispatch;

    component = shallow(<Dashboard />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
