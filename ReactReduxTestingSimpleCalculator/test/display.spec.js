import React from 'react'
import ConnectedDisplay, {Display} from '../src/components/display';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import {Provider} from 'react-redux'

// import {addInputs,subtractInputs} from '../src/js/actions/calculatorActions'
import {createStore} from 'redux'
// import calculatorReducers from '../src/js/reducers/calculatorReducers'

describe(' Display === Shallow render react component ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Display />);
  });
  it('Dumb Component 렌더', () => {
    expect(wrapper.length).toEqual(1);
  });
});