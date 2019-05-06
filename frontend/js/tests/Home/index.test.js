import React from 'react';
import { shallow } from 'enzyme';

import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import Home from '../../components/Home';

describe('<Home />', () => {
  let wrapper;

  beforeEach(() => {
    // We need to use `.dive()` to push through high order components.
    wrapper = shallow(<Home classes={{ main: 'main' }} />).dive();
  });

  it('renders', () => {
    expect(wrapper).toBeDefined();
  });

  it('has a default state', () => {
    expect(wrapper.state().count).toEqual(0);
  });

  it('renders a button', () => {
    expect(wrapper.find(Button)).toBeDefined();
  });

  it('increments the state when the button is clicked', () => {
    // NOTE: If you want to test functions called on material-ui components
    // you must import them & use enzymes `.find` method.
    wrapper.find(Button).simulate('click');

    expect(wrapper.state().count).toEqual(1);
  });

  it('displays the correct number', () => {
    // This example is included due to its complexity
    const count =
    // Get the wrapper
      wrapper
        // Find the Typography component(s)
        .find(Typography)
        // Only select the component where subheading should be
        .findWhere(n => n.props().type === 'subheading')
        // Dive into the component 1 layer.
        // The first later below is the `withStyles` decorator
        .dive()
        // Dive one more time to get into our Typography component
        .dive();

    expect(count.text()).toEqual('0');
  });
});
