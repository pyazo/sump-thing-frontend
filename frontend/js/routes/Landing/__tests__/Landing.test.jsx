import React from 'react';
import { shallow } from 'enzyme';

import Landing from '../index';

describe('<Landing />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Landing />);
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
