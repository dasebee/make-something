import React from 'react';
import Buttons from '../src/components/buttons';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {inputCalculationValue} from '../src/actions/calculatorActions';


describe('Buttons compoenent ===========', () => {
  const mockStore = configureStore();
  
  let wrapper, store;
  beforeEach(() => {
    wrapper = shallow(<Buttons />);
    store = mockStore();
  });
  it('Dumb Component를 렌더한다', () => {
    expect(wrapper.length).toBe(1);
  });
  it('input Calculation Value action에 dispatch', () => {
    let action;
    store.dispatch(inputCalculationValue('1'));
    store.dispatch(inputCalculationValue('+'));
    action = store.getActions();
    expect(action[0].type).toBe('INPUT_CALCULATION_VALUE');
    expect(action[0].value).toBe('1');
    expect(action[1].value).toBe('+');
  });
});
