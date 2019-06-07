import React from 'react';
import { shallow } from 'enzyme';

import Loading from '../index';

describe('<Loading />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Loading />);    
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });
});
