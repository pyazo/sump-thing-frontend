import React from 'react';
import { shallow } from 'enzyme';

import App from '../components/App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('has a theme', () => {
    expect(wrapper.props().theme).toBeDefined();
  });

  it('renders children', () => {
    const wrapperWithChildren = shallow((
      <App>
        <div className="test">
          hi!
        </div>
      </App>
    ));

    expect(wrapperWithChildren.find('.test').length).toEqual(1);
  });
});
