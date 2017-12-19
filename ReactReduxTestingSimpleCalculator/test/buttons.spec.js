import React from 'react';
import ConnectedButtons, {Buttons} from '../src/components/buttons';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
// import {Provider} from 'react-redux'
// import {createStore} from 'redux'

describe('Buttons compoenent ===========', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Buttons />);
  });
  it('Dumb Component가 존재한다', () => {
    expect(wrapper.length).toBe(1);
  });
});