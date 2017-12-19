import React from 'react';
import ConnectedDisplay, {Display} from '../src/components/display';
import { shallow, mount, configure } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

// import {addInputs,subtractInputs} from '../src/js/actions/calculatorActions'
import {createStore} from 'redux';
// import calculatorReducers from '../src/js/reducers/calculatorReducers'

describe(' Display component ======= ', () => {
  let wrapper;
  const result = 10;
  beforeEach(() => {
    wrapper = shallow(<Display result={result}/>);
  });
  it('Dumb Component를 렌더한다', () => {
    expect(wrapper.length).toEqual(1);
  });
  it('10을 전달받으면 출력값은 10이다', () => {
    expect(wrapper.props().children).toBe(result);
  });
});  

describe('Display React-Redux ', () => {
  const initialState = {result: 10}
  const mockStore = configureStore();
  let store, container ;
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<ConnectedDisplay store={store}/>)
  });
  it('Conected component를 렌더한다', () => {
    expect(container.length).toBe(1);
  });
  it('prop의 값과 initialstate의 값이 같다', () => {
    expect(container.prop('result')).toBe(initialState.result);
  });
});